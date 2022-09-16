import { useEffect, useState } from "react";

const useDonors = () => {
  const [donors, setDonors] = useState([]);
  useEffect(() => {
    fetch("https://eblooddonor.herokuapp.com/donors")
      .then((res) => res.json())
      .then((data) => setDonors(data));
  }, []);
  return [donors, setDonors];
};

export default useDonors;