class Car {
  constructor(owner = 'Unknown Owner', name = 'Unknown Name') {
    this.owner = owner
    this.name = name
  }

  drive() {
    console.log(
      `The ${this.name} car owned by ${this.owner} drives on the road`
    )
  }

  getOwner() {
    return this.owner
  }

  getOwner() {
    return this.name
  }
}
console.log("")

const myCar = new Car('Thomas', '1969 Corvette Stingray')

console.log(myCar)
// Car { owner: 'Elon', name: 'Tesla Model S' }

myCar.drive()
// The Tesla Model S car owned by Elon drives on the road

console.log(myCar.getOwner())
// Elon
class SportsCar extends Car {
  constructor({ owner, name, color, price, engine }) {
    super(owner, name)
    this.color = color
    this.price = price
    this.engine = engine
  }

  getColor() {
    return this.color
  }

  getPrice() {
    const formattedPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(this.price)

    return formattedPrice
  }

  getEngine() {
    return this.engine
  }
}
console.log("")

const coolCar = new SportsCar({
  owner: 'Thomas Starman',
  name: 'Corvette Stingray',
  color: 'Black',
  price: '300000', // USD
  engine: 'gasoline'
})

console.log(coolCar)
// SportsCar { ... }
console.log("")

coolCar.drive()
// The Tesla Roadster car owned by Starman drives on the road
console.log("")
console.log(coolCar.getColor())
// Red
console.log("")
console.log(coolCar.getPrice())
// $200,000


console.log("")
console.log("")
console.log("stopwatch")


class Stopwach {
  constructor(timeNow=0, timeAfter=0) {
    this.timeNow = timeNow
    this.timeAfter = timeAfter
    this.iniTime = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
  }
  
    getTime1st() {
    console.log(this.iniTime)
    this.timeNow=new Date().getTime()
    }

    getTime2rd(){
      console.log(this.iniTime)
      this.timeAfter= new Date().getTime()
    }

    resultTime(){
      let tampung=(this.timeAfter-this.timeNow)/1000
      console.log(`${tampung} detik`)
    }
}
let oopTime = new Stopwach()

