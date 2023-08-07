interface bmiValues {
  height: number;
  weight: number;
}
export const calculateBmi = (height: number, weight: number): string => {
  const heightInCentimeters = height / 100;
  const bmi = weight / (heightInCentimeters * heightInCentimeters);
  let result = '';

  if (bmi < 18.5) {
    result = 'Underweight';
  } else if (bmi < 25) {
    result = 'Normal (healthy weight)';
  } else if (bmi < 30) {
    result = 'Overweight';
  } else {
    result = 'Obese';
  }
  console.log(result);
  return result;
};

export const parseArguments = (height: string, weight: string): bmiValues => {
  if (!height) throw new Error('No height given');
  if (!weight) throw new Error('No weight given');

  if (!isNaN(Number(height)) && !isNaN(Number(weight))) {
    return {
      height: Number(height),
      weight: Number(weight)
    };
  } else {
    throw new Error('Provided values were not numbers!');
  }
};

// try {
//   const { height, weight } = parseArguments(process.argv)
//   calculateBmi(height, weight)
// } catch (error: unknown) {
//   let errorMessage = 'Something bad happened.'
//   if (error instanceof Error) {
//     errorMessage += ' Error: ' + error.message;
//   }
//   console.log(errorMessage);
// }
