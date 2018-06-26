module.exports = function (hash, network) {
  const net = parseInt(network)
  let link
  switch (net) {
    case 1: // main net
    case 2: // morden test net
    case 3: // ropsten test net
    case 4: // rinkeby test net
    case 42: // kovan test net
      const prefix = prefixForNetwork(network)
      link = `http://${prefix}etherscan.io/tx/${hash}`
      break
    // travis net
    case 18:
    case 19:
    case 20:
    case 111:
      link = `https://travis.cybermiles.io/tx/${hash}`
      break
    default:
      link = ''
      break
  }

  return link
}
