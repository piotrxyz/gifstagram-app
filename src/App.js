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
import langs from './components/Languages/Languages';
import rat from './components/Rating/Rating';
import Select from './components/Select/Select';
import GlobalStyle from './GlobalStyle';
import './masonry-grid.css';


const App = () => {
  // api key hidden
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [gifs, setGifs] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [limit, setLimit] = useState('');
  const [offset, setOffset] = useState('');
  const [rating, setRating] = useState('');
  const [lang, setLang] = useState('en');

  useEffect(() => {
    getData();
  }, [query]); // eslint-disable-line react-hooks/exhaustive-deps

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
    // console.log('updating search value');
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
    // console.log('searching');
  }

  const updateLimit = e => {
    setLimit(e.target.value);
    // console.log('updating limit value');
  }

  const updateLang = e => {
    setLang(e.target.value);
    // console.log('updating lang');
  }

  const updateOffset = e => {
    setOffset(e.target.value);
    // console.log('setting offset value');
  }

  const updateRating = e => {
    setRating(e.target.value);
    // console.log('setting rating value');
  }

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
      <Logo><a href="/gifstagram-app" aria-label="home">Gifstagram</a></Logo>
      <Main>
        <Form onSubmit={getSearch}>
          <Label htmlFor="search"></Label>
          <Input
            type="search"
            placeholder="Search for GIFs"
            value={search}
            onChange={updateSearch}
          />
          <Button type="submit" title="Search" aria-label="search button" />
          <InputsWrapper>
            <Label htmlFor="lang">Lang: </Label>
            <Select
              title="choose language"
              id="langs"
              value={lang}
              onChange={updateLang}
            >
              {langs}
            </Select>
            <Label htmlFor="results">Results: </Label>
            <Input limit
              title="number of results"
              type="text"
              placeholder="25"
              value={limit}
              onChange={updateLimit}
            />
            <Label htmlFor="offset">Offset: </Label>
            <Input off
              title="offset number"
              type="text"
              placeholder="0"
              value={offset}
              onChange={updateOffset}
            />
            <Label htmlFor="rating">Rating: </Label>
            <Select rating
              title="sort by rating"
              id="rating"
              value={rating}
              onChange={updateRating}
            >
              {rat}
            </Select>
          </InputsWrapper>
        </Form>
        <Wrapper>

          {/* masonry grid layout for fetched gifs */}

          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-column"
          >
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
      <GithubLink
          href="https://github.com/piotrxyz/gifstagram-app"
          title="app code link"
          aria-label="app code link"
          target="_blank"
          rel="noopener noreferrer"
        >
        </GithubLink>
        &copy; 2020 PK
      </Footer>
    </>
  );
};

export default App;
