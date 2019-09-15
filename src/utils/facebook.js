window.fbAsyncInit = function() {
	FB.init({
	  appId            : '515464412330052',
	  autoLogAppEvents : true,
	  xfbml            : true,
	  version          : 'v4.0'
	});
}

module.exports = () => {
	FB.login(function(response) {
		if (response.authResponse) {
		console.log('Welcome!  Fetching your information.... ');
		FB.api('/me', function(response) {
		console.log('Good to see you, ' + response.name + '.');
		});
		} else {
		console.log('User cancelled login or did not fully authorize.');
		}
	});
}