function FindSumA(numbers,answer){

    // Loop through the array and add numbers and the adjacent number and check for the answer as you go
    let checkValue = 0;
    let found = false;
    // [10,15,3,7] startIndex = 0, end Index = 3
    for(let i = 0;i<=numbers.length -2;i++){
        // Loop over the array after the current value  
        for(let y = (i+1);y<=numbers.length-1;y++){
            if(answer == numbers[i] + numbers[y]){
                found = true;
                return found;
            }
        }
    }
    return found;
}


// Sorted Array Method
function FindSumB(numbers,answer) {
    let found = false;
    let checkValue = 0;
    // Sort the array
    numbers.sort(function (a,b,){
        return a-b 
    });
    let startIndex = 0;
    let endIndex = numbers.length - 1;
    do{
        // [3, 7, 10, 15];
        checkValue = numbers[startIndex] + numbers[endIndex];
        if(answer == checkValue){
            found = true;
            break;
        }
        else if(answer > checkValue){
            startIndex ++;
        }
        else if (answer < checkValue){
            endIndex --;
        }

    } while (found == false && startIndex < endIndex);

    return found;

}

// Better Solution Path
function FindSumC(numbers,answer){
    let checkValue = 0;
    let found = false;
    for(let i=0;i<=numbers.length-1;i++){
        checkValue = answer - numbers[i]
        if(numbers.includes(checkValue,i+1)){
            found=true;
            break;
        }
    }
    return found;
}

// return all possible combinations
function FindSumD(numbers,answer){
    let checkValue = 0;
    let checkIndex = -1;
    let ansArray = [];

    for(let i = 0; i<=numbers.length - 1; i++){
        checkValue = answer -numbers[i];
        checkIndex = numbers.indexOf(checkValue);
        
        if(checkIndex !=-1 && checkIndex != i){
            // add the two numbers to the array
            ansArray.push(numbers[1] + " + " + checkValue);
            // remove the 2nd number from the array
            numbers.splice(checkIndex,1);
        }
    }
    return ansArray;
}
    


function DisplaySum(){
    let answer = document.getElementById("sumValue").value;
    let numArray = [10, 15, 3, 7];

    // Show the array on the screen
    document.getElementById("numList").innerHTML = numArray.toString();
    let found = FindSumC(numArray,answer);
    document.getElementById('results').innerHTML = found.toString();

}

function DisplayAllSums(){
    let answer = document.getElementById("sumValue").value;
    let numArray = [10, 15, 3, 7];

    // Show the array on the screen
    document.getElementById("numList").innerHTML = numArray.toString();
    let found = FindSumD(numArray,answer);
    document.getElementById('results').innerHTML = found.toString();


}

