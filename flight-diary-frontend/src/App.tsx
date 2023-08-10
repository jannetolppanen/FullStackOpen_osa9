import axios from "axios";

const App = () => {

  interface Weather {
    id: number;
    date: string;
    weather: 'rainy' | 'sunny' | 'windy';
    visibility: 'good' | 'poor'

  }

  axios.get('http://localhost:3000/api/diaries').then(response => {
    console.log(response.data)
  })


  return (
    <div>
      <h1>flight-diary-frontend</h1>
    </div>

  );
};

export default App;