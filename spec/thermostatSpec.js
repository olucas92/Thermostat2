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

describe("maximum and minimum temperature", function(){

  it("should have a maximum temperature of 32 degrees", function(){
    expect(thermostat.maxTemp).toEqual(32)
  });

  it("should have a minimum temperature of 10 degrees", function(){
    expect(thermostat.minTemp).toEqual(10)
  });

  it("temperature should not be able to go above 32 degrees", function(){
    thermostat.increaseTemp(25)
    expect(thermostat.temperature).toEqual(32)
  });

  it("temperature should not be able to go below 10 degrees", function(){
    thermostat.decreaseTemp(40)
    expect(thermostat.temperature).toEqual(10)
  });

});

describe("reset capabilities", function(){

  it("should go back to 20 degrees after being reset", function(){
    thermostat.increaseTemp(5)
    expect(thermostat.temperature).toEqual(25)
    thermostat.resetButton()
    expect(thermostat.temperature).toEqual(20)
  });

});

describe("power save mode", function(){

  it("should have a maximum temperature of 25 degrees when power save is on", function(){
    thermostat.powerSave()
    expect(thermostat.maxTemp).toEqual(25)
  });

  it("should not be able to go above 25 degrees when power save is on", function(){
    thermostat.powerSave()
    thermostat.increaseTemp(20)
    expect(thermostat.temperature).toEqual(25)
  });

});

describe("colour co-ordination", function(){

  it("should be green when between 19 and 24 degrees", function(){
    thermostat.increaseTemp(3)
    thermostat.temperatureColour()
    expect(thermostat.energyColour).toEqual("green")
  });

  it("should be red when over 25 degrees", function(){
    thermostat.increaseTemp(10)
    thermostat.temperatureColour()
    expect(thermostat.energyColour).toEqual("red")
  });

  it("should be blue when under 19 degrees", function(){
    thermostat.decreaseTemp(10)
    thermostat.temperatureColour()
    expect(thermostat.energyColour).toEqual("blue")
  });

});


});