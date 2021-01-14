//INDEXES      0,1,2,3,4,5,6,7,8,9   length=10
let numbers = [1,2,3,4,5,6,7,8,9,10];

// wire up our button
document.getElementById("btnSubmit").addEventListener("click", doJsWork);

function doJsWork(){
    

    
    let size = numbers.length;
    let arraySize = parseInt(document.getElementById("arraySize").value);
    numbers = generateArray(arraySize);
    
    // let element = 0;
    output1 = document.getElementById("results");
    output2 = document.getElementById("results2");
    output3 = document.getElementById("results3");

    output1.innerHTML = "";
    output2.innerHTML = "";
    output3.innerHTML = "";
        
    // add values to the array
        // size = numbers.push(11);
        // size = numbers.push(20);


    // remove items
    // numbers.pop();

    // Filter the array
    let filtered = numbers.filter(function (value, index, arr){
        return value > 5;
    })
    
    // var filtered = [];
    // for (let index = 0; index < <numbers.length index++) {
    //     if (value > 5) {
    //         filtered.push[value];
    //     }
    // }
    
    //Find Value in an Array
    var found = numbers.find(function(value, index, arr){
        return value > 5;
   })

   

    // Print out the full array
    for (let index =0; index < numbers.length; index++){
        output1.innerHTML += `${numbers[index]} `;
    }
   


   
    
    // Print out filtered array
         for (let index =0; index < filtered.length; index++) {
         output2.innerHTML += `${filtered[index]} `;
     }
    
    found = numbers.includes(7);
    output3.innerHTML = found;
        // for (let index =0; index < found.length; index++) {
        // output3.innerHTML += `${found[index]} `;
        // }

}

// generate array of random values
function generateArray(size){
    let randomArray = [];
    for (let index = 0; index < size; index++) {
        randomArray.push( Math.floor(Math.random() *100)  + 1     )
    }
            
            
    return randomArray;

}


        // // .835777777777 *100
            // 83.777777777 (floor)
            // 83 (floor)
            // 84 + 1
