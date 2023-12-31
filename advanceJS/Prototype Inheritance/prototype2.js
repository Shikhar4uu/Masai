//                          SIMULATION GAME
// Task : Imagine you are developing a simulation game that involves various kinds of vehicles. Using the concepts of inheritance, prototype chains, and object-oriented design patterns learned in class.
// Instructions:
// Create a basic Vehicle constructor function that initializes properties like brand, model, speed, and fuelType.

// Using the prototype, add common methods to the Vehicle object like accelerate(), brake(), and refuel().

// accelerate() should increase the speed of the vehicle.
// brake() should decrease the speed.
// refuel() should log a message indicating the vehicle is refueling.
// Now, create a Car constructor function. The Car function should inherit properties and methods from the Vehicle object. Additionally, Car should have an extra property numberOfWheels and a method honk() that logs a honking sound.

// Similarly, create an Airplane constructor function that inherits from Vehicle. It should have properties numberOfEngines and hasLandingGear and a method takeOff() that logs a message indicating the airplane is taking off.

// Show how you would create a new instance of Car and Airplane, and demonstrate invoking their methods, ensuring that both types of vehicles can still accelerate, brake, and refuel through their prototype chain.

// function Vehicle(brand, model, speed, fueltype){
//     this.brand = brand;
//     this.model = model;
//     this.speed = speed;
//     this.fueltype = fueltype;

// }

// Vehicle.prototype.accelarate = function(){


// }
// Vehicle.prototype.brake = function(){

// }
// Vehicle.prototype.refuel = function(){

// }

// Object.setPrototypeOf(Car, Vehicle);

// function Car(numberofWheels, honk){
//          this.numberofWheels = numberofWheels;
//          this.honk = function(){
//             console.log("honking sound")
//          }
// }

// function Airplane(numberOfEngines, hasLandingGear, takeoff){
//       this.numberOfEngines = numberOfEngines;
//       this.hasLandingGear = hasLandingGear;
//       this.takeoff = function(){
//         console.log("airplane is taking Off")
    
//       }

// }



// Vehicle constructor
function Vehicle(brand, model, speed, fuelType) {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fuelType = fuelType;
  }
  
  // Adding common methods to the Vehicle prototype
  Vehicle.prototype.accelerate = function(badao) {
    if(badao>0){
    this.speed += badao;
    console.log(`${this.brand} ${this.model} is accelerating. Current speed: ${this.speed} km/h`);
  } };
  
  Vehicle.prototype.brake = function(roko) {
    this.speed -= roko;
    console.log(`${this.brand} ${this.model} is braking. Current speed: ${this.speed} km/h`);
  };
  
  Vehicle.prototype.refuel = function() {
    console.log(`${this.brand} ${this.model} is refueling.`);
  };
  
  // Car constructor inheriting from Vehicle
  function Car(brand, model, speed, fuelType, numberOfWheels) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfWheels = numberOfWheels;
  }
  
  // Inheriting methods from Vehicle prototype
  Car.prototype = Object.create(Vehicle.prototype);
  
  // Adding additional method to Car
  Car.prototype.honk = function() {
    console.log(`${this.brand} ${this.model} is honking.`);
  };
  
  // Airplane constructor inheriting from Vehicle
  function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfEngines = numberOfEngines;
    this.hasLandingGear = hasLandingGear;
  }
  
  // Inheriting methods from Vehicle prototype
  Airplane.prototype = Object.create(Vehicle.prototype);
  
  // Adding additional method to Airplane
  Airplane.prototype.takeOff = function() {
    console.log(`${this.brand} ${this.model} is taking off.`);
  };
  
  // Example usage
  let myCar = new Car('Toyota', 'Camry', 50, 'Petrol', 4);
  myCar.accelerate(60);
  myCar.brake();
  myCar.refuel();
  myCar.honk();
  
  let myAirplane = new Airplane('Boeing', '747', 500, 'Jet', 4, true);
  myAirplane.accelerate();
  myAirplane.brake(10);
  myAirplane.refuel();
  myAirplane.takeOff();
  
