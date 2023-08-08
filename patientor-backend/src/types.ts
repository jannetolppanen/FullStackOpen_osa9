export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  gender: string;
  occupation: string;
  ssn: string;
}

export type newPatientEntry = Omit<Patient, 'id'>

export type PatientWithoutSSN = Omit<Patient, 'ssn'>;