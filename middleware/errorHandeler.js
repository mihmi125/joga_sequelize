const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = status === 500 ? "Serveri sisemine viga" : err.message;

  res.status(status).json({
    error: {
      message,
      status
    }
  });
};

module.exports = errorHandler;