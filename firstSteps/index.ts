import express from 'express';
import * as bmiCalc from './bmiCalculator';
import { parseExerciseArguments, calculateExercises } from './exerciseCalculator';

const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
const dailyTarget = req.body.target
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dailyExercises = req.body.daily_exercises;

  try {
      const { target, hours } = parseExerciseArguments(dailyTarget, dailyExercises);
      const result = calculateExercises(target, ...hours);
      res.json(result);

    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).send({ error: error.message });
      } else {
        res.status(500).send({error: 'Something went wrong'});
      }
    }
      
});



app.get('/bmi', (req, res) => {
  const queryHeight = req.query.height as string;
  const queryWeight = req.query.weight as string;

  if (
    !queryWeight ||
    !queryHeight ||
    queryWeight === '' ||
    queryHeight === ''
  ) {
    res.status(400).send({ error: 'malformatted parameters' });
  }

  try {
    const { height, weight } = bmiCalc.parseArguments(queryHeight, queryWeight);
    const bmi = bmiCalc.calculateBmi(height, weight);
    res.json({ weight, height, bmi });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).send({ error: error.message });
    } else {
      res.status(500).send({error: 'Something went wrong'});
    }
  }
});


const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
