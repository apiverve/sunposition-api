using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.SunPosition
{
    /// <summary>
    /// Query options for the Sun Position API
    /// </summary>
    public class SunPositionQueryOptions
    {
        /// <summary>
        /// The latitude of the location
        /// </summary>
        [JsonProperty("lat")]
        public double Lat { get; set; }

        /// <summary>
        /// The longitude of the location
        /// </summary>
        [JsonProperty("lon")]
        public double Lon { get; set; }

        /// <summary>
        /// The date to get the sun position data for (MM-DD-YYYY)
        /// </summary>
        [JsonProperty("date")]
        public string Date { get; set; }

        /// <summary>
        /// The time of day for the calculation (HH:mm format, 24-hour). Defaults to 00:00 if not provided
        /// </summary>
        [JsonProperty("time")]
        public string Time { get; set; }
    }
}
