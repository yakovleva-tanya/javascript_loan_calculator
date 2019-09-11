import React, {useContext} from 'react';
import {FormContext} from '../../contexts/FormContext';

const MainResult = () => {
  const {formOutputs} = useContext (
    FormContext
  );
  return (
    <div className="resultContainer">
      <div className="half" style={{borderBottom: '1px solid #f9f9f9'}}>
        <p>
          <div className="resultHeader"><h2>Monthly Payment:</h2></div>
          <strong><span className="highlight">${formOutputs.monthly_payment}</span></strong>
          {' / month'}
        </p>
      </div>
      <div className="half">
        <p>
          <div className="resultHeader"><h2>Total Interest:</h2></div>
          <strong><span className="highlight">${formOutputs.total_interest}</span></strong>
        </p>
      </div>
    </div>
  );
};
export default MainResult;
