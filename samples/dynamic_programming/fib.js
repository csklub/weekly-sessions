
// recursive approach
function fibR(n) {
    if (n <= 1) return n;
    return fibR(n - 1) + fibR(n - 2);
}

// pure DP => O(n)
function fib(n) {
    // assuming that n will always be
    // a natural number -> nth fib sequence
    const cache = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        cache[i] = cache[i - 1] + cache[i - 2];
    }

    return cache[n];
}

// pure DP => O(n)
// optimized for space complexity
// of O(1)
function fibOpt(n) {
    // assuming that n will always be
    // a natural number -> nth fib sequence
    let first = 0;
    let second = 1;
    
    for (let i = 2; i <= n; i++) {
        let temp = second;
        second = first + second;
        first = temp;
    }

    return second;
}

// memoization
const memo = [ 0, 1 ];

function fibM(n) {
    if (memo[n] != undefined) return memo[n];
    memo[n] = fibM(n - 1) + fibM(n - 2);
    return memo[n];
}


// test
console.log(fibR(9), fib(9), fibM(9), fibOpt(9), 34);

// time complexity analysis
// n    dp  memo     rec
// 9    9   17 O(n) 109 (2^n)