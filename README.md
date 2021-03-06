# geo-loc-utils

A small collection of geolocation/direction utilities.

* getNavigatorCoords - get current position (a promise wrapper around [Geolocation.getCurrentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition))
* degreeToCardinal - convert degree to a cardinal direction

### Install

`npm install geo-loc-utils`

### getNavigatorCoords

params:
  * `options` {object} - Geolocaiton.getCurrentPosition supports [some options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
  * `ignoreCache` {boolean} - Results are stored in memory by default and returned by subsequent calls. To get around this pass true as the second argument to ignore cache.

```js
import { getNavigatorCoords } from 'geo-loc-utils';

// prompts browser to allow location access
getNavigatorCoords()
  .then(position => console.log(position));
```

### degreeToCardinal

params:
 * `degree` {Number} - degree to convert
 * `secondaryInterCardinals` {Boolean} - whether to include secondary interCardinal directions (i.e. 'NNE', 'SSW')

```js
import { degreeToCardinal } from 'geo-loc-utils';

const windBearing = 342;
const windDirection = degreeToCardinal(windBearing);
console.log(windDirection);
```

# Development

- Notes:
  - Written in TypeScript
  - Compiled to UMD via WebPack
  - Compiled to ES6 via TSC
  - Typings generated by TSC
  - geolocation isn't supported when serving localhostf
- Setup: `pnpm install`
- Serve: `pnpm run start`

See [index.ejs](./index.ejs)

## Runtimes

Latest tested runtimes

- node: 10.16.3
- pnpm: 2.15.1
