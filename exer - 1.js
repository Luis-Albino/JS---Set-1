const wordArray = ["part","step","picture","quote","update","answer","speed","assist","survive","circulate"];


function sortArray (ascend,byLength) {

    let ascending; // default value = true
    let orderByLength; // default value = true

    if (ascend === undefined || ascend === true || ascend === false) {
        ascending = (ascend === undefined)?true:ascend;
    }
    else {
        return "invalid argument";
    };

    if (byLength === undefined || byLength === true || byLength === false) {
        orderByLength = (byLength === undefined)?true:byLength;
    }
    else {
        return "invalid argument";
    };

    let orderedArray = [wordArray[0]];
    for (let i=1; i<wordArray.length; i++) {
        let position = orderedArray.length;
        for (let j=0; j<orderedArray.length; j++) {
            let condition; 
            if (orderByLength) {
                condition = ascending?(wordArray[i].length <= orderedArray[j].length):(wordArray[i].length > orderedArray[j].length);
            }
            else {
                let regex = /[^aeiou]/gi;
                condition = ascending?(wordArray[i].match(regex).length <= orderedArray[j].match(regex).length):(wordArray[i].match(regex).length > orderedArray[j].match(regex).length);
            };
            if (condition) {
                position = j;
                j = orderedArray.length;
            }
        }
        orderedArray.splice(position,0,wordArray[i]);
    }
    return orderedArray
};

let newArray = sortArray(false,true);

console.log(newArray);

