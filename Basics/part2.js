// ##########################################################################################
//                                      Part 2
// ##########################################################################################

var a = 10
var b = 20 

var sum = a+b
console.log(sum)

// ##########################################################################################
//                                  Conditionals
// ##########################################################################################

// get input value { npm install readline-sync }

var read = require('readline-sync')

var value = read.question('Enter a number? ')

console.log(value)

// ##########################################################################################
//                                      if else
// ##########################################################################################

var r = require('readline-sync')

// num1 = r.question('Enter 2 numbers')
// num2 = r.question('')

if (num1>num2) {
    console.log(num1);
    flag = 1;
} else {
    console.log(num2);
    flag = 0;
}
        

// ##########################################################################################
//                                      Loops
// ##########################################################################################

// even

for (i=0;i<100;i+=2) {
    console.log(i)
}

/*
##############################################################################################
                                        Functions
##############################################################################################
*/

function hello() {
    console.log('Hello');
    return 10
}

val = hello()
console.log(val);

/*
##############################################################################################
                                        Nested Functions
##############################################################################################
*/
var num = 10

function hi() {
    var num = 20            // global scope
    function hey() {
        num = 30            // local scope
    }
    hey()
}

console.log(num);

/*
##############################################################################################
                                        Arrays
##############################################################################################
*/

var s = ['John', 'abhi' , 'Mary']

