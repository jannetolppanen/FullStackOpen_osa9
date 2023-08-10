import { useState } from 'react'

const Add = () => {
  const [date, setDate] = useState<string>('')
const handleSubmit = (event: React.SyntheticEvent) => {

  event.preventDefault()
  console.log('making new entry')
}

  return (
    <div>

    <h1>Add new Entry</h1>
    <form onSubmit={handleSubmit}>
        <input
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <button type='submit'>add</button>
      </form>
    </div>

  )
}

export default Add