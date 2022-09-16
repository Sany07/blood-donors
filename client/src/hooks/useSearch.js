import { useEffect, useState } from "react";

const useSearch = (search) => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    fetch(`https://eblooddonor.herokuapp.com/search/${search}`)
      .then((res) => res.json())
      .then((data) => setResult(data));
  }, []);
  return [result, setResult];
};

export default useSearch;