/**
 * Ciftlikteki Hayvanlarin listesi olusturulacak
 * Bu hayvanlar Necip usta sordugunda helal kesime uygun olarak ayrilacak
 * Ayrildiktan sonra her bir hayvan carpi ayak sayisi islemi yapilarak toplam ayak sayisi konsola yazdirilacak
 * Necip usta sormadiginda da her turlu hayvan musteriye sunulabilir.
 */

let necipUsta = true;
//Necip usta icin hayvan ihtiyaci var mi yok mu?

let animalList = ["cow", "cow", "chicken", "pork", "cow", "pork", "chicken", "sheep", "sheep", "chicken"];
//let necipList=[];

//Hayvanlar kendi iclerinde ayri bir dizi olarak filtrelendi
let cowAnimal = animalList.filter(animal => animal.toLowerCase().includes("cow"));
let chickenAnimal = animalList.filter(animal => animal.toLowerCase().includes("chicken"));
let sheepAnimal = animalList.filter(animal => animal.toLowerCase().includes("sheep"));
let halalFootAnimal = (4 * cowAnimal.length) + (2 * chickenAnimal.length) + (4 * sheepAnimal.length);

if (necipUsta == true) {

    console.log(halalFootAnimal);
} else {
    console.log(animalList);
}
/* let nextValue="";
let ayakToplami=0;
for (let i = 0; i < animalList.length; i++) {
    nextValue=animalList[i];

   if (nextValue=="chicken") {
       necipList.push(2)
   } else if (nextValue=="cow") {
       necipList.push(4)
   } else if (nextValue=="sheep") {
       necipList.push(4)
   }
    

}   for (let toplamAyak = 0; toplamAyak < necipList.length; toplamAyak++) {
         ayakToplami=ayakToplami+necipList[toplamAyak];
        
    }console.log(ayakToplami) */