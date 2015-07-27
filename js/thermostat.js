var Thermostat = function() {
  this.temperature = 20
  this.maxTemp = 32
  this.minTemp = 10
  this.energyColour = "green"
};

Thermostat.prototype.increaseTemp = function(changeTempBy) {
  if(this.temperature + changeTempBy > this.maxTemp) {
    this.temperature = this.maxTemp
  }
  else {
    this.temperature += changeTempBy  
  };

}

Thermostat.prototype.decreaseTemp = function(changeTempBy) {
  if(this.temperature - changeTempBy < this.minTemp) {
    this.temperature = this.minTemp
  }
  else {
    this.temperature -= changeTempBy
  };
}

Thermostat.prototype.resetButton = function(){
  this.temperature = 20
};

Thermostat.prototype.powerSave = function(){
  this.maxTemp = 25
};

Thermostat.prototype.temperatureColour = function(){
  if(this.temperature > 24) {
    this.energyColour = "red"
  }
  else if(this.temperature < 19) {
    this.energyColour = "blue"
  }
};
