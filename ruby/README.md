# Sun Position API - Ruby Gem

Sun Position calculates the sun altitude and azimuth, plus compass bearing, for any geographic coordinates and time. Provide latitude and longitude to read sun elevation angles and daylight status; paid plans add panel aiming angles and shadow ratios.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_sunposition'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_sunposition
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_sunposition'

# Initialize the client
client = APIVerve::Sunposition::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  lat: 37.7749,
  lon: -122.4194,
  date: "01-16-2026",
  time: "14:30",
  timezone: "America/Los_Angeles"
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ lat: 37.7749, lon: -122.4194, date: "01-16-2026", time: "14:30", timezone: "America/Los_Angeles" })
  puts response["data"]
rescue APIVerve::Sunposition::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Sunposition::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Sunposition::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/sunposition?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/sunposition?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/sunposition?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
