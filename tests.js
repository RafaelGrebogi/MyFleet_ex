

// Test Filter function
function test1_filter(vehicles){
    const vehiclesList = applyFilterGreaterThan(vehicles,10);
    let nCars = vehiclesList.length;
    nCars === vehicles.length-2? console.log("Test filter 'greater than': PASS"):console.log("Test filter 'greater than': FAIL");
};




// Run_Tests

function runTests(){
    test1_filter(vehicles);

};


runTests();