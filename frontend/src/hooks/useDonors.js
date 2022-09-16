import { useEffect, useState } from "react";

const useDonors = () => {
  const [donors, setDonors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/donors")
      .then((res) => res.json())
      .then((data) => setDonors(data));
  }, []);
  return [donors, setDonors];
};

export default useDonors;