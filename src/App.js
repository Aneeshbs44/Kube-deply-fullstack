import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetch('http://backend-service:5001/data') // Replace with your backend API URL
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log('Error fetching data: ', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
        <p>This app fetches data from a backend server:</p>
      </header>
      
      <section className="App-content">
        {data.length === 0 ? (
          <p>Loading data...</p>
        ) : (
          <ul>
            {data.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default App;
