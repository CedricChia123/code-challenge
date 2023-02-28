var sum_to_n_a = function(n) {
    let sum = 0;
    for (let i = 1; i < n + 1; i++) {
        sum += i
    }
    return sum;
};

var sum_to_n_b = function(n) {
    if (n == 0) {
        return 0;
    } else {
        return sum_to_n_b(n - 1) + n;
    }
};

// Sum of arithmetic series: 1 is first term, n is last term
var sum_to_n_c = function(n) {
    return (n * (n + 1)) / 2;
};