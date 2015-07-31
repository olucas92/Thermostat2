var thermostat = new Thermostat();

var updateTemperature = function(){
  $('#temperature').text(thermostat.temperature)
};

// var powerSavingColours = function(){
//   ('#power-saving-mode').addClass(thermostat.energyColour);
// };

var updateColour = function(){
  thermostat.temperatureColour();
  $('#energy-colour').addClass(thermostat.energyColour)
};

var removeColour= function(){
  $('#energy-colour').removeClass();
};