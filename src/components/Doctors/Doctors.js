import React, { useEffect, useState } from 'react';
import './Doctors.css'
import DoctorsCard from './../DoctorsCard/DoctorsCard';

const Doctors = () => {
    const [allDoctors, setAllDoctors] = useState([]);
  useEffect(() => {
    fetch("/doctor.json")
      .then((res) => res.json())
      .then((data) => setAllDoctors(data));
  }, []);
  return (
    <div className="container mb-5 mt-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {allDoctors.map((allDoctor) => (
          <DoctorsCard allDoctor={allDoctor}></DoctorsCard>
        ))}
      </div>
    </div>
  );
};

export default Doctors;