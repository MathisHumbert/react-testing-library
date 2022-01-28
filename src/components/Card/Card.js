import './Card.css';
import heartFilled from '../../svgs/heartFilled.svg';
import heartOutlined from '../../svgs/heartOutlined.svg';
import { useState } from 'react';

const Card = ({ name, phone, email, image, favoured }) => {
  const [isFavoured, setIsFavoured] = useState(favoured);

  const toggleFavoured = () => {
    setIsFavoured(!isFavoured);
  };

  return (
    <div className='card'>
      <div className='card-header'>
        <img src={image.url} alt={image.alt} className='card-img' />
        <button className='heart' onClick={toggleFavoured}>
          {isFavoured ? (
            <img src={heartFilled} alt='filled heart' />
          ) : (
            <img src={heartOutlined} alt='outlined heart' />
          )}
        </button>
      </div>
      <div className='card-content'>
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
