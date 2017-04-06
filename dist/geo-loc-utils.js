'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNavigatorCoords = getNavigatorCoords;
exports.degreeToCardinal = degreeToCardinal;
var config = {
  name: 'geoUtils',
  errorMessage: {
    geolocation: 'geolocation not supported'
  }
};
var supported = {
  geolocation: null
};
var coords = null;

/**
 * Get current location coordinates if supported by browser
 * @ref https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
 * @param {object} [options] - options for navigator.geolocation.getCurrentPosition
 * @param {bool} [ignoreCache] - set to true to ignore basic caching
 * @return {Promise} - resolves to coords property of navigator response
 */
function getNavigatorCoords(options, ignoreCache) {
  return new Promise(function (resolve, reject) {
    // check for browser support
    if (supported.geolocation === null) {
      supported.geolocation = 'geolocation' in navigator;
    }

    if (supported.geolocation) {
      if (coords && !ignoreCache) {
        resolve(coords);
      } else {
        navigator.geolocation.getCurrentPosition(
        // success
        function (position) {
          coords = position.coords;
          resolve(position.coords);
        },
        // error
        function (e) {
          reject(config.name + ' error(' + e.code + ') :' + e.message);
        },
        // optional
        options);
      }
    } else {
      reject(config.errorMessage.geolocation);
    }
  });
}

/**
 * Convert degree to cardinal direction
 * @see {@link https://gist.github.com/felipeskroski/8aec22f01dabdbf8fb6b|Original}
 * @param {Number} degree- degree to convert
 * @param {Boolean} [secondaryInterCardinals] - whether to include secondary interCardinal directions (i.e. 'NNE', 'SSW')
 * @return {String} - Cardinal direction
 */
function degreeToCardinal(degree, secondaryInterCardinals) {
  if (degree > 11.25 && degree < 33.75) return secondaryInterCardinals ? 'NNE' : 'NE';else if (degree > 33.75 && degree < 56.25) return secondaryInterCardinals ? 'ENE' : 'NE';else if (degree > 56.25 && degree < 78.75) return 'E';else if (degree > 78.75 && degree < 101.25) return secondaryInterCardinals ? 'ESE' : 'SE';else if (degree > 101.25 && degree < 123.75) return secondaryInterCardinals ? 'ESE' : 'SE';else if (degree > 123.75 && degree < 146.25) return 'SE';else if (degree > 146.25 && degree < 168.75) return secondaryInterCardinals ? 'SSE' : 'SE';else if (degree > 168.75 && degree < 191.25) return 'S';else if (degree > 191.25 && degree < 213.75) return secondaryInterCardinals ? 'SSW' : 'SW';else if (degree > 213.75 && degree < 236.25) return 'SW';else if (degree > 236.25 && degree < 258.75) return secondaryInterCardinals ? 'WSW' : 'SW';else if (degree > 258.75 && degree < 281.25) return 'W';else if (degree > 281.25 && degree < 303.75) return secondaryInterCardinals ? 'WNW' : 'NW';else if (degree > 303.75 && degree < 326.25) return 'NW';else if (degree > 326.25 && degree < 348.75) return secondaryInterCardinals ? 'NNW' : 'NW';else return 'N';
}

exports.default = { getNavigatorCoords: getNavigatorCoords, degreeToCardinal: degreeToCardinal };