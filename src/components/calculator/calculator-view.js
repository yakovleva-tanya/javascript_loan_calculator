import React from 'react';
import AmortizationSchedule from './AmortizationSchedule';
import CalculatorIO from './CalculatorIO';

function Calculator () {
  return (
    <div className="main">
      <CalculatorIO />
      <AmortizationSchedule />
    </div>
  );
}

export default Calculator;
