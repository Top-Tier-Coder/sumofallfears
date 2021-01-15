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


// [3, 7, 10, 15];
function FindSumB(numbers,answer) {
  
}
    


function DisplaySum(){
    let answer = document.getElementById("sumValue").value;
    let numArray = [10,15,3,7];

    // Show the array on the screen
    document.getElementById("numList").innerHTML = numArray.toString();
    let found = FindSumA(numArray,answer);
    document.getElementById('results').innerHTML = found.toString();

}


