import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [showproduct, setproduct] = useState([]);

  useEffect(() => {
    getItem();
  }, [])

  const getItem = async () => {
    let result = await fetch("http://localhost:5000/userlogin");
    result = await result.json();
    console.log(result);
    setproduct(result);
  }
  return (
    <div className="App">
      {
        showproduct.map((item) => (
          <div>
            <p>{item.id}</p>
            <p>{item.email}</p>
            <p>{item.password}</p>
          </div>
        ))
      }
    </div>
  );
}

export default App;
