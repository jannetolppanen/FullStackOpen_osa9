import express from 'express';
import * as bmiCalc from './bmiCalculator'

const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const queryHeight = req.query.height as string;
  const queryWeight = req.query.weight as string;

  if (!queryWeight || !queryHeight || queryWeight === '' || queryHeight === '') {
    res.status(400).send({ error: "malformatted parameters" });
  }

  try {
    const { height, weight } = bmiCalc.parseArguments(queryHeight, queryWeight)
    const bmi = bmiCalc.calculateBmi(height, weight)
    res.json({ weight, height, bmi })
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});