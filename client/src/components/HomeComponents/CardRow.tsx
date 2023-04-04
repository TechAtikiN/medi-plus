import React from 'react';
import Card from './Card';
import cardImage from '../../assets/find_doctor.png';

// 82dbc2a4085d439a8de26b7f5165f795

const CardRow= () => {
    return (
      <div className="flex-wrap mx-10 grid grid-cols-3 sm:grid-cols-5 items-center justify-around ">
        <Card
          imageSrc={cardImage}
          imageAlt="Card image 1"
          title="Card Title 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Card
          imageSrc={cardImage}
          imageAlt="Card image 2"
          title="Card Title 2"
          description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Card
          imageSrc={cardImage}
          imageAlt="Card image 3"
          title="Card Title 3"
          description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        />
        <Card
          imageSrc={cardImage}
          imageAlt="Card image 4"
          title="Card Title 4"
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
        />
        <Card
            imageSrc={cardImage}
            imageAlt="Card image 5"
            title="Card Title 5"
            description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ."
        />
    </div>
    );
    };

export default CardRow;