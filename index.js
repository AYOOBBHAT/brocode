//accepting user input by two ways??

/*   method 1
let username=window.prompt("what  is ur name");
console.log(username);*/


/* method 2


let username;
document.getElementById("mybutton").onclick=function(){
    username=document.getElementById("mytext").value;
    console.log(username);

    document.getElementById( "mylabel").innerHTML="hello" +username;
}*/










/*type conservion=change data type to another(string ,numbers,boolean)

let age=window.prompt("enter ur age ");
console.log(typeof age);
age=Number(age);
console.log(typeof age);
age+=1;
console.log("ur  "+age+"  yrs old");*/
/*type conversion 
let x;
let y;
let z;
x=Number("4.4");
console.log(x,typeof x);
y=String(3.14);
console.log(y,typeof y);
z=Boolean(" ");
console.log(z,typeof z);*/






/* constants


const pi=3.14;


let radius;
let circum;
radius=window.prompt("enter rad of circle");
let pi=2.14 then now it will take pi as 2.14 if it was let pi instead of constant pi=
radius=Number(radius);
circum=2*pi*radius;
console.log( "the circumi is  ",circum);*/


//maths

/*let x= -3.4;

let y=4;
let z=9;

let maximum;
let minimun;*/

/*x=Math.round(x);

x=Math.floor(x);
x=Math.ceil(x);  
console.log(x);

x=Math.pow(x,3);
console.log(x);

x=Math.sqrt(x);

x=Math.abs(x);

maximum=Math.max(x,y,z);
x=Math.PI;
console.log(x);*/




 /*finding hyptonuse of triangle by windows prompt
let a;
let b;
let c;
a=window.prompt("enter side a");
a=Number(a);
b=window.prompt("enter side b");
b=Number(b);
//c=Math.pow(a,2)+Math.pow(b,2);
//c=Math.sqrt(c);
*/

/*c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));

console.log( "side c",c);*/

/*document.getElementById( "submitbutton").onclick = function(){

a=document.getElementById("atext").value;
a=Number(a);
b=document.getElementById("btext").value;
b=Number(b);

c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
document.getElementById("clabel").innerHTML="side c"+c;

}
let count =0;
document.getElementById("decreasebtn").onclick=function(){

    count-=1;
    document.getElementById("countlabel").innerHTML=count;

    
}



document.getElementById("resetbtn").onclick=function(){


    count=0;
    document.getElementById("countlabel").innerHTML=count;

} 



   document.getElementById("increasebtn").onclick=function(){


    count+=1;
    document.getElementById("countlabel").innerHTML=count;



}




let x;
let y;
let z;

document.getElementById("rollbutton").onclick=function(){

     x= Math.floor( Math.random()*6)+1;
    console.log(x);
    
    y= Math.floor( Math.random()*6)+1;
    console.log(y);
    
     z= Math.floor  ( Math.random()*6)+1;
    console.log(z);

    document.getElementById("xlabel").innerHTML=x;
    document.getElementById("ylabel").innerHTML=y;
    document.getElementById("zlabel").innerHTML=z;
    

}*/



/*


    >>>>>>>srting propertier


let username="abcdef";
console.log(username.length);
 let firstletter= username.charAt(2);
 console.log(firstletter);
  console.log(username.indexOf("c"));
  console.log(username.lastIndexOf("o"));

  let username=("abcdff");
  //username=username.trim();
  username=username.toLowerCase();
  username=username.toLocaleUpperCase();


  console.log(username);

  //phoenumber=phonenumber.replaceALL("_","/");
  console.log(phonenumber);





  //slice method

  let fullname="bro code";

  let firstname;
  let lastname;

  // lastname= fullname.slice( 4);

   //firstname=fullname.slice(0,3);



/*lastname=fullname.slice(fullname.indexOf(" ")+1);

firstname=fullname.slice(fullname.indexOf(" "));
//console.log(lastname);
//console.log(lastname);
console.log(firstname);

let username="brother";
let letter=username.charAt(0);
letter=letter.toLocaleUpperCase();
console.log(letter);


let username="brother";
 let letter=username.charAt(3).toLocaleUpperCase();
 console.log(letter);*/

 /*let age=55;
 if (age>=18 && age<40){ 

    console.log("ur an adult");
}

else if(age>44){

    console.log("ur aged");
}

    else{

        console.log("ur a child");
    }*/




    ////check box 

