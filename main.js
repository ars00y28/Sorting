InsertionButton = document.getElementById("InsertionSort")
BubbleButton = document.getElementById("BubbleSort")
UserInput = document.getElementById("UserInput")
SortBtn = document.getElementById("Submit")
let InsertionSort = false
let BubbleSort = false
let num = []

InsertionButton.addEventListener("click",InsertionFunction)
BubbleButton.addEventListener("click",BubbleFunction)
SortBtn.addEventListener("click",SortFunction)

async function SortFunction(){
    num = [];
    UserValue = UserInput.value ;
    ValueLength = UserValue.length;
    for (let i = 0; i < ValueLength; i++){
        num.push(parseInt(UserValue[i],10));
        
    }
    if (BubbleSort){
        console.log(" Bubble Sorting")
        let SortedArray = await BubbleSortFunction(num);
        console.log(SortedArray)
    } else if (InsertionSort){
        console.log("Insertion Sorting")
        let SortedArray = await InsertionSortFunction(num)
        console.log(SortedArray)
    } else {
        alert("Please select sorting method !!!")
    }

}

function InsertionFunction(){
    InsertionSort = true
    BubbleSort = false
}

function BubbleFunction(){
    BubbleSort = true
    
}

function visualizeArray(array) {
    let arrayContainer = document.getElementById('arrayContainer');
    arrayContainer.innerHTML = ''; // Clear the previous state

    array.forEach((value, index) => {
        let element = document.createElement('div');
        element.classList.add('arrayElement');
        element.textContent = value; // Display the number
        element.style.left = `${index * 30}px`; // Position each number (adjust spacing as needed)
        arrayContainer.appendChild(element);
    });
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function BubbleSortFunction(array){
    let x = array.length - 1;
    for (let i = 0; i <= x; i++){
        let sort = false
        for(let j = 0; j <= x-i; j++){
            if (array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                sort = true;
                await sleep(1000);
                visualizeArray(array);
            }
        }
        if (!sort){
            break;
        }
    }
    return array;
}

async function InsertionSortFunction(array){
    let x = array.length;
    for (let i = 1; i < x; i++) {
        let currentItem = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > currentItem) {
            array[j + 1] = array[j];
            j = j - 1;
            await sleep(50);
            visualizeArray(array);
        }
        array[j + 1] = currentItem;
    }
    return array
}