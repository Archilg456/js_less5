"use strict";

//  1. 

    let arr1 = [1, 2];
    let arr2 = [3, 4];
    let arr3 = [5, 6];

    let allarr = arr1.concat(arr2,arr3)
     console.log(allarr);


//  2.

let arr = [-1, -2, -3, 4];

let numbers = item => item > 0;

let result = arr.some(numbers)

console.log(result);


//  3. 

        let array =[23,45,32,5,87,7,3,98]

        // array.sort(function(x,y) {
        //     return y -x ;
        // } 
        // )
        // console.log(array);

        let minValue = array.sort((x,y) => y - x)[7];
        
        console.log(minValue);              


// .4

 
let divElement = document.createElement('div');
divElement.setAttribute('class', 'wrapper');

let pasteimgElement = document.createElement('img');
pasteimgElement.setAttribute('src', 'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg');
pasteimgElement.setAttribute('alt', 'img');

let pasteh2Element = document.createElement('h2');
pasteh2Element.textContent = "imige title ";
pasteh2Element.style.color = "red";
pasteh2Element.style.fontSize = "30px";

divElement.appendChild(pasteimgElement);
divElement.appendChild(pasteh2Element);

document.getElementById('box').appendChild(divElement);