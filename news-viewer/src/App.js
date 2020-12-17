import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const onClick = () => {
    Axios.get('https://jsonplaceholder.typicode.com/todos/1').then(
      (response) => {
        setData(response.data);
      },
    );
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
    </div>
  );
}

export default App;
