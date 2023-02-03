/*
################################################################################################################
                                                    Part 5
################################################################################################################
*/

// ############################################### Callback ####################################################


var dt = new Date()

console.log('hello')
for(i=0;i<100;i++){
    console.log("Loop");
}
console.log("end");

var diff = new Date() - dt
console.log(diff);

function longTask(milliSecondTime){
    dt=new Date()
    while (new Date() - dt <= milliSecondTime)  {
        
    }
}
function showEnd(){
    console.log("end");
}

// Synchronus

console.log('started');
longTask(300)
showEnd()

console.log('started');
longTask(2000)
showEnd()

console.log('started');
longTask(3000)
showEnd()

// Asynchronus

console.log('started');
setTimeout(showEnd,2000)

console.log('started');
setTimeout(showEnd,2000)

console.log('started');
setTimeout(showEnd,2000)

// Creating a Callback

var hello= (data) => {
    console.log("Data: "+data);
}

var hey= (callback) => {
    callback('Crossroads')
}

hey(hello)




/*
##############################################################################################
                                                    Module
##############################################################################################
*/

var h = require("./part3.js")  // local module

h.hello()