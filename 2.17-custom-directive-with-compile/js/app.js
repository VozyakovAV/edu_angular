var questApp = angular.module('questApp', []);
// получаем элент body
var elem = angular.element(document.querySelector("body"));
// выводим html элемента body
//console.log(elem.html());
// получаем элемент с классом quest
var quest = angular.element(document.querySelector(".quest"));
// получаем дочерний элемент h3
var questHeader = elem.find('h3');
// выводим его текст
console.log(questHeader.text());