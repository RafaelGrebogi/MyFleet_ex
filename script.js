// Author: Rafael Grebogi
// Date created: 14/03/2026
// Last modified: 15/03/2026
// Modified by: Rafael Grebogi
/*
Description:
Main script for the fleet overview page.
Loads the vehicle dataset, populates the table in the UI,
and computes summary information including total fleet distance
and kilometres travelled per division.
*/

const tableBody = document.getElementById("vehicle_table"); 

const totalKmElement = document.getElementById("total_km");

const divisionSummary = document.getElementById("division_summary");
const divisionTotals = {};


//--------------------------------------------------------------
// Looping through all vehicles in the dataset (data.js)
// and inserting them in "vehicle_table".
// Formatting distance using "toLocaleString()". Example: XXX,XXX Km

vehicles.forEach(vehicle => {
  const row = `
    <tr>
      <td>${vehicle.registration}</td>
      <td>${vehicle.division}</td>
      <td>${vehicle.km.toLocaleString()}</td>  
    </tr>
  `;

  tableBody.innerHTML += row;
});
//--------------------------------------------------------------


//--------------------------------------------------------------
// Looping through all vehicles in the dataset (data.js)
// and inserting fleet total kilometers in 'Summary'.
// Formatting distance using "toLocaleString()". Example: XXX,XXX Km
let totalKm = 0;

vehicles.forEach(vehicle => {
  totalKm += vehicle.km;
});

totalKmElement.textContent =
  "Total distance travelled (fleet): " + totalKm.toLocaleString() + " Km";

//--------------------------------------------------------------


//--------------------------------------------------------------
// Looping through all vehicles in the dataset (data.js)
// and inserting each division total kilometers in 'Summary'.
// Formatting distance using "toLocaleString()". Example: XXX,XXX Km

// Looping through all vehicles
vehicles.forEach(vehicle => {
  if (!divisionTotals[vehicle.division]) {
    divisionTotals[vehicle.division] = 0;   // If object is empty, set it to '0'
  }

  divisionTotals[vehicle.division] += vehicle.km;
});

// Looping through all divisions
for (const division in divisionTotals) {

  const item = document.createElement("li");    // Create a list item (one per division) | Using bullet point
  item.textContent = `${division}: ${divisionTotals[division].toLocaleString()} Km`;     // Format example: 'NSW: 123 Km'
  divisionSummary.appendChild(item);

}

//--------------------------------------------------------------