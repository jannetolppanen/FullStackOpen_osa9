import express from 'express';
import patientService from '../services/patientService';
import toNewPatientEntry from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientService.getPatients());
});


router.get('/:id', (req, res) => {
  console.log('api/patients/id');
  const patientID = req.params.id;
  const patient = patientService.getPatientByID(patientID);

  if (patient) {
    res.json(patient);
  } else {
    res.status(404).json({ error: 'Patient not found' });
  }
});

router.post('/', (req, res) => {
  try {
    const newPatientEntry = toNewPatientEntry(req.body);

    const addedPatient = patientService.addPatient(newPatientEntry);
    res.json(addedPatient);
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// const { name, dateOfBirth, gender, occupation, ssn } = req.body;
// const addedPatient = patientService.addPatient({
//   name,
//   dateOfBirth,
//   gender,
//   occupation,
//   ssn
// });
// res.json(addedPatient);
// });

export default router;
