'use strict';
let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let dataSection = document.querySelector('body div');
const storeTable = document.querySelector('table tbody');
console.log(storeTable);

function StoreLocation(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.total = 0;
  this.cookiesEachHour = [];

  this.getRandomCustomers = function () {
    return Math.floor(Math.random() * (this.max - this.
      min + 1) + this.min);
  };
  this.simulateDay = function () {
    let total = 0;
    let cookiesEachHour = [];
    for (let hourIndex = 0; hourIndex < storeHours.length; hourIndex++) {
      let customersThisHour = this.getRandomCustomers();
      let cookiesThisHour = Math.ceil(customersThisHour * this.avg);
      cookiesEachHour.push(cookiesThisHour);
      total += cookiesThisHour;
    }
    this.cookiesEachHour = cookiesEachHour;
    this.total = total;
  };
  this.render = function () {
    this.simulateDay();
    let div = dataSection.appendChild(document.createElement('div'));
    div.classList.add('location');
    let h3 = div.appendChild(document.createElement('h3'));
    h3.textContent = this.name;
    let ul = div.appendChild(document.createElement('ul'));
    for (let hourIndex = 0; hourIndex < storeHours.length; hourIndex++) {
      let li = ul.appendChild(document.createElement('li'));
      li.textContent = `${storeHours[hourIndex]}: ${this.cookiesEachHour[hourIndex]}`;
    }
    let li = ul.appendChild(document.createElement('li'));
    li.textContent = `total = ${this.total}`;
  };

}








let seattle = new StoreLocation('Seattle', 23, 65, 6.3);
seattle.render();


let tokyo = new StoreLocation('Tokyo', 3, 25, 1.2);
tokyo.render();

let dubai = new StoreLocation('Dubai', 11, 38, 3.7);
dubai.render();

let paris = new StoreLocation('Paris', 20, 38, 2.3);
paris.render();

let lima = new StoreLocation('Lima', 2, 16, 4.6);
lima.render();

StoreLocation.prototype.renderTableRow = function () {
  let tr = document.createElement('tr');
  let tdName = document.createElement('td');
  tdName.textContent = this.name;
  tr.appendChild(tdName);
  storeTable.appendChild(tr);
  for (let i = 0; i < this.cookiesEachHour.length; i++) {
    console.log('hi');
    let tdName = document.createElement('td');
    tdName.textContent = this.cookiesEachHour[i];
    tr.appendChild(tdName);
    //td.textContent = this.cookiesThisHour[0]
  }
  tdName = document.createElement('td');
  tdName.textContent = this.total;
  tr.appendChild(tdName);
};
seattle.renderTableRow();

// tokyo.renderTableRow = function () {
//   let tr = document.createElement('tr');
//   storeTable.appendChild(tr);
//   for (let i = 0; i < this.cookiesEachHour.length; i++) {
//     console.log('hi');
//     let tdName = document.createElement('td');
//     tdName.textContent = this.name;
//     tr.appendChild(tdName);
//     //td.textContent = this.cookiesThisHour[0]
//   }
// };

tokyo.renderTableRow();

// dubai.renderTableRow = function () {
//   let tr = document.createElement('tr');
//   storeTable.appendChild(tr);
//   for (let i = 0; i < this.cookiesEachHour.length; i++) {
//     console.log('hi');
//     let tdName = document.createElement('td');
//     tdName.textContent = this.name;
//     tr.appendChild(tdName);
//     //td.textContent = this.cookiesThisHour[0]
//   }
// };
dubai.renderTableRow();

// paris.renderTableRow = function () {
//   let tr = document.createElement('tr');
//   storeTable.appendChild(tr);
//   for (let i = 0; i < this.cookiesEachHour.length; i++) {
//     console.log('hi');
//     let tdName = document.createElement('td');
//     tdName.textContent = this.name;
//     tr.appendChild(tdName);
//     //td.textContent = this.cookiesThisHour[0]
//   }
// };
paris.renderTableRow();

// lima.renderTableRow = function () {
//   let tr = document.createElement('tr');
//   storeTable.appendChild(tr);
//   for (let i = 0; i < this.cookiesEachHour.length; i++) {
//     console.log('hi');
//     let tdName = document.createElement('td');
//     tdName.textContent = this.name;
//     tr.appendChild(tdName);
//     //td.textContent = this.cookiesThisHour[0]
//   }
// };
lima.renderTableRow();









