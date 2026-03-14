function subtract(a, b) {
    // Validate inputs
    if (isNaN(a) || isNaN(b)) {
        throw new Error('Invalid input: Both inputs must be numbers.');
    }
    return a - b;
}

module.exports = { subtract };