import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

const Home = () => {
  const videos = useInitialState(API);
  const categories = Object.keys(videos);
  return (
    <>
      <Search />
      {categories.map(
        (category) =>
          videos[category].length > 0 && (
            <Categories title={category}>
              <Carousel>
                {videos[category].map((item) => (
                  <CarouselItem key={item.id} {...item} />
                ))}
              </Carousel>
            </Categories>
          )
      )}
    </>
  );

  // return (
  //   <div className="Home">
  //     <Header />
  //     <Search />

  //     {initialState.mylist.length > 0 && (
  //       <Categories title="Mi Lista">
  //         <Carousel>
  //           {initialState.mylist.map((item) => (
  //             <CarouselItem key={item.id} {...item} />
  //           ))}
  //         </Carousel>
  //       </Categories>
  //     )}

  //     {initialState.trends.length > 0 && (
  //       <Categories title="Mi Lista">
  //         <Carousel>
  //           {initialState.trends.map((item) => (
  //             <CarouselItem key={item.id} {...item} />
  //           ))}
  //         </Carousel>
  //       </Categories>
  //     )}

  //     {initialState.originals.length > 0 && (
  //       <Categories title="Mi Lista">
  //         <Carousel>
  //           {initialState.originals.map((item) => (
  //             <CarouselItem key={item.id} {...item} />
  //           ))}
  //         </Carousel>
  //       </Categories>
  //     )}

  //     <Footer />
  //   </div>
  // );
};

export default Home;
