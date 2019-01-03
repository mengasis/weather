async function retry(fn, onFailure) {
  try {
    return await fn()
  } catch (err) {
    onFailure(err)
    return retry(fn, onFailure)
  }
}

module.exports = retry
