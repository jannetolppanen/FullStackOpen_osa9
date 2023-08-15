import {
  Gender,
  HealthCheckRating,
  newPatientEntry,
  Diagnosis,
  BaseEntryWithoutID,
  EntryWithoutId,
  SickLeave,
  Discharge,
} from './types';

export const toNewEntry = (object: unknown): EntryWithoutId => {
  if (!object || typeof object !== 'object') {
    throw new Error('Incorrect or missing data');
  }

  if ('description' in object && 'date' in object && 'specialist' in object) {
    const newBaseEntry: BaseEntryWithoutID =
      'diagnosisCodes' in object
        ? {
            description: parseDescription(object.description),
            date: parseDate(object.date),
            specialist: parseSpecialist(object.specialist),
            diagnosisCodes: parseDiagnosisCodes(object.diagnosisCodes),
          }
        : {
            description: parseDescription(object.description),
            date: parseDate(object.date),
            specialist: parseSpecialist(object.specialist),
          };

    if ('type' in object) {
      switch (object.type) {
        case 'HealthCheck':
          if ('healthCheckRating' in object) {
            const healthCheckEntry: EntryWithoutId = {
              ...newBaseEntry,
              type: 'HealthCheck',
              healthCheckRating: parseHealthCheckRating(
                object.healthCheckRating
              ),
            };
            return healthCheckEntry;
          }
          throw new Error('Health check rating missing or incorrect');

        case 'OccupationalHealthcare':
          if ('employerName' in object) {
            let OccupationalHealthCareEntry: EntryWithoutId;

            'sickLeave' in object
              ? (OccupationalHealthCareEntry = {
                  ...newBaseEntry,
                  type: 'OccupationalHealthcare',
                  employerName: parseEmployerName(object.employerName),
                  sickLeave: parseSickLeave(object.sickLeave),
                })
              : (OccupationalHealthCareEntry = {
                  ...newBaseEntry,
                  type: 'OccupationalHealthcare',
                  employerName: parseEmployerName(object.employerName),
                });
            return OccupationalHealthCareEntry;
          }
          throw new Error('employerName missing');
        case 'Hospital':
          if ('discharge' in object) {
            const hospitalEntry: EntryWithoutId = {
              ...newBaseEntry,
              type: 'Hospital',
              discharge: parseDischarge(object.discharge),
            };
            return hospitalEntry;
          }
          throw new Error('discharge date missing');
      }
    }
    throw new Error('Type missing');
  }
  throw new Error('Invalid entry data provided.');
};

export const toNewPatientEntry = (object: unknown): newPatientEntry => {
  if (!object || typeof object !== 'object') {
    throw new Error('Incorrect or missing data');
  }

  if (
    'name' in object &&
    'dateOfBirth' in object &&
    'gender' in object &&
    'occupation' in object &&
    'ssn' in object
  ) {
    const newEntry: newPatientEntry = {
      name: parseName(object.name),
      dateOfBirth: parseDate(object.dateOfBirth),
      gender: parseGender(object.gender),
      occupation: parseOccupation(object.occupation),
      ssn: parseSSN(object.ssn),
      entries: [], // added entries here
    };
    return newEntry;
  }
  throw new Error('Incorrect data: some fields are missing');
};

const parseSpecialist = (specialist: unknown): string => {
  if (!specialist || !isString(specialist)) {
    throw new Error('Incorrect or missing specialist');
  }
  return specialist;
};

const parseDescription = (description: unknown): string => {
  if (!description || !isString(description)) {
    throw new Error('Incorrect or missing description');
  }
  return description;
};

const parseDischarge = (object: unknown): Discharge => {
  if (!object || typeof object !== 'object') {
    throw new Error('Incorrect or missing data');
  }

  if ('date' in object && 'criteria' in object) {
    const discharge: Discharge = {
      date: parseDate(object.date),
      criteria: parseCriteria(object.criteria),
    };
    return discharge;
  }
  throw new Error('Incorrect data: a field missing');
};

const parseCriteria = (criteria: unknown): string => {
  if (!criteria || !isString(criteria)) {
    throw new Error('Incorrect or missing criteria');
  }
  return criteria;
};

const parseSickLeave = (sickLeave: unknown): SickLeave => {
  if (
    !sickLeave ||
    typeof sickLeave !== 'object' ||
    !('startDate' in sickLeave) ||
    !('endDate' in sickLeave)
  ) {
    throw new Error('Sick leave data incorrect');
  }

  return {
    startDate: parseDate(sickLeave.startDate),
    endDate: parseDate(sickLeave.endDate),
  };
};

const parseEmployerName = (employerName: unknown): string => {
  if (!employerName || !isString(employerName)) {
    throw new Error('Incorrect employer name');
  }
  return employerName;
};

const parseHealthCheckRating = (
  healthCheckRating: unknown
): HealthCheckRating => {
  if (
    !healthCheckRating ||
    !isNumber(healthCheckRating) ||
    !isHealthCheckRating(healthCheckRating)
  ) {
    throw new Error('Incorrect health check rating: ' + healthCheckRating);
  }
  return healthCheckRating;
};

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isNumber = (text: unknown): text is number => {
  return typeof text === 'number' || text instanceof Number;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const isHealthCheckRating = (param: number): param is HealthCheckRating => {
  return Object.values(HealthCheckRating).includes(param);
};

const isGender = (param: string): param is Gender => {
  return Object.values(Gender)
    .map((v) => v.toString())
    .includes(param);
};

const parseOccupation = (occupation: unknown): string => {
  if (!isString(occupation)) {
    throw new Error('Incorrect or missing occupation');
  }
  return occupation;
};

const parseSSN = (ssn: unknown): string => {
  if (!isString(ssn)) {
    throw new Error('Incorrect or missing ssn');
  }
  return ssn;
};

const parseGender = (gender: unknown): Gender => {
  if (!isString(gender) || !isGender(gender)) {
    throw new Error('Incorrect gender: ' + gender);
  }
  return gender;
};

const parseName = (name: unknown): string => {
  if (!isString(name)) {
    throw new Error('Incorrect or missing name');
  }
  return name;
};

const parseDate = (dateOfBirth: unknown): string => {
  if (!dateOfBirth || !isString(dateOfBirth) || !isDate(dateOfBirth)) {
    throw new Error('Incorrect or missing date: ' + dateOfBirth);
  }
  return dateOfBirth;
};

const parseDiagnosisCodes = (object: unknown): Array<Diagnosis['code']> => {
  if (!object || typeof object !== 'object' || !('diagnosisCodes' in object)) {
    // we will just trust the data to be in correct form
    return [] as Array<Diagnosis['code']>;
  }

  return object.diagnosisCodes as Array<Diagnosis['code']>;
};
