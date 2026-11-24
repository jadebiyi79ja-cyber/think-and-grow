/*
 * Global temperature anomalies for the timeline on climate-basics.html.
 *
 * Source:  NASA GISS Surface Temperature Analysis (GISTEMP v4),
 *          "Land-Ocean: Global Means" table, J-D (January to December) column.
 *          https://data.giss.nasa.gov/gistemp/tabledata_v4/GLB.Ts+dSST.csv
 * Accessed: NOT YET DOWNLOADED.
 *
 * Leave this as null until the real CSV has been downloaded and converted.
 * Never type numbers in by hand or copy them from another website.
 * Format when filled: [[year, anomalyInDegreesC], ...]
 */
window.TEMPERATURE_DATA = null;
window.TEMPERATURE_SOURCE = {
  url: "https://data.giss.nasa.gov/gistemp/tabledata_v4/GLB.Ts+dSST.csv",
  accessed: null,
  baseline: null
};
