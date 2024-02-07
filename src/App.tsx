import { useEffect, useState } from "react";
import MashGame from "./components/MashGame";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return (
    <main className="min-h-screen p-8 bg-blue-700">
      {loading ? (
        <p className="text-center">
          <span className="inline-block text-white">Loading...</span>
        </p>
      ) : (
        <MashGame />
      )}
    </main>
  );
}

export default App;
