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


class OKGreeter {
    
    readonly id:number = 1983737472372
    name: string;
  
     constructor(name: string)
    {
      this.name = name
    } 
  
  }
  
  let objectOfClass = new OKGreeter('hua')
  
  console.log(objectOfClass) 