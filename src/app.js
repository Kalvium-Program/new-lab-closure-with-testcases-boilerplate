// Progression 1: create a consant "NEG_INF" with -1000000 value, and a function createPop
const NEG_INF = -1000000;

function createPop(givenArray, item) {

  // Progression 2: add 3 variables: title, currIndex, check
  let currIndex = NEG_INF;
  let check = false;
  
  // Progression 3: create a function "searchForElement" 
  function searchForElement(array, givenItem){
    array.forEach((element,index) => {
      if(element==givenItem){
        currIndex=index;
        check = true;
      }
    });
  }

  // Progression 4: In `createPop()`, return a function - which uses the updated values of `currIndex` and `check`
                    // to return the desired output.
  return function(){

    searchForElement(givenArray,item);
    let index = currIndex;
    let isPresent = check;

    if(isPresent){
      return `The item is present and is at index ${index}`;
    }
    else{
      return `The item is not present and is at index ${index}`;
    }

  };
}

const arrayOfNumbers = [1,2,3,4,5,6];
const itemToSearch = 4;
const pop = createPop(arrayOfNumbers,itemToSearch);
pop();

