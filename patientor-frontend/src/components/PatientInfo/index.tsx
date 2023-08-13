import { Diagnosis, Patient } from '../../types';
import { useParams } from 'react-router-dom';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import TransgenderIcon from '@mui/icons-material/Transgender';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Gender } from '../../types';

interface Props {
  patients: Patient[];
  diagnoses: Diagnosis[];
}

const PatientInfo = ({ patients, diagnoses }: Props) => {
  const id = useParams().id;
  const patient = patients.find((p) => p.id === id);

  let genderIcon;

  switch (patient?.gender) {
    case Gender.Male:
      genderIcon = <MaleIcon />;
      break;
    case Gender.Female:
      genderIcon = <FemaleIcon />;
      break;
    case Gender.Other:
      genderIcon = <TransgenderIcon />;
      break;
    default:
      genderIcon = <HelpOutlineIcon />;
      break;
  }

  return (
    <div>
      <h2>
        {patient?.name} {genderIcon}
      </h2>
      ssn: {patient?.ssn} <br />
      occupation: {patient?.occupation}
      <h3>entries</h3>
      <div>
        {patient?.entries.map((p) => (
          <div key={p.id}>
            {p.date} {p.description} <br /> <br />
            {p.diagnosisCodes?.map((d) => {
              const diagnosis = diagnoses.find(
                (diagnosis) => diagnosis.code === d
              );
              return (
                <li key={d}>
                  {d} {diagnosis ? diagnosis.name : 'Unknown Diagnosis'}
                </li>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientInfo;
