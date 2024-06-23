//q-1. writw a function that accept a number and a prints whether it is even or odd..
function checkEvenOdd (num : number ) {

    if (num % 2 === 0){
        console.log(num, "is an even number")
        
    
    }else{
        console.log(num, "is an odd num")
    }
    }
    checkEvenOdd(6)
    checkEvenOdd(5)


    
    // q-2 .write a function "Arrayopertions" that creates an array of numbers,adds a number to the end of the array,
    //removes the first number,removes the middle number and add a new number and prints the modified array
    
    // create an array of numbers
    let arr : number[] = [2,3,4,5,6,7 ]
    function arrayOperations() : void{
    
        // add a number to the end of the array
        arr.push(8)
        // // remove the first number
        arr.shift()
        // // remove the middle number and add a new number
        arr.splice(2,1 , 9)
    
        //prints the modified array
        console.log(arr)
    
    };
    arrayOperations();

    
    
    // q-3.write a function multiplies the elemnt of array by 2 and returns the modified array
    let nums : number[] = [ 1 ,2 , 3, 4 , 5]
    
    function multiplies(number: number[]):number[] {
        return number.map(Element => Element * 2)
    
    };
    let modifiedArry = multiplies(nums)
    console.log(modifiedArry)
    

    
    // q-4 .write a function findlargest that accepts an array of numbers and return the largest number
    
    let values : number[] = [22 , 32 , 62 , 42 , 52]
    
    function findlargest(nums : number[]) : number{
        return Math.max(...nums)
    
    }
    let largestNumber = (findlargest(values))  
    console.log(`The largest number is ${largestNumber}`)            // output 62

    
    
    // q- 5 .write a function reverse srtring that accepts a string and returns the reverse string
    
    let personName : string = "Faiza Siddiqui";
    
    function reverseString(str : string) : string {   // split(''): Converts the string into an array of characters.
                                                       //reverse(): Reverses the order of elements in the array.
      return str.split('').reverse().join('')                                         // join(''): Joins the elements of the array back into a string.
        
    }
    console.log(`Original Name : ${personName}`);
    
    let inputString = reverseString(personName)
    console.log(`Reverse Nmae : ${inputString}`)