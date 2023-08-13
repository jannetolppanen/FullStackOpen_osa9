import {
  Entry,
  HospitalEntry,
  HealthCheckEntry,
  OccupationalHealthcareEntry,
} from '../../types';
import { assertNever } from '../../utils';

const HospitalDetails: React.FC<{ entry: HospitalEntry }> = ({ entry }) => {
  return (
    <div>
      {entry.discharge.date}
      {entry.discharge.criteria}
    </div>
  );
};

const OccupationalHealthcareDetails: React.FC<{
  entry: OccupationalHealthcareEntry;
}> = ({ entry }) => {
  return (
    <div>
      OccupationalHealthcareEntry
      {entry.employerName}
      {entry.sickLeave?.startDate}
      {entry.sickLeave?.endDate}
    </div>
  );
};

const HealthCheckDetails: React.FC<{ entry: HealthCheckEntry }> = ({
  entry,
}) => {
  return <div>HealthCheckEntry {entry.healthCheckRating}</div>;
};

export const EntryDetails: React.FC<{ entry: Entry }> = ({ entry }) => {
  switch (entry.type) {
    case 'Hospital':
      return <HospitalDetails entry={entry} />;
    case 'OccupationalHealthcare':
      return <OccupationalHealthcareDetails entry={entry} />;
    case 'HealthCheck':
      return <HealthCheckDetails entry={entry} />;
    default:
      return assertNever(entry);
  }
};
