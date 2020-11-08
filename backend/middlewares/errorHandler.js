module.exports = () => (err, req, res, next) => {
  if (err.isBoom) {
    const outputError = err.output;
    res
      .status(outputError.statusCode)
      .send({
        ...outputError.payload,
        meta: err.data || undefined,
      });
  } else if (err.response) {
    const resError = err.response;
    res
      .status(resError.status)
      .send(resError.data);
  } else {
    res
      .status(500)
      .send({
        statusCode: 500,
        error: 'Internal Server Error',
        message: err.message,
      });
  }

  next();
}
