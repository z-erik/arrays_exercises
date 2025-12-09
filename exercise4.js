/*Exercise #4 (sugerencia filter() e includes())
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any
 common courses print them out to the console.*/

 function isThereACommonElement(array1,array2,element){
 let isTrue=false;

 if(array1.includes(element) && array2.includes(element)){
    isTrue=true;
 }

return isTrue;
 }


 function filterTwoArrays(array1,array2,element){

let mensaje= isThereACommonElement(array1,array2,element) ? `Common element: ${element}`:`There is not a common element`;

return mensaje;
 }



 let student1Courses = ['Math', 'English', 'Programming'];
 let student2Courses = ['Geography', 'Spanish', 'Programming'];

console.log(filterTwoArrays(student1Courses,student2Courses,'Programming'));