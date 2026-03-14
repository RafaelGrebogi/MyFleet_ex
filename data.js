// Author: Rafael Grebogi
// Date created: 14/03/2026
// Last modified: --
// Modified by: --


// Dataset created using ChatGPT
// Prompt used is below:
//------------------------------------------------------------------------------------------------------
// Create a mock dataset for a fleet management exercise in JavaScript.
// Each vehicle should have:
// - registration number
// - division
// - kilometres travelled
//
// Include four divisions: NSW, Utes, Luxury, and Service Vehicles.
// Add at least three vehicles per division and return the result as a JavaScript array of objects.
//------------------------------------------------------------------------------------------------------

const vehicles = [
  // NSW
  { registration: "NSW123", division: "NSW", km: 15230 },
  { registration: "NSW456", division: "NSW", km: 21840 },
  { registration: "NSW789", division: "NSW", km: 17450 },

  // Utes
  { registration: "UTE101", division: "Utes", km: 28750 },
  { registration: "UTE202", division: "Utes", km: 19320 },
  { registration: "UTE303", division: "Utes", km: 22110 },

  // Luxury
  { registration: "LUX111", division: "Luxury", km: 9400 },
  { registration: "LUX222", division: "Luxury", km: 12650 },
  { registration: "LUX333", division: "Luxury", km: 15890 },

  // Service Vehicles
  { registration: "SRV501", division: "Service Vehicles", km: 18100 },
  { registration: "SRV502", division: "Service Vehicles", km: 20640 },
  { registration: "SRV503", division: "Service Vehicles", km: 16780 }
];