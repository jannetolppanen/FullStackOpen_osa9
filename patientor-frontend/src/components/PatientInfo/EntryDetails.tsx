import {
  Entry,
  HospitalEntry,
  HealthCheckEntry,
  OccupationalHealthcareEntry,
  Diagnosis,
} from '../../types';
import { assertNever } from '../../utils';
import WorkIcon from '@mui/icons-material/Work';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import FavoriteIcon from '@mui/icons-material/Favorite';

function renderHealth(health: any) {
  switch (health) {
    case 0:
      return <FavoriteIcon style={{ color: 'green' }} />;
    case 1:
      return <FavoriteIcon style={{ color: 'yellow' }} />;
    case 2:
      return <FavoriteIcon style={{ color: 'red' }} />;
    case 3:
      return <FavoriteIcon style={{ color: 'black' }} />;
    default:
      return null;
  }
}


const HospitalDetails: React.FC<{ entry: HospitalEntry, diagnoses: Diagnosis[] }> = ({ entry, diagnoses }) => {
  return (
    <div>
      {entry.date} <MedicalServicesIcon /> <br />
      {entry.description} <br />
      {entry?.diagnosisCodes?.map((diagnoseCode) => {
        const diagnosis = diagnoses.find((d) => d.code === diagnoseCode);
        return (
          <li key={diagnoseCode}>
            {diagnoseCode} {diagnosis ? diagnosis.name : 'Unknown Diagnosis'}
          </li>
        )
      })}
      Discharge: {entry.discharge.date}, {entry.discharge.criteria} <br />
      Diagnose by {entry.specialist} <br />
    </div>
  );
};

const OccupationalHealthcareDetails: React.FC<{
  entry: OccupationalHealthcareEntry;
  diagnoses: Diagnosis[]
}> = ({ entry, diagnoses }) => {
  return (
    <div>
      {entry.date} <WorkIcon /> {entry.employerName} <br /> 
      {entry.description} <br />
      {entry?.diagnosisCodes?.map((diagnoseCode) => {
        const diagnosis = diagnoses.find((d) => d.code === diagnoseCode);
        return (
          <li key={diagnoseCode}>
            {diagnoseCode} {diagnosis ? diagnosis.name : 'Unknown Diagnosis'}
          </li>
        )
      })} <br />
      {entry.sickLeave? `Sick leave duration: ${entry.sickLeave.startDate} to ${entry.sickLeave.endDate}` : ''} <br />
      Diagnose by {entry.specialist} <br />
    </div>
  );
};

const HealthCheckDetails: React.FC<{ entry: HealthCheckEntry, diagnoses: Diagnosis[] }> = ({
  entry, diagnoses
}) => {
  const health = entry.healthCheckRating;
  return (
    <div>
      {entry.date} <HealthAndSafetyIcon /> <br />
      {entry.description} <br />
      {entry?.diagnosisCodes?.map((diagnoseCode) => {
        const diagnosis = diagnoses.find((d) => d.code === diagnoseCode);
        return (
          <li key={diagnoseCode}>
            {diagnoseCode} {diagnosis ? diagnosis.name : 'Unknown Diagnosis'}
          </li>
        )
      })}
      {renderHealth(health)} <br />
      Diagnose by {entry.specialist} <br />
      {entry?.diagnosisCodes?.map((diagnoseCode) => diagnoseCode)}
    </div>
  );
};

export const EntryDetails: React.FC<{ entry: Entry, diagnoses: Diagnosis[] }> = ({ entry, diagnoses }) => {
  switch (entry.type) {
    case 'Hospital':
      return <HospitalDetails entry={entry} diagnoses={diagnoses} />;
    case 'OccupationalHealthcare':
      return <OccupationalHealthcareDetails entry={entry} diagnoses={diagnoses} />;
    case 'HealthCheck':
      return <HealthCheckDetails entry={entry} diagnoses={diagnoses} />;
    default:
      return assertNever(entry);
  }
};
