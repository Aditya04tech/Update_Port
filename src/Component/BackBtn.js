import React from 'react';
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import './Customcss/Backbtn.style.css'

const BackBtn = () => {
  const navigate = useNavigate();

  return (
    <button className="center-back-btn" onClick={() => navigate(-1)}>
      <ArrowLeft size={24} />
    </button>
  );
};

export default BackBtn;
