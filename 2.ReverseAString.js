// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.


// reverseString("hello") should return a string.
//         Passed
// reverseString("hello") should become "olleh".
//     Passed
// reverseString("Howdy") should become "ydwoH".
//     Passed
// reverseString("Greetings from Earth") should return "htraE morf sgniteerG".


function reverseString(str) {
    str = str.split('').reverse().join("")
    return str;
}

reverseString('hello')