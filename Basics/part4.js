/* 
######################################################################################################
                                                Part 4
######################################################################################################
*/

//  let, const,  keyword

/*

- The let keyword was introduced in ES6 (2015).

- Variables defined with let cannot be Redeclared.

- Variables defined with let must be Declared before use.

- Variables defined with let have Block Scope.

*/

// var hello = 10
// let hello = 20
// this will have an error 

function hello(){
    var i=0
    if (i==0) {
        var hey = 20 // scope inside a function
        let hoy = 30 // scope only in *if* 
    }
}

/*
    - Variables defined with const cannot be Redeclared.

    - Variables defined with const cannot be Reassigned.

    - Variables defined with const have Block Scope.
 */

/* ########################################### Class ################################################## */

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.carname;
    }
    
    msg() {
        console.log("Name :"+this.name+" Year :"+this.year);
    }
}

let obj = new Car("susuki",2003)
obj.msg()

/* ########################################### Class - Inheritance ###################################### */
class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model;
    }
}


let myCar = new Model("Ford", "Mustang");

/* ########################################### Arrow Function ############################################# */

let add = (a,b) => a+b


