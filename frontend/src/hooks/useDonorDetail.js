import { useEffect, useState } from "react";

const useDonorDetail = (productId) => {
  const [donor, setDonor] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/donor/${productId}`)
      .then((res) => res.json())
      .then((data) => setDonor(data));
  }, []);
  return [donor, setDonor];
};

export default useDonorDetail;