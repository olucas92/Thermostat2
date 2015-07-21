describe("Thermostat", function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

describe("by default", function(){

  it("thermostat should start at 20 degrees", function(){
    expect(thermostat.temperature).toEqual(20)
  });

});

describe("changing temperature", function(){

  it("should be able to increase temperature", function(){
    thermostat.increaseTemp(1)
    expect(thermostat.temperature).toEqual(21)
  });

  it("should be able to decrease temperature", function(){
    thermostat.decreaseTemp(1)
    expect(thermostat.temperature).toEqual(19)
  });

});


});