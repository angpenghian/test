document.getElementById('addBtn').addEventListener('click', function() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const resultElement = document.getElementById('result');
    const errorElement = document.getElementById('error');
    errorElement.textContent = '';

    // Validate input
    if (isNaN(num1) || isNaN(num2) || num1 === '' || num2 === '') {
        errorElement.textContent = 'Please enter valid numbers.';
        resultElement.textContent = '';
        return;
    }

    // Calculate sum
    const sum = Number(num1) + Number(num2);
    resultElement.textContent = sum;
});
