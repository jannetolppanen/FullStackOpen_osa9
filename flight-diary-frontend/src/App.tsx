import { useState, useEffect } from 'react';
import { NewEntry, FlightDiaryEntry } from './types';
import { getAllDiaryEntries, createEntry } from './diaryService';
import Diary from './components/Diary';
import Add from './components/Add';
import axios, { AxiosError } from 'axios';

const App = () => {
  const [DiaryEntries, setDiaryEntries] = useState<FlightDiaryEntry[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const error = {
    color: '#D8000C',
    backgroundColor: '#FFD2D2',
    border: '1px solid #D8000C',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    fontWeight: 'bold',
    width: 'fit-content',
    maxWidth: '80%',
  };

  useEffect(() => {
    getAllDiaryEntries().then((data) => {
      setDiaryEntries(data);
    });
  }, []);

  const diaryEntryCreation = async (object: NewEntry) => {
    try {
      const result = await createEntry(object);
      setDiaryEntries(DiaryEntries.concat(result));
    } catch (e) {
      if (axios.isAxiosError(e)) {
        setErrorMessage(e.response?.data);
        setTimeout(() => {
          setErrorMessage('');
        }, 5000);
      } else console.log(e);
    }
  };

  return (
    <div>
      <h1>Add new entry</h1>

      {errorMessage && <div style={error}>{errorMessage}</div>}
      <Add diaryEntryCreation={diaryEntryCreation} />

      <Diary entries={DiaryEntries} />
    </div>
  );
};

export default App;
