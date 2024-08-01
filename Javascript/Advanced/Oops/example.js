class Car {
  constructor(brand, model, year, mileage) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.running = false;
  }

  start() {
    this.running = true;
    console.log(`${this.brand} ${this.model} is now runninng`);
  }

  stop() {
    this.running = false;
    console.log(`${this.brand} ${this.model} is now stopped`);
  }

  drive(distance) {
    if (this.running) {
      this.mileage += distance;
      console.log(
        `${this.brand} ${this.model} drove ${distance} miles. total mileage is now ${this.mileage} miles`
      );
    } else {
      console.log(`You need to start the ${this.brand}  ${this.model} first`);
    }
  }

  info() {
    console.log(
      `Car Info : ${this.brnad} ${this.model}, Year:{this.yeart}, Mileage:${this.milegae}`
    );
  }
}

const myCar = new Car("Toyota", "Corolla", 2020, 15000);
console.log(myCar);
myCar.start();
const yourcar = new Car("Honda", "Civic", 2019, 20000);
yourcar.start();
yourcar.stop();
yourcar.drive();
yourcar.start();
yourcar.drive(100);
