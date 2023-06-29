function counter (str) {
    if (typeof str === "string") {
        let vowels = str.match(/[aeiou]/gi);
        if (vowels) {
            return vowels.length
        }
        else {
            return 0
        }
    }
    else if (typeof str === "number") {
        str = String(str);
        let counter = Math.ceil(Math.log10(str));
        if (counter < str.length) {
            counter = str.length;
        };
        return counter
    };
};

console.log(counter("Hello World")); // EXPECTED: 3
console.log(counter("bcdfghjklmnpqrstvwxyz")); // EXPECTED: 0
console.log(counter("1255")); // EXPECTED: 4
console.log(counter("000")); // EXPECTED: 0
console.log(counter(000)); // EXPECTED: 1
console.log(counter(123)); // EXPECTED: 3
console.log(counter(null)); // EXPECTED: undefined
