import React, { useEffect, useState } from 'react';
import Form from './components/Form/Form';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import Wrapper from './components/Wrapper/Wrapper';
import Title from './components/Title/Title';
import Gif from './components/Gif/Gif';
import GlobalStyle from './GlobalStyle';


const App = () => {
  const API_KEY = 'PCuGzjRL976eDGWefyroT70o1prN6TD5';

  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=programming&limit=10&offset=0&rating=G&lang=en`
    );
    const data = await response.json();
    setGifs(data.data);
    console.log(data.data);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Form>
          <Input type="search"></Input>
          <Button type="submit"></Button>
        </Form>
        <Title>Giphynator!!!!!!</Title>
        {gifs.map(gif => (
          <Gif />
        ))}
      </Wrapper>
    </>
  );
};

export default App;
