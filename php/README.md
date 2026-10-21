# Sun Position API - PHP Package

Sun Position calculates the sun altitude and azimuth, plus compass bearing, for any geographic coordinates and time. Provide latitude and longitude to read sun elevation angles and daylight status; paid plans add panel aiming angles and shadow ratios.

## Installation

Install via Composer:

```bash
composer require apiverve/sunposition
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Sunposition\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'lat' => 37.7749,
    'lon' => -122.4194,
    'date' => '01-16-2026',
    'time' => '14:30',
    'timezone' => 'America/Los_Angeles'
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Sunposition\Client;
use APIVerve\Sunposition\Exceptions\APIException;
use APIVerve\Sunposition\Exceptions\ValidationException;

try {
    $response = $client->execute(['lat' => 37.7749, 'lon' => -122.4194, 'date' => '01-16-2026', 'time' => '14:30', 'timezone' => 'America/Los_Angeles']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/sunposition?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/sunposition?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/sunposition?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
