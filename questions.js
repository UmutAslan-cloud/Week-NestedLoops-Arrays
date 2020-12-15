//String olarak verilen bir isim ve soyismin sadece bas harflerini Uppercase a cevirilmesi;
let nameSurname="ahmet yildiz"
let personName=nameSurname.charAt(0).toUpperCase() + nameSurname.slice(1,nameSurname.indexOf(' '));
let personSurname=nameSurname.charAt(nameSurname.indexOf(' ')+1).toUpperCase() + nameSurname.slice(nameSurname.indexOf(' ')+2)

console.log( personName +" "+personSurname );
 
 // 0 dan 100 e kadar olan sayilari, bir satirda 10 sayi ve her sayinin arasinda virgul olacak sekilde yazdiriniz (10x10 luk bir kare seklinde)
 let numberList = [];
for(var i = 1; i <= 100; i++)
{
   numberList.push(i);
   if (i%10==0) {
       numberList.push("\n")
   }
}
console.log(numberList.join(' '));
 
 //0 dan 100 e kadar olan prime (asal sayilari) yazdirin
 let prime,numbers
 for (let prime = 2; prime <=100; prime++) {
     let calc=true;
     for (let numbers = 2; numbers < prime; numbers++) {
        if (prime%numbers==0) {
            calc=false;
            break
        }
         
     }if(calc)
     console.log(prime)
 }
//Password Generator
let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 let arrCapital=["A","B","C","D","E","F","G","H","j","K","L","M","N"];
 let arrNumbers=[1,2,3,4,5,6,7,8,9]
 let arrSpecial=["@","&","¢","$","?","!"]
 let passwordArray=arr.concat(arrCapital,arrNumbers,arrSpecial);
 let randomLetter="";
 
 
     for (let x = 0; x <= 49; x++) {
         let passwordLength=Math.floor(Math.random() * 8) + 9 
         for (i = 0; i < passwordLength; i++) {
     randomLetter += passwordArray[Math.floor(passwordArray.length * Math.random())];
     } randomLetter+="\n"
     
     }console.log(randomLetter)
     
    

   // Asagidaki sekli programlama yapilarini kullanarak cizdiriniz.
   let star=""
   for (let i = 1; i <= 6; i++) {
    for (let k = 1; k <= i; k++) {
        star+="*"
            
    } star+="\n"
}  console.log(star)
       