let pets = []; // empty array
//objects literal
let petSalon = {
    name:"The Fashion Pet",
    address:{
        street:"Palm Ave",
        zip:"22333",
    },
    phone:"666-555-777"
}

console.log(petSalon);

//creating the pets
let pet1={
    name:"Scooby",
    age:60,
    gender:"Male"
}
let pet2={
    name:"Rosco",
    age:12,
    gender:"Female"
}
let pet3={
    name:"Turnip",
    age:45,
    gender:Male
}

pets.push(pet1,pet2,pet3);
console.log(pets);

functiondisplayNames(){
    console.log(pets[0].name);
    console.log(pets[1].name);
    console.log(pets[3].name);
}

displayNames(){
    
}