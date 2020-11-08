module.exports = (n) => {
  const fizz = (n % 3).toString(2)[0];
  const buzz = (n % 5).toString(2)[0];

  return x = {
    '01': 'Fizz',
    '10': 'Buzz',
    '00': 'FizzBuzz',
    '11': n,
  }[`${fizz}${buzz}`];
}
