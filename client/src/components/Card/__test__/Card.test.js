import { render, screen } from '@testing-library/react';
import userEvents from '@testing-library/user-event';
import { PetsContext } from '../../Pets/Pets';
import Card from '../Card';
import cats from '../../../mocks/cats.json';

const cardProps = {
  name: 'Sydeney',
  phone: '111-111-1111',
  email: 'jamal@hotmail.com',
  image: {
    url: 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    alt: 'cute cat',
  },
  favoured: false,
  updateFavourite: () => {},
  index: 1,
};

const renderCardComponentWithProvider = (props) => {
  render(
    <PetsContext.Provider value={{ cats, setCats: () => {} }}>
      <Card {...props} />
    </PetsContext.Provider>
  );
};

describe('Card', () => {
  test('should show name of cat', () => {
    renderCardComponentWithProvider(cardProps);

    expect(
      screen.getByRole('heading', { name: /sydeney/i })
    ).toBeInTheDocument();
  });

  test('should show phone number', () => {
    renderCardComponentWithProvider(cardProps);

    expect(screen.getByText(/111-111-1111/i)).toBeInTheDocument();
  });

  test('should show email', () => {
    renderCardComponentWithProvider(cardProps);

    expect(screen.getByText(/jamal@hotmail.com/i)).toBeInTheDocument();
  });

  test('should show image with correct src', () => {
    renderCardComponentWithProvider(cardProps);

    expect(screen.getByAltText(/cute cat/i).src).toBe(cardProps.image.url);
  });

  test('should show outlined heart', () => {
    renderCardComponentWithProvider(cardProps);

    // expect(screen.queryAllByAltText(/filled heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
  });

  test('should show filled heart', () => {
    renderCardComponentWithProvider({ ...cardProps, favoured: true });

    // expect(screen.queryAllByAltText(/outlined heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();
  });

  test('should toggle heat status', () => {
    renderCardComponentWithProvider(cardProps);

    userEvents.click(screen.getByRole('button'));
    expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();

    userEvents.click(screen.getByRole('button'));
    expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
  });
});
