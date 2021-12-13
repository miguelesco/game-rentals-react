import React from 'react';
// import {useSelector} from 'react-redux'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Game from './Game';
import { CustomLeftArrow, CustomRightArrow } from './util/CustomComponent';

const CarouselContainer = () => {
  // const GameList = useSelector(state => state.user.user_information.games)
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };

  const GameList = [
    {
      id: '1',
      name: 'Game 1',
      description: 'This is a game 1',
    },
    {
      id: '2',
      name: 'Game 2',
      description: 'This is a game 2',
    },
    {
      id: '3',
      name: 'Game 3',
      description: 'This is a game 3',
    },
    {
      id: '4',
      name: 'Game 4',
      description: 'This is a game 4',
    },
    {
      id: '5',
      name: 'Game 5',
      description: 'This is a game 5',
    },
  ];

  return (
    <div className="home">
      <h1 className="text-center">LASTEST GAMES</h1>
      <p className="text-center">Please select a Game</p>

      <Carousel
        responsive={responsive}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        swipeable
        draggable
        showDots
        ssr // means to render carousel on server-side.
        infinite
        autoPlaySpeed={1000}
        keyBoardControl
        minimumTouchDrag={50}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="carousel"
      >
        {
                GameList.map((game) => (
                  <Game
                    key={game.id}
                    name={game.name}
                    description={game.description}
                  />
                ))
            }
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
