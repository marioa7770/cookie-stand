'use strict';
let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
let dataSection = document.querySelector('body div') //querySelector() The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors
function StoreLocation(name, min, max, avg){
    this.name = name
    this.min = min
    this.max = max
    this.avg = avg 
    this.getRandomCustomers = function() {
        return Math.floor(Math.random() * (this.max - this.
        min + 1) + this.min) ;
    }
    this.simulateDay = function(){
        let total = 0
        let cookiesEachHour = []
        for (let hourIndex = 0; hourIndex < storeHours.length; hourIndex++){
            let customersThisHour = this.getRandomCustomers()
            let cookiesThisHour = Math.ceil(customersThisHour * this.avg)
            cookiesEachHour.push(cookiesThisHour)
            total += cookiesThisHour
        }
        this.cookiesEachHour = cookiesEachHour
        this.total = total
    }
    this.render = function(){
        this.simulateDay()
        let div = dataSection.appendChild(document.createElement('div'))
        div.classList.add('location')
        let h3 = div.appendChild(document.createElement('h3'))
        h3.textContent = this.name
        let ul = div.appendChild(document.createElement('ul'))
        for (let hourIndex = 0; hourIndex < storeHours.length; hourIndex++){
            let li = ul.appendChild (document.createElement('li'))
            li.textContent = `${storeHours[hourIndex]}: ${this.cookiesEachHour[hourIndex]}`
        }
        let li = ul.appendChild(document.createElement('li'))
        li.textContent =`total = ${this.total}`
    }
}

let seattle = new StoreLocation ('Seattle', 23 , 65, 6.3)
seattle.render()


let tokyo = new StoreLocation ( 'Tokyo', 3, 25, 1.2)
tokyo.render()

let dubai = new StoreLocation ( 'Dubai', 11, 38, 3.7)
dubai.render()

let paris = new StoreLocation ( 'Paris', 20, 38, 2.3)
paris.render()

let lima = new StoreLocation ('Lima', 2, 16, 4.6)
lima.render()


console.log(seattle.getRandomCustomers());

// let seattle = {
//     name: 'Seattle',
//     min: 23,
//     max: 65,
//     avg: 6.3,
//     render: function(){

//     }
// }