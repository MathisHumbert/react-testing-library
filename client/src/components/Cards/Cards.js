import Card from '../Card/Card';
import './Cards.css';

const Cards = ({ cats }) => {
  return (
    <div className='pet-cards-container'>
      {cats.map((cat) => {
        return (
          <Card
            key={cat.id}
            name={cat.name}
            phone={cat.phone}
            email={cat.email}
            image={cat.image}
            favoured={cat.favoured}
          />
        );
      })}
    </div>
  );
};

export default Cards;
