function createError(name = 'Error', message = '') {
  const err = Error(message)
  err.name = name
  err.message = message
  Error.captureStackTrace(err, createError)
  return err
}
