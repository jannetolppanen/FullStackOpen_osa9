import patientData from '../../data/patients';
import { v1 as uuid } from 'uuid';

import { Patient, PatientWithoutSSN, newPatientEntry } from '../types';

const patients: Patient[] = patientData;

const getPatients = (): Patient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation, ssn, entries }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
    ssn,
    entries // added entries here
  }));
};

const getPatientByID = (id: string): PatientWithoutSSN | undefined => {
  return patients.find(patient => patient.id === id);
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
  getPatientByID
};
