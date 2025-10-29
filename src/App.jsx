import { useEffect, useState } from 'react'
import './App.css'
import BreweryInfo from './Components/BreweryInfo.jsx'

const API_URL = import.meta.env.VITE_BREWERIES_API

function App() {

  const [list, setList] = useState([])
  useEffect(() => {
    async function fetchAllBreweries() {
      const response = await fetch(API_URL)
      const data = await response.json()
      setList(data)
    }    
  fetchAllBreweries().catch(console.error)
  }, [] )

  const totalBreweries = list.length;
  const totalStates = new Set(list.map(brewery => brewery.state)).size;
  const totalCities = new Set(list.map(brewery => brewery.city)).size;


  const [filteredResults, setFilteredResults] = useState([])
  const [searchInput, setSearchInput] = useState("")

console.log(list)

  return (

    <div className="homepage">
      <h1>Breweries List</h1>
      <div className="dashboard">
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-circle">{totalBreweries}</div>
            <p>Total Breweries</p>
          </div>
          <div className="stat-card">
            <div className="stat-circle">{totalStates}</div>
            <p>Total States</p>
          </div>
          <div className="stat-card">
            <div className="stat-circle">{totalCities}</div>
            <p>Total Cities</p>
          </div>
        </div>
      </div>
      <input type="text" placeholder="Search..." onChange={(inputString) => searchItems(inputString.target.value)} />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>State</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
      <tbody>
        {list
          .map(brew => (
            <BreweryInfo
              key={brew.id}
              name={brew.name}
              state={brew.state}
              city={brew.city}
              phone={brew.phone}
              website={brew.website_url}
            />
          ))
        }
      </tbody>
            </table>
    </div>
  )
}

export default App
