module.exports = {
  debug: (msg, optionalParams) => {
    optionalParams ? console.debug(msg, optionalParams) : console.debug(msg)
  },
  info: (msg, optionalParams) => {
    optionalParams ? console.info(msg, optionalParams) : console.info(msg)
  }
}
