const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/processInput', (req, res) => {
  const inputNumber = req.body.inputNumber;

  // Backend validation
  if (isNaN(inputNumber) || inputNumber.trim() === '') {
    res.status(400).json({ error: 'Input harus berupa angka dan tidak boleh kosong' });
  } else {
    // Process input and send result
    const result = processInput(inputNumber);
    res.json({ message: result });
  }
});

function processInput(inputNumber) {
  // Implement logic for processing the input number
  // and generating the desired results (triangle, odd numbers, prime numbers)
  // Return the result as a string
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
