import React, {useContext} from 'react';
import {FormContext} from '../../contexts/FormContext';

const CalculatorForm = () => {
  const {formInputs, handleInputChange, handleFormSubmit} = useContext (
    FormContext
  );
  return (
    <div className="subContainer">
      <div className="form">
        <form onSubmit={handleFormSubmit}>
          <label>
            Car Price $
            <input
              style={{marginLeft: '15px'}}
              onChange={handleInputChange}
              type="number"
              name="price"
              value={formInputs.price}
              placeholder={formInputs.price}
              min="1"
              max="9999999"
              required
            />
          </label>
          <label>
            Downpayment $
            <input
              style={{marginLeft: '15px'}}
              onChange={handleInputChange}
              type="number"
              name="downpayment"
              value={formInputs.downpayment}
              placeholder={formInputs.downpayment}
              min="0"
              max="9999999"
              required
            />
          </label>
          <label>
            Loan Duration:
            <input
              style={{marginLeft: '15px', marginRight: '10px'}}
              className="timeInput"
              onChange={handleInputChange}
              type="number"
              name="months"
              value={formInputs.months}
              placeholder={formInputs.months}
              min="1"
              max="100"
            />
            Months
            <input
              style={{marginLeft: '15px', marginRight: '10px'}}
              className="timeInput"
              onChange={handleInputChange}
              type="number"
              name="years"
              value={formInputs.years}
              placeholder={formInputs.years}
              min="0"
              max="999"
            />
            Years
          </label>
          <label>
            Interest Rate (APR%)
            <input
              style={{marginLeft: '15px'}}
              onChange={handleInputChange}
              type="number"
              name="interest_rate"
              value={formInputs.interest_rate}
              placeholder={formInputs.interest_rate}
              min="0"
              max="100"
              required
            />
          </label>
          <button type="submit"> Submit</button>
        </form>
      </div>
    </div>
  );
};
export default CalculatorForm;
