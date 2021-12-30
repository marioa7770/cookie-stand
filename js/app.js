'use strict';


let seattle = {
    name: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    getRandomCustomers: function() {
        return Math.floor(Math.random() * (this.max - this.
        min + 1) + this.min) ;
    }
}

    let Tokyo = {
        name: 'Tokyo',
        min: 3,
        max: 25,
        avg: 1.2,
        getRandomCustomers: function() {
            return Math.floor(Math.random() * (this.max - this.
            min + 1) + this.min) ;
    }
}

    let Dubai = {
        name: 'Dubai',
        min: 11,
        max: 38,
        avg: 3.7,
        getRandomCustomers: function() {
            return Math.floor(Math.random() * (this.max - this.
            min + 1) + this.min) ;
    
    }
}
    let Paris = {
        name: 'Paris',
        min: 20,
        max: 38,
        avg: 2.3,
        getRandomCustomers: function() {
            return Math.floor(Math.random() * (this.max - this.
            min + 1) + this.min) ;
    }
}
    let Lima = {
        name: 'Lima',
        min: 2,
        max: 16,
        avg: 4.6,
        getRandomCustomers: function() {
            return Math.floor(Math.random() * (this.max - this.
            min + 1) + this.min) ;
    
    
         
        }
    };


console.log(seattle.getRandomCustomers());

let seattle = {
    name: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    render: function(){

    }
}

function RandomCustomers(){
    this.name = 'Seattle';
    this.min = 23;
    this.max = 65;
    this.avg = 6.3;
};

let Seattle = new Customer();
console.log (seattle);

let Tokyo = {
    name: 'Tokyo',
    min: 3,
    max: 25,
    avg: 1.2,
    render: function(){

    }
}

let Dubai = {
    name: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,
    render: function(){

    }
}


let Paris = {
    name: 'Paris',
    min: 20,
    max: 38,
    avg: 2.3,
    render: function(){

    }
}

let Lima = {
    name: 'Lima',
    min: 2,
    max: 16,
    avg: 4.6,
    render: function(){

    }
}