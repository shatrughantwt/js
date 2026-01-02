
// function sum(a,b){
//     return a+b
// }

// const finalSum = sum(4,5);
// console.log(finalSum)

// function getLength(str) {
//     console.log("Original String:", str);
//     console.log("Length:", str.length);
// }

// getLength("hello world");

// function findIndexOf(str, target) {
//     console.log("Original String:", str);
//     console.log("Index:", str.indexOf(target));
//     console.log("Index:", str.lastIndexOf(target));
// }

// findIndexOf("hello world", "world") // indexOf
// findIndexOf("hello world world world", "world") // lastindexOf


// function getSlice(str, start, end) {
//     console.log("Original String:", str);
//     console.log("After slice:", str.slice(start,end));
// }

// getSlice("Hello World", 0, 5);

// const value = "otsutsuki"
// let ans = value.substr(2,5)//sutsu
// let ans2 = value.slice(2,5)//sut

// console.log(ans)
// console.log(ans2)

// function cutIt(str, startIndex, endIndex) {
//     let newStr = "";
//     for(let i = 0; i<str.length; i++){
//         if(i>= startIndex && i<endIndex){
//             newStr = newStr + str[i]
//         }
//     }
//     return newStr
// }

// const value = "otsutsuki"
// let ans2 = value.slice(2,5)

// console.log(ans2)
// console.log(cutIt(value,2,5))

// const value = "Yo my name is boruto"
// let ans = value.split("")
// console.log(ans)

// const value = "BORUTO"
// let ans = value.toLowerCase();
// console.log(ans)

// const value = "boruto"
// let ans = value.toUpperCase();
// console.log(ans)

// const value = "            boruto uzumaki                           "
// let ans = value.trim();
// console.log(ans)

// function getString(str, target, replacement){
//     console.log("Original:", str)
//     console.log("After replce:", str.replace(target,replacement))
// }

// const value = getString("Hello world", "world", "js")

// console.log(parseInt("34"))
// console.log(parseInt("3sdf"))
// console.log(parseInt("3.34"))
// console.log(parseFloat("34"))
// console.log(parseFloat("34sfa"))
// console.log(parseFloat("34.34"))

// const initialArray = [1,2,3];
// initialArray.pop();  push,pop,shif,unshif
// console.log(initialArray);


// const firstArray = [1,2,3]
// const secondArray = [4,5,6]
// console.log(firstArray.concat(secondArray))

// const secondArray = [4,5,6]
// const finalArray = firstArray.concat(secondArray)
// console.log(finalArray)

// for(let i=0; i<firstArray.length; i++){
    //     console.log(firstArray[i])
    // }
    
    const firstArray = [1,2,3]

    function logThing(str){
        console.log(str);
    }

    firstArray.forEach(logThing)
    

