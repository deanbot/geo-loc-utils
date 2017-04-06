# geo-loc-utils

A collection of geolocation/direction utilities.

* getNavigatorCoords - get current position - promise wrapper around [Geolocation.getCurrentPosition()](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition)
* degreeToCardinal - convert degree to a cardinal direction

### Install it

```
 npm install geo-loc-utils
```

### Require it (what you need)

```javascript
import { getNavigatorCoords, degreeToCardinal } from 'geo-loc-utils';
```

### Use it

#### getNavigatorCoords

params:
  * options {object} - Geolocaiton.getCurrentPosition supports [some options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
  * ignoreCache {boolean} - Results are stored in memory by default and returned by subsequent calls. To get around this pass true as the second argument to ignore cache.

```javascript
getNavigatorCoords()
  .then(position => console.log(position));
```

#### degreeToCardinal

params:
 * degree {Number} - degree to convert
 * secondaryInterCardinals {Boolean} - whether to include secondary interCardinal directions (i.e. 'NNE', 'SSW')

```javascript
const windBearing = 342;
const windDirection = degreeToCardinal(windBearing);
```