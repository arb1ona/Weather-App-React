import React from 'react'

const api = {
  key: "f224b3a3abdd2acae159d538d397c4ac",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {
  return (
    <div className="app warm">
      <main>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search..."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
