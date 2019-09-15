const redirect_uri = window.location.href + "/auth";
const tokenHost = 'https://apis-bank-test.apigee.net/apis/v1.0.1/oauth';
const tokenPath = '/token';
const authorizePath = '/authorize';

export async function Auth() {
	let state = Math.random().toString(36).substring(2);
	let credentials = await getCredentials();
	let code = await getCode(tokenHost + tokenPath, credentials, state);
	let token = await getToken(tokenHost + authorizePath, credentials, code);
	cacheToken(token);
	return token.access_token;
}

function getCredentials() {
	return new Promise((res, rej) => {
		let req = new XMLHttpRequest();
		req.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) res(req.responseText);
			else rej(req.status + ': ' + req.responseText);
		};
		req.open('GET', filename, true);
		req.send();
	});
}

function getCode(filename, credentials, state) {
	return request(filename + '?' + qs({
		client_id: credentials.client_id,
		redirect_uri,
		nonce: Math.floor(Math.pow(10, 16) * Math.rand()),
		response_type: 'code',
		state,
		scope: 'openid payments',
		request: null
	}), {
		json: true					//use a cached version of work out how to generate
	})
		.then((data) => {
			if (!data.state !== state) return null;
			return data.code;
		});
}

function getToken(filename, credentials, code) {
	return request(filename, {
		method: 'POST',
		headers: {
			query_hash: credentials.query_hash,
			redirect_uri,
			grant_type: 'authorization_code',
			code,
			client_assertion: null	//use a cached version of work out how to generate
		}
	});
}

function cacheToken(token) {
	let rest_listener = null;
	if (rest_listener) request(rest_listener, {
		method: 'POST',
		data: JSON.stringify(token)
	});
}

function qs (obj) {
	return encodeURIComponent(Object.entries(obj).map(([k, v]) => k + '=' + v).join('&'));
}

function request(uri, options = {}) {
	return new Promise((res, rej) => {
		let req = new XMLHttpRequest();
		req.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				if (options.json) res(JSON.parse(req.responseText));
				else res(req.responseText);
			} else rej(req.status + ': ' + req.responseText);
		};
		if (options.headers) {
			for (let [k, v] of Object.entries(options.headers)) {
				req.setRequestHeader(k, v);
			}
		}
		req.open(options.method || 'GET', uri, true);
		req.send(options.data);
	});
}