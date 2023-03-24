function counter (str) {
    if (!(typeof str === typeof "") && !(typeof str === typeof 1)) {
        console.log("Invalid input. String/number rquired");
        return
    };

    if (typeof str === typeof "") {
        let vowels = str.match(/[aeiou]/gi);
        if (vowels) {
            console.log("Number of vowels = ",vowels.length);
            return
        }
        // else if (str != "0" && !Number(str)) {
        else if (Number(str) != 0 && !Number(str)) {
            console.log("No vowels on the string");
            return
        }
    }
    else {
        str = String(str);
    };

    let digits = Math.ceil(Math.log10(str));
    if (digits < str.length) {
        digits = str.length;
    };
    console.log("Number of digits = ",digits);
};

counter("Hello World"); // EXPECTED: Number of vowels = 3
counter("bcdfghjklmnpqrstvwxyz"); // EXPECTED: No vowels on the string
counter("1255"); // EXPECTED: Number of digits = 4
counter("000"); // EXPECTED: Number of digits = 2
counter(000); // EXPECTED: Number of digits = 1
counter(123); // EXPECTED: Number of digits = 3
counter(null); // EXPECTED: Invalid input. String/number rquired