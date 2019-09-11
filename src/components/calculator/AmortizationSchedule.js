import React, {useContext} from 'react';
import '../../styles/calculator-style.scss';
import Row from './Row';
import {FormContext} from '../../contexts/FormContext';

const AmortizationSchedule = () => {
  const {formOutputs} = useContext (FormContext);

  return (
    <div className="container" style={{flexDirection: 'column'}}>
      <h2 style={{padding: '16px', textAlign: 'center'}}>
        Amortization Schedule
      </h2>
      <table>
        <tr className="row">
          <th>Month</th>
          <th>Balance</th>
          <th>Interest</th>
          <th>Principal</th>
          <th>Total Interest</th>
        </tr>
        {formOutputs.amortization_schedule.map ((row, i) => {
          return (
            <Row
              index={i}
              balance={row.balance}
              period_interest={row.period_interest}
              period_principal={row.period_principal}
              total_interest={row.total_interest}
            />
          );
        })}
      </table>
    </div>
  );
};

export default AmortizationSchedule;
