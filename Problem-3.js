function Series(n) {
    const result = [];
    for (let i = 1; i <= n; i += 2) {
        result.push(i);
    }
    if (n % 2 === 0) {
        result.pop(); 
    }
    return result;
}

const input = 6;
console.log("Output:",Series(input));
