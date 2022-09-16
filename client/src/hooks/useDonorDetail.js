import { useEffect, useState } from "react";

const useDonorDetail = (donorId) => {
  const [donor, setDonor] = useState([]);

  useEffect(() => {
    fetch(`https://eblooddonor.herokuapp.com/donor/${donorId}`)
      .then((res) => res.json())
      .then((data) => setDonor(data));
  }, []);
  return [donor, setDonor];
};

export default useDonorDetail;