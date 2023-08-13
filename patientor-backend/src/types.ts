export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other'
}
export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
}

export interface Patient {
  id: string;
  name: string;
  ssn: string;
  occupation: string;
  gender: Gender;
  dateOfBirth: string;
  entries: Entry[]
}

export type newPatientEntry = Omit<Patient, 'id'>;


export type PatientWithoutSSN = Omit<Patient, 'ssn'>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry {
}



export type NonSensitivePatient = Omit<Patient, 'ssn' | 'entries'>;