/*
   document.getElementById("mybutton").onclick=function(){

const mycheckbox=document.getElementById("mycheckbox");
const visabtn=document.getElementById("visabtn");
const mastercardbtn=document.getElementById("mastercardbtn");
const paypalbtn=document.getElementById("paypalbtn");




if(mycheckbox.checked){
    console.log("ur subscriber");

}
else {
    console.log("ur not subscribed");
}




 if(visabtn.checked){
    console.log("u have choosen visacard");

}

else if(mastercardbtn.checked){
    console.log("u have choosen master card");

}

else if(paypalbtn.checked){
    console.log("u have choosen paypal");

}


else if(paypalbtn.checked){

    console.log("added paytm sucessfully");
}

else{
    console.log("please choose any card");
}

    }



    
/*if (document.getElementById("mycheckbox").checked){
    console.log("ur subscriber");

}
else{
    console.log("ur not subscribed");
}

}*/



// swithches
/*

let grade=99;
switch(true){


    case grade>=90:

    console.log("you did excellent");
break;


    case grade>=80:

    console.log("you did good");
break;



    case grade>=70:

    console.log("you did average");
break;




    case grade>=50:

    console.log("you did below avaerage");
break;


    case grade<33:

    console.log("you r fail");
break;

default:

console.log("u cant take admission");

}



//logical operator


let temp=15;
 let sunny=true;

if(temp>0&& temp<30&& sunny){

    console.log("temp is good");


}

else{

    console.log("stay inside");
}
    
if (temp<1|| temp>-6){

    console.log("temp is verycold");
}

*/



//while loop
/*

let username="";

while(username==""|| username==null){
 username=window.prompt("enter ur name");
}
console.log("hello ",username);


//do while loop


let username;
username=window.prompt("enter ur name");

while (username==""){

    username=window.prompt("enter ur name");
}

console.log("hello",username);
*/



/*for( let counter=1; counter<10;counter+=1){
console.log(counter);
}*/

/*
let symbol=window.prompt("enter symbol to use");


let rows=window.prompt("enter rows ");
let col=window.prompt("enter colums");

for (let i=0;i <=rows;i++){

    for (let j=1;j<=col;j++){

        document.getElementById("rect").innerHTML+=symbol;

        
    }

    document.getElementById("rect").innerHTML+="<br>"

}*/


// functio
/*
 let username="ayoob";
 let age =22;
 
brithday();

function brithday(){

    console.log("abcdef" ,username,age);
    console.log("abcdef" ,username,age);
    console.log("abcdef" ,username,age);
    console.log("abcdef" ,username,age);
    console.log("abcdef" ,username,age);
    console.log("abcdef" ,username,age);
    console.log("abcdef" ,username,age);
    console.log("abcdef" ,username,age);
    console.log("abcdef" ,username,age);
    console.log("abcdef" ,username,age);
    console.log("abcdef");
    console.log("abcdef");
    console.log("abcdef");
    console.log("abcdef");
    console.log("abcdef");
    console.log("abcdef");
    console.log("abcdef");
    console.log("abcdef");

}

*/

/*using function
let area;
let width;

let height;

width=window.prompt("enter width");
height=window.prompt("enter height");

area=getarea( width,height);

console.log("the area is",area);

function getarea(  width,height){

let result=width*height;


return result;

}




let l;
let b;

l=window.prompt("enter l");
b=window.prompt("enter b");
p=getp(l,b);

console.log(" the value of p",p);

function getp(l,b){

    let peri=(l+b);

    return peri;

}
*/

/*checkwinner(true);

function checkwinner(win){


    win? console.log("u win"):console.log("u loose");
}*/


