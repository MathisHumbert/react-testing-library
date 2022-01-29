import './Pets.css';
import Filter from '../Filter/Filter';
import Cards from '../Cards/Cards';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Pets = () => {
  const [cats, setCats] = useState([]);

  const fetchCats = async () => {
    const response = await axios.get('http://localhost:4000/cats');
    setCats(response.data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  console.log(cats);

  return (
    <div className='container'>
      <div className='app-container'>
        <Filter />
        <Cards cats={cats} />
      </div>
    </div>
  );
};

export default Pets;
