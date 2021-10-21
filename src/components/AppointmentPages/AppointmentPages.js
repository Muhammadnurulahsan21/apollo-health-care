import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AppointmentPages = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Muhammadnurulahsan21/fake-data/main/services.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setService(data.find((service) => service.key === id));
      });
  }, []);
  return (
    <div>
      <div className="custom-margin">
        <h2>{service?.serviceName}</h2>
      </div>
    </div>
  );
};

export default AppointmentPages;
