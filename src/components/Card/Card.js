import './Card.css';

const Card = ({ name, phone, email, image, favoured }) => {
  return (
    <div className='card'>
      <div className='card-header'>
        <img src={image.url} alt={image.alt} className='card-img' />
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
