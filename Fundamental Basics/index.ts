/* Type Annotations */

//let count: number = 123123
//let aName: string = 'ocean'
//let aArray: (string | number)[] = [count,aName] // Union Types

//console.log(aArray)

/* Inferred Types */



// let mName = "MeceM";
// let isM = true;
// let aNumber = 422351;


// const AFunc = (arg1: string, arg2: number) => 
// {
//     //return `this is ${arg1} and it is with ${arg2}`
//     return  {arg1:arg2}
// }





/* Classes */


// class OKGreeter 
// {
    
//     readonly id:number = 1983737472372
//     name: string;
  
//      constructor(name: string)
//     {
//       this.name = name
//     } 
  
// }



// class OKGreeter
// {
//     static typeOfOrganization: string = 'Business'
//     asd = `asd`

//     constructor(public name:string,public hobby:string,protected secretWord:string, private secretPassword?:string)
//     {

//     }

//     showName()
//     {
//         return this.secretPassword
//     }
// }

  
//   let objectOfClass = new OKGreeter('JJ','ski','gizli','1313fg1')
  
//   console.log(objectOfClass) 





/* Generics */

const numbers = [42, 3, 77, 13, 104, 82];


function sortItems<T = number, S = string>(items: T[],compareFn: (a: T, b: T) => number): (T | S)[] 
{
    return items.sort(compareFn)
}
  
  
const sortedNumbers = sortItems<number, string>(numbers,(a, b) => a - b);
  
console.log(sortedNumbers);
  


const names = ["CJ", "Trash_Dev", "RyanRoga", "loco86"];
  
const sortedNames = sortItems<string, number>(names,(a, b) => a.localeCompare(b),);
  
console.log(sortedNames);