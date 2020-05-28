import coords from "./coords";

const config = {
  name: 'geoUtils',
  errorMessage: {
    geolocation: 'geolocation not supported'
  }
};
const supported:{ geolocation?:boolean } = {};
const cache: { coords?:coords } = {};

// Get current location coordinates if supported by browser
// Ref: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
export default function(
  options: any,
  ignoreCache: boolean = false
): Promise<coords> {
  return new Promise((resolve, reject) => {
    // check for browser support
    if (supported.geolocation === null) {
      supported.geolocation = 'geolocation' in navigator;
    }

    if (!supported.geolocation) {
      reject(config.errorMessage.geolocation);
    }

    if (cache.coords && !ignoreCache) {
      resolve(cache.coords);
    } else {
      navigator.geolocation.getCurrentPosition(
        // success
        (position) => {
          const { coords } = position;
          cache.coords = coords;
          resolve(coords);
        },

        // error
        (e) => {
          reject(`${config.name} error(${e.code}) : ${e.message}`);
        },

        // optional
        options
      );
    }
  });
}
