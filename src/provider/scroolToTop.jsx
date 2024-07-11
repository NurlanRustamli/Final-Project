import { useEffect } from "react"


function scroolToTop() {
  useEffect(()=>{
    window.scrollTo({top:0,behavior:"smooth"})
  },[])
}

export default scroolToTop