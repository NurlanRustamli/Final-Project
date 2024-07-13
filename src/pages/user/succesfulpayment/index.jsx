import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

function Successful() {
    return (
        <section className='successpay'>
            <div className='container'>
                <header><h1>Payment Status</h1></header>
                <main>
                <h1>Successfully paid</h1>
                <h3>Your products will be arrived soon</h3>
                </main>
                
                <footer>
                <Link to="/">Back To Home</Link>
                </footer>
                
            </div>
        </section>

    )
}

export default Successful