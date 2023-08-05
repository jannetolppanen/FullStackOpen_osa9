const calculateBmi = (height: number, weight: number): string => {
  const heightInCentimeters = height / 100;
  const bmi = weight / (heightInCentimeters * heightInCentimeters);

  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi < 25) {
    return 'Normal (healthy weight)';
  } else if (bmi < 30) {
    return 'Overweight';
  }
  return 'Obese';
};

console.log(calculateBmi(180, 74));
