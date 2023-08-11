import { useState } from 'react'
import { NewEntry } from '../types'

interface DiaryEntryCreationProps {
  diaryEntryCreation: (object: NewEntry) => void;
}

  const Add = ({diaryEntryCreation}: DiaryEntryCreationProps) => {
  const [date, setDate] = useState<string>('')
  const [weather, setWeather] = useState<string>('')
  const [visibility, setVisibility] = useState<string>('')
  const [comment, setComment] = useState<string>('')
  const weatherOptions = ["sunny", "rainy", "cloudy", "stormy", "windy"];
  const visibilityOptions = ["great", "good", "ok", "poor"]

  const handleWeatherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedWeather = e.target.value;
    setWeather(selectedWeather);
  };

  const handleVisibilityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedVisibility = e.target.value;
    setVisibility(selectedVisibility);
  };

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
      Weather:
      {weatherOptions.map((weatherOption) => (
        <label key={weatherOption}>
          <input 
            type="radio" 
            name="weather" 
            value={weatherOption}
            checked={weather === weatherOption}
            onChange={handleWeatherChange}
          />
          {weatherOption}
        </label>
      ))}
    </div>

      <div>
      Visibility:
      {visibilityOptions.map((visibilityOption) => (
        <label key={visibilityOption}>
          <input 
            type="radio" 
            name="visibility" 
            value={visibilityOption}
            checked={visibility === visibilityOption}
            onChange={handleVisibilityChange}
          />
          {visibilityOption}
        </label>
      ))}
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