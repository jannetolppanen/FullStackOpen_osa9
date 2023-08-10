import { useState, useEffect } from "react";
import { Weather } from "./types";
import { getAllDiaryEntries } from "./diaryService";
import Diary from "./components/Diary";

const App = () => {
  const [DiaryEntries, setDiaryEntries] = useState<Weather[]>([])

  useEffect(() => {
    getAllDiaryEntries().then(data => {
      setDiaryEntries(data)
    })
    },[])



  return (
    <div>
      <Diary entries={DiaryEntries} />
    </div>

  );
};

export default App;