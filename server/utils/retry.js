function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function retry(fn = new Promise(), onFailure) {
  try {
    return await fn()
  } catch (err) {
    if (!!onFailure) onFailure(err)

    await timeout(1000)
    return retry(fn, onFailure)
  }
}

module.exports = retry
