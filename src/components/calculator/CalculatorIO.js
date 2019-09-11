import React from 'react';
import MainResult from './MainResult';
import CalculatorForm from './CalculatorForm';

const CalculatorIO = () => {
  return (
    <div
      className="container"
      style={{display: 'flex', flexDirection: 'column'}}
    >
      <div className="section_header">
        <h1>Auto Loan Calculator</h1>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flex: '1',
          flexWrap:'wrap'
        }}
      >
        <div style={{flex: '1', margin: 'auto', height: '100%'}}>
          <CalculatorForm />
        </div>
        <div
          style={{
            flex: '1',
            margin: 'auto',
            height: '100%',
          }}
        >
          <MainResult />
        </div>
      </div>
    </div>
  );
};

export default CalculatorIO;
