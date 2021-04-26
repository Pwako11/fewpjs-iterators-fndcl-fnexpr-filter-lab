// Code your solution here
const findMatching = (arr, query) => {
    const match = arr.filter(driver => driver.toLowerCase() == query.toLowerCase());
    return match 
}

const fuzzyMatch = (arr, query) =>{
    const match = arr.filter( driver => {
       return driver.toLowerCase().slice(0, query.length) === query.toLowerCase();
    
    });
    return match 
}

const matchName = (arr, query) => {
    const match = arr.filter(driver => driver.name === query);
    return match 
}