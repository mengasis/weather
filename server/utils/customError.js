function createError(name = 'Error', message = '') {
  const err = Error(message)
  err.name = name
  err.message = message
  Error.captureStackTrace(err, createError)
  return err
}

const UNFORTUNATE = createError('UNFORTUNATE', 'How unfortunate! The API Request Failed.')

const NOT_FOUND = createError(
  'NOT FOUND',
  `The origin server did not find a current representation for the target 
  resource or is not willing to disclose that one exists.`
)

const FORBIDDEN = createError(
  'FORBIDDEN',
  'The server understood the request but refuses to authorize it.'
)

module.exports = {
  createError,
  UNFORTUNATE,
  FORBIDDEN,
  NOT_FOUND
}
