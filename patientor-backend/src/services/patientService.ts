import patientData from '../../data/patients';
import { v1 as uuid } from 'uuid';

import { Patient, PatientWithoutSSN, newPatientEntry } from '../types';

const patients: Patient[] = patientData;

const getPatients = (): PatientWithoutSSN[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = ( entry: newPatientEntry): Patient => {
  const newPatient = {
    id: uuid(),
    ...entry
  };

  patients.push(newPatient);
  return newPatient;
};

export default {
  getPatients,
  addPatient,
};
