import React from 'react';

const Row = props => {
  return (
    <tr className="row">
      <td>{props.index}  </td>
      <td>$ {props.balance} </td>
      <td>$ {props.period_interest} </td>
      <td>$ {props.period_principal} </td>
      <td>$ {props.total_interest} </td>
    </tr>
  );
};
export default Row;
