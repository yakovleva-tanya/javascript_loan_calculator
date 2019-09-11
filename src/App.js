import React from 'react';
import Calculator from './components/calculator';
import FormContextProvider from './contexts/FormContext';

function App () {
  return (
    <FormContextProvider>
      <div className="App">
        <Calculator />
      </div>
    </FormContextProvider>
  );
}

export default App;