/*for(let i=0;i<=3;i++){

    console.log(i);
}

console.log(i);
*/

//template literalss

//let username="bro";
//let items=3;
//let total =85;
//using template literals


/*console.log(`hello ${username}`);
console.log(`u have ${items} in ur cart`);
console.log(`ur  total is  ${total} `);
*/

// usiing only text variable  to display all
/*let text=
`hello ${username}<br>
u have${items} items in ur cart

u total is${total}`;

console.log(text);
  // converting into text 
  // first we set label as my label;
  //<label id="mylabel"></label> in html;
document.getElementById("mylabel").innerHTML=text;
*/




// tolocalstring()


/*let mynum=.05;
//mynum=mynum.toLocaleString("hi-IN");
//mynum=mynum.toLocaleString("en-US",{style:"currency",currency:"USD"});


mynum=mynum.toLocaleString(undefined,{stle:"percent"});
console.log(mynum);


*/


// number guessing  game;




/*const answer= Math.floor(Math.random()*10+1);
let guesses=0;

document.getElementById("submitbutton").onclick=function(){

   let guess= document.getElementById("guess").value;

   guesses+=1;

if( guess==answer){

    alert(`${answer} guess is correct, it tookk u  ${guesses} guesses `);

}

else if(guess<answer){

    alert("to small");
}

else{
    alert(" too large");
}

}

*/
/*let temp=32;
temp =tocel(temp);
console.log(temp);
function tocel(temp){

    return (temp -32)*(5/9);

}


function tofah(temp){
    return temp*9/5 +32;
}




document.getElementById("submitbutton").onclick=function(){
    let temp;
    if(document.getElementById("cbutton").checked){

        temp=document.getElementById("textbox").value;
        temp=number(temp);
        temp=tocelcius(temp);
        document.getElementById("fbutton").checked=temp+""

    }




else if( document.getElementById("fbutton").checked){


}

else{
    document.getElementById("templabel").innerHTML="select a unit";
}


}




}*/




//arrays


/*let fruits=["a","b","x","d"];


// sorting albhabetically
 fruits=fruits.sort();

 //sorting reversly
 fruits=fruits.sort().reverse();


for(let fruit of fruits){

    console.log(fruit);
}*/



/*let fruits=["apple","banana","oranges"];
let veg=["carrot","onion","patatoes"];
let meat=["eggs","meat","fish"];


let grocerylist=[fruits,veg,meat];
/*for(let list of grocerylist){


    console.log(list);
}

for(let list of grocerylist){
for(let food of list){


    console.log(food);
}
}
*/


//spread operator
/*
let numbers=[1,2,3,4,5,6,7];
//console.log(... numbers);
let maximum=Math.max(...numbers);
console.log(maximum);

//rest parameters


/*let a=1;
let b=2;
let c=4;
let e=6;
let f=7;

console.log(sum(a,b));
/*function sum(a,b){
    return a+b;
}*/



/*let a=1;
let b=2;
let c=4;
let e=6;
let f=7;

console.log(sum(a,b,c,d,e,f));

function sum(...numbers){


    let total=0;

    for(let number of numbers){

        total+=number
    }
    return total;
}
*/

//call back


//for each method for arrays
/*
let students=["song","patato","apple"];
students.forEach(capitalize);

students.forEach(print);

students.forEach(capitalize);
function capitalize(element,index,array){
    array[index]=element[0].toUpperCase()+element.substring();

}


console.log(students[0]);

function print(element){

    console.log(element);
}
*/



// map method for arrays
/*map() creates a new array from calling a function for every array element.

map() calls a function once for each element in an array.

map() does not execute the function for empty elements.

map() does not change the original array.*/


//let numbers =[1,2,3,4,5];
//let squares=numbers.map(square);

//let cubes=numbers.map(cube);

//squares.forEach(square);
//squares.forEach(print);

/*function  square(element){

    return Math.pow(element,2);
}
*/

