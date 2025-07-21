import React from 'react'
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";
import './Customcss/Hbtn1.css'

const Hbtn = () => {

  const navigate = useNavigate();

  return (
    <button className="sticky-home-btn" onClick={() => navigate("/")}>
      <Home size={24} />
    </button>
  )
}

export default Hbtn
