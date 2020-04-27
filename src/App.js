import React from 'react';
import Form from './components/Form/Form';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import GlobalStyle from './GlobalStyle';


const App = () => {
  return (
    <>
      <GlobalStyle />

      <Form>
        <Input></Input>
        <Button type="submit"></Button>
      </Form>
    </>
  );
};

export default App;
