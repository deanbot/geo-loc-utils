import coords from "./coords";

const config = {
  name: 'geoUtils',
  errorMessage: {
    geolocation: 'geolocation not supported'
  }
};
const cache: { coords?:coords } = {};

// Get current location coordinates if supported by browser
// Ref: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
export default function(
  options?: any,
  ignoreCache?: boolean
): Promise<coords> {
  // check for browser support
  const supported = 'geolocation' in navigator;
  return new Promise((resolve, reject) => {

    if (!supported) {
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
