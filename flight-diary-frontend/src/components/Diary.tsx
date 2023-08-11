import { FlightDiaryEntry } from "../types"

const Diary = ( {entries}: {entries: FlightDiaryEntry[]}) => {
  return (
    <div>
      <h1>Diary entries</h1>

      {entries.map((day, index) => (
        <div key={index}>
          <h2>{day.date}</h2>
          <p>visibility: {day.visibility} <br /> weather: {day.weather}</p>

        </div>

      ))}
    </div>
  )
}

export default Diary