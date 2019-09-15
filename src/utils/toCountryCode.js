const fs = require('fs');
const codes = require('./codes.json');

function toCountryCode (path1, path2, countryKey, scoreKey, type) {
  let emissions_parsed = [];
  let arr = require(path1);
  let arr2 = arr.map(element => [element[countryKey], element[scoreKey]]);
  for (let [country, score] of arr2) {
    let countrySet = codes.find(function (arr) {
      for (let i = 0; i < arr.length - 2; i++) {
        if (arr.slice(0, i).join(' ').toLowerCase() === country.toLowerCase()) return true;
      }
      if (arr.join('').toLowerCase().startsWith(country.replace(/\s+/g, '').toLowerCase())) return true;
      return false;
    });
    if (!countrySet) countrySet = ['null-' + country, 000];
    let code = countrySet[countrySet.length - 2];
    let output = {code};
    output[type] = Number(score);
    emissions_parsed.push(output);
  }

  fs.writeFileSync(path2, JSON.stringify(emissions_parsed, null, 2));
}

module.exports = toCountryCode
