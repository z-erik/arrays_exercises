/*Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
Write a command that prints out all of the people in the list.
Write the command to remove "Dani" from the array.
Write the command to remove "Juan" from the array.
Write the command to move "Luis" to the front of the array.
Write the command to add your name to the end of the array.
Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
*/
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(people.join(", "));

//removing dani
people.splice(1,1);
console.log(people.join(", "));

//removing juan
people.splice(2,1);
console.log(people.join(", "));


//moving element 'Luis' to the front
movingToFront(people,'Luis');
console.log(people.join(", "));

//adding my name to the end of the array
people.push('Erik');
console.log(people.join(", "));



// Iterating through the array until finding the element 'Maria'
let i=0;
while(true){
 
console.log(`iteration ${i} ${people[i]}`);
if(people[i]==='Maria'){
    break;
}
i++;
}

//Finding the index of 'Maria' in the array

const IndexofMaria= people.indexOf('Maria');
console.log(`Index of the element Maria in the index is: ${IndexofMaria}`);

console.log("TOTAL PEOPLE: "+people.join(", "));

//moving Luis to the  front array
function movingToFront(array,element){
 
    if(array.includes(element)){

        array.splice(1,1);
        array.unshift(element);
    }else{
      console.log("The element introduced is not valid, there isn't changes")
    }

return array;

}