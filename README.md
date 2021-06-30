# ms

Use this package to easily convert various time formats to milliseconds.

## Examples

```js
toMs('2 days')  // 172800000
toMs('1d')      // 86400000
toMs('10h')     // 36000000
toMs('2.5 hrs') // 9000000
toMs('2h')      // 7200000
toMs('1m')      // 60000
toMs('5s')      // 5000
toMs('1y')      // 31557600000
toMs('100')     // 100
toMs('-3 days') // -259200000
toMs('-1h')     // -3600000
toMs('-200')    // -200
```

### Convert from Milliseconds

```js
fromMs(60000)             // "1m"
fromMs(2 * 60000)         // "2m"
fromMs(-3 * 60000)        // "-3m"
fromMs(toMs('10 hours'))    // "10h"
```

### Time Format Written-Out

```js
fromMs(60000, { long: true })             // "1 minute"
fromMs(2 * 60000, { long: true })         // "2 minutes"
fromMs(-3 * 60000, { long: true })        // "-3 minutes"
fromMs(toMs('10 hours'), { long: true })    // "10 hours"
```

## Features

- Works both in [Node.js](https://nodejs.org) and in the browser
- Provides functions to convert from milliseconds and to milliseconds
- If you pass a string with a number and a valid unit, the number of equivalent milliseconds is returned
- TypeScript
- ES6 import supported