interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

interface ParsedHours {
  target: number;
  hours: number[];
}

interface RateResult {
  rating: number;
  ratingDescription: string;
}

const calculateAverage = (args: number[]): number => {
  const length = args.length;
  const sum = args.reduce((sum, number) => {
    return sum + number;
  });
  return sum / length;
};

const rateHours = (target: number, average: number): RateResult => {
  let rating = 0;
  let ratingDescription = '';
  if (average < target) {
    rating = 1;
  } else if (average < target + 0.5) {
    rating = 2;
  } else {
    rating = 3;
  }

  switch (rating) {
    case 1:
      ratingDescription = 'You fell short...';
      break;
    case 2:
      ratingDescription = 'You are on target!';
      break;
    case 3:
      ratingDescription = 'You went above and beyond!';
      break;
  }

  return { rating, ratingDescription };
};

export const parseExerciseArguments = (
  target: number,
  daily_exercises: number[]
): ParsedHours => {


  if (!target) {
    throw new Error('Daily target missing');
  }

  if (daily_exercises.length < 1) {
    throw new Error('Atleast 1 day is needed');
  }

  if (isNaN(target)) {
    throw new Error('Target value was not a number');
  }

  // Makes an array of hours and check that they are numbers
  const hours = daily_exercises.map((hour) => {
    const parsedHour = Number(hour);
    if (isNaN(parsedHour)) {
      throw new Error('Training lenght was not a number');
    }
    return parsedHour;
  });
  return {
    target,
    hours,
  };
};

export const calculateExercises = (
  target: number,
  ...args: number[]
): Result => {
  const periodLength = args.length;
  const trainingDays = args.filter((num) => num > 0).length;
  const average = calculateAverage(args);
  const success = average >= target;
  const { rating, ratingDescription } = rateHours(target, average);

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};

// try {
//   const { target, hours } = parseExerciseArguments(process.argv);
//   console.log(calculateExercises(target, ...hours));
// } catch (error: unknown) {
//   let errorMessage = 'Something bad happened.';
//   if (error instanceof Error) {
//     errorMessage += ' Error: ' + error.message;
//   }
//   console.log(errorMessage);
// }
