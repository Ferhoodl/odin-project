function add7 (input){
    return input + 7;
}

function multiply(in1, in2){
    return in1*in2;
}

function capitalize(str){
    return str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
}

function lastLetter(str){
    return str.substring(str.length -1);
}

console.log(add7(3));

console.log(multiply(4, 5));

console.log(capitalize("hEllO"));

console.log(lastLetter("testing"));