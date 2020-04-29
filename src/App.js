// importing components

import React, { useEffect, useState } from 'react';
import Form from './components/Form/Form';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import Wrapper from './components/Wrapper/Wrapper';
import Title from './components/Title/Title';
import Gif from './components/Gif/Gif';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import ButtonsWrapper from './components/ButtonsWrapper/ButtonsWrapper';
import GlobalStyle from './GlobalStyle';
import style from './buttons.module.css';

// creating app

const App = () => {

  // creating const with my api key

  const API_KEY = 'PCuGzjRL976eDGWefyroT70o1prN6TD5';

  const [gifs, setGifs] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [limit, setLimit] = useState('');

  useEffect(() => {
    getGifs();
  }, [query]);

// fetching data from giphy api using api key

  const getGifs = async () => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=${limit}&offset=0&rating=G&lang=en`
    );
    const data = await response.json();
    setGifs(data.data);
    // console.log(data.data);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

// rendering components to the root element, 
// * components styled with styled-components

  return (
    <>
      <GlobalStyle />
      <Main>
        <Title><a href="/">Gifstagram</a></Title>
        <Form onSubmit={getSearch}>
          <Input type="search" placeholder="Search for GIFs" value={search} onChange={updateSearch} />
          <Button type="submit" />
          <ButtonsWrapper>
          <button className={style.column}></button>
          <button className={style.twocolumns}></button>
          <button className={style.threecolumns}></button>
          </ButtonsWrapper>
        </Form>
        <Wrapper>
          {gifs.map(gif => (
            <Gif
              key={gif.images.downsized.url}
              image={gif.images.downsized.url} 
              link={gif.images.downsized.url}
              title={gif.title}
              alt={gif.title}
            />
          ))}
        </Wrapper>
      </Main>
      <Footer>&copy; Piotr Kwak</Footer>
    </>
  );
};

export default App;
