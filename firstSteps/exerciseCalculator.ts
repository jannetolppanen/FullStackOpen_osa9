interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateAverage = (args: number[]): number => {
  const length = args.length;
  const sum = args.reduce((sum, number) => {
    return sum + number;
  });
  return sum / length;
};

const rateHours = (target: number, average: number): any => {
  let rating = 0;
  let ratingDescription = '';
  if (average < target ) {
    rating = 1;
  } else if (average > target + 0.5) {
    rating = 2;
  } else { 
    rating = 3
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

return { rating, ratingDescription }
};

const calculateExercises = (args: number[]): any => {
  const periodLength = args.length;
  const trainingDays = args.filter((num) => num > 0).length;
  const target = 2;
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

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1]));

