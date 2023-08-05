interface bmiValues {
  height: number;
  weight: number;
}
const calculateBmi = (height: number, weight: number): string => {
  const heightInCentimeters = height / 100;
  const bmi = weight / (heightInCentimeters * heightInCentimeters);
  let result = ''

  if (bmi < 18.5) {
    result = 'Underweight';
  } else if (bmi < 25) {
    result = 'Normal (healthy weight)';
  } else if (bmi < 30) {
    result = 'Overweight';
  } else {
    result = 'Obese';
  }
  console.log(result)
  return result
};

const parseArguments = (args: string[]): bmiValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3])
    }
  } else {
    throw new Error('Provided values were not numbers!');
  }
}

try {
  const { height, weight } = parseArguments(process.argv)
  calculateBmi(height, weight)
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.'
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}
