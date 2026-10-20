# Sun Position API

Sun Position calculates the sun altitude and azimuth, plus compass bearing, for any geographic coordinates and time. Provide latitude and longitude to read sun elevation angles and daylight status; paid plans add panel aiming angles and shadow ratios.

[![npm version](https://img.shields.io/npm/v/@apiverve/sunposition.svg)](https://www.npmjs.com/package/@apiverve/sunposition)

This is a JavaScript wrapper for the [Sun Position API](https://apiverve.com/marketplace/sunposition?utm_source=npm&utm_medium=referral&utm_content=readme)

---

## Installation

Using npm:
```shell
npm install @apiverve/sunposition
```

Using yarn:
```shell
yarn add @apiverve/sunposition
```

---

## Configuration

Before using the Sun Position API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=npm&utm_medium=referral&utm_content=readme)

---

## Quick Start

[Get started with the Quick Start Guide](https://docs.apiverve.com/quickstart?utm_source=npm&utm_medium=referral&utm_content=readme)

The Sun Position API documentation is found here: [https://docs.apiverve.com/ref/sunposition](https://docs.apiverve.com/ref/sunposition?utm_source=npm&utm_medium=referral&utm_content=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```javascript
const sunpositionAPI = require('@apiverve/sunposition');
const api = new sunpositionAPI({
    api_key: '[YOUR_API_KEY]'
});
```

---

## Usage

---

### Perform Request

Using the API is simple. All you have to do is make a request. The API will return a response with the data you requested.

```javascript
var query = {
  lat: 37.7749,
  lon: -122.4194,
  date: "01-16-2026",
  time: "14:30",
  timezone: "America/Los_Angeles"
};

api.execute(query, function (error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log(data);
    }
});
```

---

### Using Promises

You can also use promises to make requests. The API returns a promise that you can use to handle the response.

```javascript
var query = {
  lat: 37.7749,
  lon: -122.4194,
  date: "01-16-2026",
  time: "14:30",
  timezone: "America/Los_Angeles"
};

api.execute(query)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
```

---

### Using Async/Await

You can also use async/await to make requests. The API returns a promise that you can use to handle the response.

```javascript
async function makeRequest() {
    var query = {
  lat: 37.7749,
  lon: -122.4194,
  date: "01-16-2026",
  time: "14:30",
  timezone: "America/Los_Angeles"
};

    try {
        const data = await api.execute(query);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

---

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "date": "01-16-2026",
    "time": "14:30",
    "timezone": "America/Los_Angeles",
    "timestampUTC": "2026-01-16T22:30:00.000Z",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
    },
    "sun": {
      "altitude": 0.41616137328975444,
      "azimuth": 0.5817558808515568,
      "altitudeDegrees": 23.844,
      "azimuthDegrees": 33.332,
      "compassBearing": 213.332,
      "isDaylight": true,
      "declination": -20.7961,
      "rightAscension": 19.9228,
      "hourAngle": 2.174,
      "distance": 0.983786
    },
    "equationOfTime": -9.88,
    "airMass": 2.454,
    "clearSky": {
      "directNormal": 702.4,
      "globalHorizontal": 284.9
    },
    "shadowRatio": 2.254,
    "panelAim": {
      "tilt": 66.07,
      "azimuth": 213.44
    }
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=npm&utm_medium=referral&utm_content=readme).

---

## Updates

Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=npm&utm_medium=referral&utm_content=readme) and [Privacy Policy](https://apiverve.com/privacy?utm_source=npm&utm_medium=referral&utm_content=readme).

---

## License
Licensed under the MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
