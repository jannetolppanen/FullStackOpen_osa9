import diagnoseData from '../../data/diagnoses';

import { Diagnose } from '../types';

const diagnoses : Diagnose[] = diagnoseData;

const getEntries = (): Diagnose[] => {
  return diagnoses;
};

// const addDiary = () => {
//   return null;
// };

export default {
  getEntries
  // addDiary
};