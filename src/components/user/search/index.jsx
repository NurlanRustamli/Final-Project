import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function Search() {
  const [value, setValue] = useState("")
  const handleNav = useNavigate()
  const getHandleSearch = (e)=>{
    e.preventDefault()
    if (value.length ) {
      handleNav(`/search/${value}`)
      
    }
  }
  return (
    <><div className="ss-input col-lg-5 col-xl-5 col-md-5">
      <form onSubmit={getHandleSearch}>
        <input type="text" placeholder="Search Products..." onChange={(e)=>setValue(e.target.value.trim())} />
        <button ><i className="fa-solid fa-magnifying-glass" /></button>
      </form>
    </div></>
  )
}

export default Search