/*
######################################################################################
################################ Part 3 ##############################################
                                Objects
######################################################################################
*/

// var Person = {
//     name: 'Dilshad',
//     age: 25,
//     place: "Calicut",
//     display: function (){
//         console.log(this.name);
//     }
// }

// Person.dob = "20-10-2001"

// Person.displayAge= function (){
//     console.log(this.age);
// }

// for(x in Person){
//     console.log(x,' : ',Person[x] ,'\n');
// }

// console.log(Person['age']);

// console.log(Person.display());
// console.log(Person.displayAge());


/*
##############################################################################################################
                                        Object Constructor
##############################################################################################################
*/

function Person(name,age,place){
    this.name=name
    this.age=age
    this.place=place
    this.display= function (){
        console.log("Name :" +this.name+ "Age :"+this.age);
    }
}

var dilshad = new Person("Dilshad",20,"Calicut")
var abhi = new Person("Abhinand",20,"Kunnamangalam")

dilshad.display()
abhi.display()

/*
########################################## Date ###############################################
*/

var d = new Date("10 March 2019")

console.log(d.getFullYear());

/*
########################################## Exceptions #########################################
*/

// try{ throw "error" } catch { } finally{ }

