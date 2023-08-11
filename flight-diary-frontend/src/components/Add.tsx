import { useState } from 'react'
import { NewEntry } from '../types'

interface DiaryEntryCreationProps {
  diaryEntryCreation: (object: NewEntry) => void;
}

// eslint-disable-next-line react/prop-types
// const Add: React.FC<DiaryEntryCreationProps> = ({ diaryEntryCreation }) => {
  const Add = ({diaryEntryCreation}: DiaryEntryCreationProps) => {
  const [date, setDate] = useState<string>('')
  const [weather, setWeather] = useState<string>('')
  const [visibility, setVisibility] = useState<string>('')
  const [comment, setComment] = useState<string>('')

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()

    const newEntry: NewEntry = {
      date,
      weather,
      visibility,
      comment
    }

    diaryEntryCreation(newEntry)

    setDate('')
    setWeather('')
    setVisibility('')
    setComment('')
  };


  return (
    <div>

    <form onSubmit={handleSubmit}>
      <div>
        <label>Date: </label>
        <input 
          type="date" 
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div>
        <label>Weather: </label>
        <input 
          type="text" 
          value={weather}
          onChange={(e) => setWeather(e.target.value)}
        />
      </div>

      <div>
        <label>Visibility: </label>
        <input 
          type="text" 
          value={visibility}
          onChange={(e) => setVisibility(e.target.value)}
        />
      </div>

      <div>
        <label>Comment: </label>
        <input type="text" 
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
    </div>

  )
}

export default Add