module.exports = function(hash, network) {
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
    case 19: // travis test net
      link = `https://testnet.cmttracking.io/tx/${hash}`
      break
    case 18: // travis main net
      link = `https://www.cmttracking.io/tx/${hash}`
      break
    default:
      link = ''
      break
  }

  return link
}
