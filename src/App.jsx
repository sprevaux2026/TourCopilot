// src/App.jsx

import { useState, useEffect } from "react";
import Gallery from "./components/Gallery";

// Fetch tours from https://course-api.com/react-tours-project using useEffect
// Store in state: tours, loading, error

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/react-tours-project");
      const data = await response.json();
      setTours(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error loading the tours</h1>;
  }

  if (tours.length === 0) {
    return (
      <main>
        <h2>No Tours Left</h2>
        <button onClick={fetchTours}>Refresh</button>
      </main>
    );
  }

  return (
    <main>
      <h1>Tour Gallery</h1>
      <Gallery tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
