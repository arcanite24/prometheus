module.exports = {

  // TODO: Load version from global version string
  serverStartMessage: (version, port, address) => `
  ****************************************
  *  Prometheus JS                       *
  *  v${version}                         *
  *  Listening on: ${address}:${port}    *
  ****************************************
  `

}