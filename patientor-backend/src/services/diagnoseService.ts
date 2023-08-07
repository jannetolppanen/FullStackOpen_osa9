import diagnoseData from '../../data/diagnoses';

import { Diagnose } from '../types';

const diagnoses : Diagnose[] = diagnoseData;

const getDiagnoses = (): Diagnose[] => {
  return diagnoses;
};

// const addDiary = () => {
//   return null;
// };

export default {
  getDiagnoses
  // addDiary
};