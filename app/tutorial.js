'use strict';

// Fix this badly formatted code:
// function pow(x,n)
// {
//     let result=1;
//     for(let i=0;i<n;i++) {result*=x;}
//     return result;
// }

// let x=prompt("x?", ""), n=prompt("n?", "")
// if (n<=0)
// {
//     alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
// }
// else
// {
//     alert(pow(x, n));
//     // alert( pow(x, n ) );
// }

function pow(x, n) {
    let result = 1;

    for(let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", ""), n = prompt("n?", "");

if (n <= 0) {
    // Author mentions that 80 char is a good line limit, he puts a newline after the comma here
    alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
} else {
    alert(pow(x, n));
    // alert( pow(x, n) );
}
