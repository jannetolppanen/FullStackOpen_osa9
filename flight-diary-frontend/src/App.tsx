import { useState, useEffect } from 'react';
import { NewEntry, FlightDiaryEntry } from './types';
import { getAllDiaryEntries, createEntry } from './diaryService';
import Diary from './components/Diary';
import Add from './components/Add';

const App = () => {
  const [DiaryEntries, setDiaryEntries] = useState<FlightDiaryEntry[]>([]);

  useEffect(() => {
    getAllDiaryEntries().then((data) => {
      setDiaryEntries(data);
    });
  }, []);

  const diaryEntryCreation = (object: NewEntry) => {
    createEntry(object).then(data => {
      setDiaryEntries(DiaryEntries.concat(data))
    })
  };

  return (
    <div>
      <Add diaryEntryCreation={diaryEntryCreation} />
      <Diary entries={DiaryEntries} />
    </div>
  );
};

export default App;
