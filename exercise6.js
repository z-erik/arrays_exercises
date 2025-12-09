//bubble algorithm

let array=[3,6,12,5,100,1];

console.log(`before the bubble algorithm`);
console.log(array);

bubble(array);
console.log("\nafter the bubble algorithm")
console.log(array);



function bubble (array){
let aux;
console.log("\nshow the iteration's changes 𓁆 \n")
for (let i = 0; i < array.length; i++) {
    console.log(`iteration i=${i} 𓇑 |${array.join("|")}|`)
    for (let j = 0; j < array.length-1; j++) {
        
        if(array[j]>array[j+1]){

            aux=array[j];
            array[j]=array[j+1];
            array[j+1]=aux;
        }
        
    }
    
}
return array;

}
