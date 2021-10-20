import React, { useState } from 'react';
import { useEffect } from 'react';
import ServicesCard from './../ServicesCard/ServicesCard';

const Services = () => {
    const [servicesCards, setServicesCard] = useState([]);
    useEffect(() => {
      fetch("/services.json")
        .then((res) => res.json())
        .then((data) => setServicesCard(data));
    }, []);
    return (
        <div>
             <div className="container mb-5 mt-5">
        <div className="row row-cols-1 row-cols-md-3 g-1">
          {servicesCards.map((servicesCards) => (
            <ServicesCard key={servicesCards.id} servicesCards={servicesCards}></ServicesCard>
          ))}
        </div>
      </div>  
        </div>
    );
};

export default Services;