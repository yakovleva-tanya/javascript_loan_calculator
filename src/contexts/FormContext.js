import React, {createContext, useState} from 'react';
import data from '../constants/test_data';
import calculate from '../constants/calculate';

export const FormContext = createContext ();

const FormContextProvider = props => {
  const [formInputs, setFormInputs] = useState ({
    price: 50000,
    downpayment: 0,
    months: 0,
    years: 10,
    interest_rate: 5,
  });
  const [formOutputs, setFormOutputs] = useState ({
    monthly_payment: 530.33,
    total_interest: 13639.31,
    amortization_schedule: data,
  });

  const handleInputChange = event => {
    event.persist ();
    setFormInputs (formInputs => ({
      ...formInputs,
      [event.target.name]: event.target.value,
    }));
  };
  const handleFormSubmit = event => {
    event.preventDefault ();
    let {price, downpayment, months, years, interest_rate} = formInputs;
    let calculated = calculate (
      price,
      downpayment,
      months,
      years,
      interest_rate
    );
    setFormOutputs (calculated);
  };

  return (
    <FormContext.Provider
      value={{formInputs, formOutputs, handleInputChange, handleFormSubmit}}
    >
      {props.children}
    </FormContext.Provider>
  );
};
export default FormContextProvider;
