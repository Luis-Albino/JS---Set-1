Array.prototype.sortBy = function (sort,order) {
    if (arguments.length === 2 && order != true && order != false) return undefined;
    if (arguments.length === 1) {
        if (sort === true || sort === false) {
            order = sort;
            sort = "alphanumeric";
        }
        else if (sort != "alphanumeric" && sort != "length" && sort != "consonant") {
            return undefined
        }
    }

    if (sort === "length") {
        this.sort(function (a,b) {
            a = a.length;
            b = b.length;
            return a-b
        });
    }
    else if (sort === "consonant") {
        this.sort(function (a,b) {
            let regex = /[aeiou]/gi;
            let listA = a.match(regex);
            let listB = b.match(regex);
            a = listA?listA.length:0;
            b = listB?listB.length:0;
            return a-b
        });
    }
    else if (!sort || sort === "alphanumeric") {
        this.sort(); // Default
    }

    // Ordering //
    if (order === false) {
        this.reverse();
    }

};

const wordArray = ["part","step","picture","quote","update","answer","speed","assist","survive","circulate"];

wordArray.sortBy("length",false);
console.log(wordArray)
