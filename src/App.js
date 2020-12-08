import React from 'react'

const api = {
  key: "f224b3a3abdd2acae159d538d397c4ac",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return`${day} ${date} ${month} ${year}`

  }


  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search..."
            className="search-bar"
          />
        </div>
        <div className="location-box" >
          <div className="location">Tirana, Al</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">15°C</div>
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
