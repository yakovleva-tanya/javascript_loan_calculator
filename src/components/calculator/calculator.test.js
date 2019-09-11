import calculate from '../../constants/calculate';

describe ('calculator 1', () => {
  test ('No data case', () => {
    let result = {
      monthly_payment: NaN,
      total_interest: NaN,
      amortization_schedule: [],
      total_interest: NaN,
    };
    expect (calculate ()).toEqual (result);
  });

  test ('Monthly payment calculated', () => {
    expect (calculate (50000, 0, 0, 10, 5).monthly_payment).toEqual (530.33);
  });
  test ('Total interest calculated', () => {
    expect (calculate (50000, 0, 0, 10, 5).total_interest).toEqual (13639.31);
  });
});
