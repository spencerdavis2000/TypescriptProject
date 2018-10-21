
let myName: string = 'Spencer';
let myAge: number = 47;
let canVote: boolean = true;
let anything: any = 'dog';
anything = 2;

let strToNum: number = parseInt('5');

document.getElementById("container3").innerHTML = myName + ' is my name and i am ' + myAge + ' years old';

document.getElementById("greeting").innerHTML = 'this is the  greeting';
document.getElementById("tsStuff").innerHTML = 'Spencer is super cool';

document.write("myName is a " + typeof(myName) + "<br />");
document.write("myAge is a " + typeof(myAge) + "<br />");
document.write("canVote is a " + typeof(canVote) + "<br />");
document.write("strToNum is a " + typeof(strToNum) + "<br />");

document.write("converting myAge to a string is a " + typeof(myAge.toString()) + "<br />");


