import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar({ onPriceChange, price }) {
  const handlePriceChange = (e) => {
    const value = e.target.value
    onPriceChange(value)
  }

  return (
    <section id='sidebarsec'>
      <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 sidebar">
        <div className="Category">
          <header><h3>Category filter</h3></header>
          <main>
            <h4><Link to="/products/snack">Snack</Link></h4>
            <h4><Link to="/products/bakery">Bakery</Link></h4>
            <h4><Link to="/products/juice">Juice</Link></h4>
            <h4><Link to="/products/vegetables">Vegetables</Link></h4>
            <h4><Link to="/products/fruits">Fruits</Link></h4>
            <h4><Link to="/products/dairy">Dairy</Link></h4>
          </main>
        </div>
        <div className="Price">
          <header><h3>Price filter</h3></header>
          <main style={{ display: "flex", alignItems: "center" }}>
            <input
              type="range"
              min="0"
              max="100"
              value={price}
              onChange={handlePriceChange}
            />
            <span style={{ paddingLeft: "10px", fontWeight: "bold" }}>Max:${price}</span>
          </main>
        </div>
        <div className="Weight">
          <header><h3>Weight filter</h3></header>
          <main>
            <h4><Link to="/products/onekg">1 kg</Link></h4>
            <h4><Link to="/products/twokg">2 kg</Link></h4>
            <h4><Link to="/products/threekg">3 kg</Link></h4>
            <h4><Link to="/products/fourkg">4 kg</Link></h4>
            <h4><Link to="/products/fivekg">5 kg</Link></h4>
            <h4><Link to="/products/sixkg">6 kg</Link></h4>
            <h4><Link to="/products/sevenkg">7 kg</Link></h4>
            <h4><Link to="/products/eightkg">8 kg</Link></h4>
            <h4><Link to="/products/ninekg">9 kg</Link></h4>
          </main>
        </div>
      </div>
    </section>
  )
}

export default Sidebar
