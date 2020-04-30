// importing components

import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import Form from './components/Form/Form';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import Wrapper from './components/Wrapper/Wrapper';
import Logo from './components/Logo/Logo';
import Gif from './components/Gif/Gif';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Label from './components/Label/Label';
import InputsWrapper from './components/InputsWrapper/InputsWrapper';
import GithubLink from './components/GithubLink/GithubLink';
import GlobalStyle from './GlobalStyle';
import './masonry-grid.css';

// creating app

const App = () => {

  // creating const with my api key

  const API_KEY = 'PCuGzjRL976eDGWefyroT70o1prN6TD5';

  const [gifs, setGifs] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [limit, setLimit] = useState('');
  const [offset, setOffset] = useState('');
  const [rating, setRating] = useState('');
  const [lang, setLang] = useState('');

  useEffect(() => {
    getData();
  }, [query]);

  // fetching data from giphy api using api key

  const getData = async () => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=${limit}&offset=${offset}&rating=${rating}&lang=${lang}`
    );
    const data = await response.json();
    setGifs(data.data);
    // console.log(data.data);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log('updating search value');
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
    console.log('getting search value');
  }

  // limit

  const updateLimit = e => {
    setLimit(e.target.value);
    console.log('updating limit value');
  }

  // const getLimit = e => {
  //   e.preventDefault();
  //   setLimit(limit);
  //   console.log('getting limit value');
  // }

  const updateLang = e => {
    setLang(e.target.value);
    console.log('updating lang');
  }

  // const getLang = e => {
  //   e.preventDefault();
  //   setLimit(limit);
  //   console.log('');
  // }



  // masonry responive columns set

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  // rendering components to the root element, 
  // * components styled with styled-components

  return (
    <>
      <GlobalStyle />
      <Logo>
        <a href="/mkcoders-app">
          Gifstagram
            </a>
      </Logo>
      <Main>
        <Form
          onSubmit={getSearch}
        >

          <Label htmlfor="search"></Label>
          <Input
            type="search"
            placeholder="Search for GIFs"
            value={search}
            onChange={updateSearch}
          />

          <Button
            type="submit"
          />
          <InputsWrapper>
            <Label htmlfor="results">Results: </Label>
            <Input results
              type="text"
              placeholder="25"

              value={limit}
              onChange={updateLimit}
            />
            <Label htmlfor="language">Sort by lang: </Label>
            <Input language
              type="text"
              placeholder="PL / EN"
              value={lang}
              onChange={updateLang}
            />
          </InputsWrapper>
        </Form>
        <Wrapper>

          {/* masonry grid layout for fetched gifs */}

          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {gifs.map(gif => (
              <Gif
                key={gif.images.downsized.url}
                image={gif.images.downsized.url}
                link={gif.images.downsized.url}
                title={gif.title}
                alt={gif.title}
              />
            ))}
          </Masonry>
        </Wrapper>
      </Main>
      <Footer>
        &copy; Piotr Kwak
        <GithubLink
          href="https://github.com/piotrxyz/mkcoders-app"
          title="app code link"
          aria-label="app code link"
          target="_blank"
          rel="noopener noreferrer">
        </GithubLink>
      </Footer>
    </>
  );
};

export default App;
