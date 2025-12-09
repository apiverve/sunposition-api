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
        /// Example: 37.7749
        /// </summary>
        [JsonProperty("lat")]
        public string Lat { get; set; }

        /// <summary>
        /// The longitude of the location
        /// Example: -122.4194
        /// </summary>
        [JsonProperty("lon")]
        public string Lon { get; set; }

        /// <summary>
        /// The date to get the sun position data for (MM-dd-yyyy)
        /// Example: 12-02-2025
        /// </summary>
        [JsonProperty("date")]
        public string Date { get; set; }
    }
}
