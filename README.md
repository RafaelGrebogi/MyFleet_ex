# MyFleet Coding Exercise

This project implements a simple fleet overview page. This page displays vehicle information and summary statistics about the whole fleet and also about specific 'divisions'.

## Features

- Display a list of vehicles including:
  - Registration number
  - Division
  - Kilometres travelled

- Calculate and display:
  - Total kilometres travelled across the fleet
  - Total kilometres travelled per division

## Structure

- `index.html` – Page structure and layout
- `data.js` – Mock dataset representing the fleet
- `script.js` – Logic for populating vehicles table and calculating summaries
- `styles.css` – Minimal styling for readability

## Data

The vehicle data is simulated using a small in-memory dataset defined in `data.js`.
Dataset created using ChatGPT
Prompt used is below:
//------------------------------------------------------------------------------------------------------
Create a mock dataset for a fleet management exercise in JavaScript.
Each vehicle should have:
- registration number
- division
- kilometres travelled

Include four divisions: NSW, Utes, Luxury, and Service Vehicles.
Add at least three vehicles per division and return the result as a JavaScript array of objects.
//------------------------------------------------------------------------------------------------------

## Style 

CSS file created using ChatGPT
Prompt used is below:
//------------------------------------------------------------------------------------------------------
Give me a minimal CSS style for a table and headings to make a basic HTML page look cleaner.
//----------------------------------------------------------------------------------------------------

In a real project, this stylesheet would typically be replaced by or integrated with the client's existing UI styling standards.

## Running the project

Simply open `index.html` in a browser.

No build process or dependencies are required.

## Notes

This implementation intentionally keeps the solution lightweight and readable. I focused on clear data processing and minimal dependencies rather than introducing unnecessary frameworks, which is a similar mindset to developing for embedded or resource-constrained systems where simplicity and reliability are important.