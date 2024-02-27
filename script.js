let gender = 'male'; // Initialize gender variable to 'male'

// Function to set the selected gender and update the BMI calculation
function setGender(selectedGender) {
  gender = selectedGender; // Update the gender variable
  document.querySelectorAll('.genderBtn').forEach(btn => {
    btn.classList.remove('active'); // Remove the 'active' class from all gender buttons
  });
  document.getElementById(selectedGender + 'Btn').classList.add('active'); // Add 'active' class to the selected gender button
  calculateBMI(); // Recalculate BMI based on the new gender selection
}

// Function to update the displayed height value
function updateHeight(height) {
  document.getElementById('heightValue').textContent = height + ' cm'; // Update the height value text content
}

// Function to calculate BMI based on height, weight, and age inputs
function calculateBMI() {
  const height = parseFloat(document.getElementById('heightRange').value); // Get the height value and convert to float
  const weight = parseFloat(document.getElementById('weightInput').value); // Get the weight value and convert to float
  const age = parseInt(document.getElementById('ageInput').value); // Get the age value and convert to integer

  if (height > 0 && weight > 0) { // Check if height and weight are valid (greater than zero)
    const bmi = weight / ((height / 100) ** 2); // Calculate BMI using the formula
    let bmiCategory = ''; // Initialize BMI category variable
    let textColor = ''; // Initialize text color variable

    if (bmi < 18.5) { // If BMI is less than 18.5, it's underweight
      bmiCategory = 'Underweight';
      textColor = 'green'; // Set text color to green
    } else if (bmi < 25) { // If BMI is between 18.5 and 25, it's normal weight
      bmiCategory = 'Normal weight';
      textColor = 'green'; // Set text color to green
    } else if (bmi < 30) { // If BMI is between 25 and 30, it's overweight
      bmiCategory = 'Overweight';
      textColor = 'red'; // Set text color to red
    } else { // If BMI is 30 or above, it's obese
      bmiCategory = 'Obese';
      textColor = 'red'; // Set text color to red
    }

    // Construct the result message with BMI value and category, applying the appropriate text color
    const result = `Your BMI: <span style="color: ${textColor}">${bmi.toFixed(2)}</span> (${bmiCategory})`;
    document.getElementById('result').innerHTML = result; // Update the result element with the calculated BMI message
  }
}

// Function to increase weight input value
function increaseWeight() {
  document.getElementById('weightInput').stepUp(); // Increase the value of weight input
  calculateBMI(); // Recalculate BMI
}

// Function to decrease weight input value
function decreaseWeight() {
  document.getElementById('weightInput').stepDown(); // Decrease the value of weight input
  calculateBMI(); // Recalculate BMI
}

// Function to increase age input value
function increaseAge() {
  document.getElementById('ageInput').stepUp(); // Increase the value of age input
  calculateBMI(); // Recalculate BMI
}

// Function to decrease age input value
function decreaseAge() {
  document.getElementById('ageInput').stepDown(); // Decrease the value of age input
  calculateBMI(); // Recalculate BMI
}