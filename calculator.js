document.getElementById('multiplyBtn').addEventListener('click', function() {
    const num1 = document.getElementById('number1').value;
    const num2 = document.getElementById('number2').value;
    const resultElement = document.getElementById('result');
    const errorElement = document.getElementById('error');
    
    // Clear previous results and errors
    resultElement.innerText = '';
    errorElement.innerText = '';
    
    // Input validation
    if (isNaN(num1) || isNaN(num2) || num1.trim() === '' || num2.trim() === '') {
        errorElement.innerText = 'Please enter valid numbers.';
        return;
    }
    
    // Parse numbers
    const product = parseFloat(num1) * parseFloat(num2);
    // Display the result
    resultElement.innerText = 'Result: ' + product;
});