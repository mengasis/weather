async function retry(fn = new Promise(), onFailure) {
  try {
    return await fn()
  } catch (err) {
    if (!!onFailure) onFailure(err)
    return retry(fn, onFailure)
  }
}

module.exports = retry
