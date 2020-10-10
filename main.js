function firstLetterName(name) {
    alert('The name ' + name +' starts with the letter '+name[0]);
}


function divisibleByTwo(x) {
    console.log(Boolean(x % 2));
}

const arr = [25, 36, 23, 41, 52, 63, 59, 63, 71]

function largestNum() {
    let highest = 0; 
    let i = 0;
    for (let i = 0; i < arr.length; i++) {
        let highestNum = arr[0];
        let num = Math.max(arr[i]);
        if (num >= highestNum) {
           let highestNum = num 
            console.log('The largest number in this array is ' +highestNum );
        }
        
    }
    
}


firstLetterName("Diamond");

divisibleByTwo(10);

largestNum();