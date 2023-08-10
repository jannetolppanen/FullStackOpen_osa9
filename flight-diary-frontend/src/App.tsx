import { useState, useEffect } from "react";
import { Weather } from "./types";
import { getAllDiaryEntries, createEntry } from "./diaryService";
import Diary from "./components/Diary";
import Add from "./components/Add";

const App = () => {
  const [DiaryEntries, setDiaryEntries] = useState<Weather[]>([])

  useEffect(() => {
    getAllDiaryEntries().then(data => {
      setDiaryEntries(data)
    })
    },[])



  return (
    <div>
      <Add />
      <Diary entries={DiaryEntries} />
    </div>

  );
};

export default App;