/*cubes.forEach(print);
function print(element){
    console.log(element);
}

function cube(element){
    return Math.pow(element,3);
}

*/

/// array filter();




//let ages=[18,16,17,19,20];

/*let adults=ages.filter(checkage);
adults.forEach(print);

function checkage(element){

    return  element>=18;
}

function print (element){
    console.log(element);
}

// ARRAY Reduce


*/



/*


The reduce() method executes a reducer function for array element.

The reduce() method returns a single value: the function's accumulated result.

The reduce() method does not execute the function for empty array elements.

The reduce() method does not change the original array.*/




/*let prices=[5,12,13,141,17];

let total=prices.reduce(checkout);
console.log(`the total is: $${total}`);

function checkout(total,element){

return total+element;


}
*/


/*
/// sort function--------

The compare function compares all the values in the array,
 two values at a time (a, b).

When comparing 40 and 100, the sort() method 
calls the compare function(40, 100).

The function calculates 40 - 100 (a - b), 
and since the result is negative (-60),
  the sort function will sort 40 as a value lower than 100.

let grades=[100,233,245,455,66,44,6];

grades=grades.sort (desendingsort);

grades.forEach(print);



function desendingsort(x,y){

    return y-x;
}

function print(element){


    console.log(element);


}

*/



// arrow function


/*const greeting =function (username){

    console.log (`hello ${username}`);
}
*/
 

/*const greeting =(username)=> console .log (`hello ${username}`);
greeting ("faizan");*/



// eeg 2

/*const persent=function (x,y){

    return x/y *100;
}
    console.log( `${persent(75,55)} %`);
    */


 /* const persent =(x,y)=> x/y *100;

console.log(`${persent(45,50)}%`);
*/


  /*let grades=[100,3,44,55,666,22];
  grades.sort (function(x,y){return y-x;});
  grades.forEach(function(element){console.log(element)});
 */

  /*let grades=[100,3,44,55,666,22];
  grades.sort((x,y)=>  y-x);
  grades.forEach((element) =>console.log(element));
  */
/*
let cards =["a","d","b","c","1","3","4","2"];
shuffle(cards);
//console.log(cards[0]);

console.forEach(cards=>console.log(cards));
console.array.forEach(element => {
    
});
function shuffle(arr){

    let  currentindex=arr.length;
    while (currentindex!=0){
        let randomIndex= Math.floor(Math.random()*arr.length);
    
    currentindex-=1;
let temp=arr[currentindex];
arr[currentindex]=arr[randomIndex];

arr[randomIndex ]=temp;
}

return arr;
}
  

*/



// lecture 48; 
// nested fuction;


/*let username="bro";
let userinbox=0;
login();


function login(){
    displayuserinbox();
    displayusername();

    function displayusername(){
        console.login(`welcome ${username}`);
        
        }
        
        
        
        function displayuserinbox(){
        
                console.log(`welcome   u have ${userinbox} meaasages`);
        
}


function displayusername(){
console.login(`welcome ${username}`);

}



/*function displayuserinbox(){

    console.log(`welcome   u have ${userinbox} meaasages`);

function displayusername(){
console.login(`welcome ${username}`);

}



function displayuserinbox(){

    console.log(`welcome   u have ${userinbox} meaasages`);


}*/





// 49 lecture; closure fn


//function with preserved and private data



/*


document.getElementById("button").onclick=login();


function login (){

    let username="bro";
    let userinbox=1;
function alertuser(){ 
    alert(`${username} u have ${userinbox} messages`);
userinbox=0;


}

return alertuser;
}
*/


/*
map   == object that holds key pair value pairs of any data..................


const store=new Map([



    ["tshirt" ,20], ["pent",33],["jeans",44]

]);
let cart=0;
cart+=store.get("tshirt");
console.log(cart);

store.set("hat",40);
store.delete("hat");

console.log(store.has("underwear"));
 console.log(store.size);

//store.forEach( (value ,key)=>console.log(`${key} $ ${value}`));

*/

  





















































 






















