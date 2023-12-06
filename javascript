document.addEventListener('DOMContentLoaded', () => {
  const numberForm = document.getElementById('numberForm');
  numberForm.addEventListener('submit', handleSubmit);
});

function handleSubmit(event) {
  event.preventDefault();
  const inputNumber = document.getElementById('inputNumber').value;

  // Frontend validation
  if (isNaN(inputNumber) || inputNumber.trim() === '') {
    alert('Input harus berupa angka dan tidak boleh kosong');
    return;
  }

  // Ajax request
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/processInput', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const response = JSON.parse(xhr.responseText);
      displayResult(response.message);
    }
  };
  xhr.send(JSON.stringify({ inputNumber }));
}

function displayResult(message) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = message;
}

function generateTriangle() {
  // Implement triangle generation logic here and send result to backend
}

function generateOddNumbers() {
  // Implement odd numbers generation logic here and send result to backend
}

function generatePrimeNumbers() {
  // Implement prime numbers generation logic here and send result to backend
}
