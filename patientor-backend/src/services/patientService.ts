import patientData from '../../data/patients';

import { Patient, PatientWithoutSSN } from '../types';

const patients : Patient[] = patientData;

const getPatients = (): PatientWithoutSSN[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id, name, dateOfBirth, gender, occupation }));
};

// const addDiary = () => {
//   return null;
// };

export default {
  getPatients
  // addDiary
};