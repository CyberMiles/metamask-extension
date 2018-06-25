const Component = require('react').Component
const h = require('react-hyperscript')
const inherits = require('util').inherits

module.exports = Network

inherits(Network, Component)

function Network () {
  Component.call(this)
}

Network.prototype.render = function () {
  const props = this.props
  const networkNumber = props.network
  let providerName
  try {
    providerName = props.provider.type
  } catch (e) {
    providerName = null
  }
  let iconName, hoverText

  if (networkNumber === 'loading') {
    return h('span.pointer', {
      className: props.onClick && 'pointer',
      style: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
      },
      onClick: (event) => props.onClick && props.onClick(event),
    }, [
      props.onClick && h('img', {
        title: 'Attempting to connect to blockchain.',
        style: {
          width: '27px',
        },
        src: 'images/loading.svg',
      }),
      h('i.fa.fa-caret-down'),
    ])
  } else if (providerName === 'mainnet') {
    hoverText = 'Main Ethereum Network'
    iconName = 'ethereum-network'
  } else if (providerName === 'ropsten') {
    hoverText = 'Ropsten Test Network'
    iconName = 'ropsten-test-network'
  } else if (parseInt(networkNumber) === 3) {
    hoverText = 'Ropsten Test Network'
    iconName = 'ropsten-test-network'
  } else if (providerName === 'rinkeby') {
    hoverText = 'Rinkeby Test Network'
    iconName = 'rinkeby-test-network'
  } else if (providerName === 'staging') {
    hoverText = 'Staging Network'
    iconName = 'staging-network'
  } else if (providerName === 'testnet') {
    hoverText = 'Test Network'
    iconName = 'test-network'
  } else if (providerName === 'mainnet2') {
    hoverText = 'Main Network'
    iconName = 'mainnet2-network'
  } else {
    hoverText = 'Unknown Private Network'
    iconName = 'unknown-private-network'
  }

  return (
    h('#network_component', {
      className: props.onClick && 'pointer',
      title: hoverText,
      onClick: (event) => props.onClick && props.onClick(event),
    }, [
      (function () {
        switch (iconName) {
          case 'ethereum-network':
            return h('.network-indicator', [
              h('.menu-icon.diamond'),
              h('.network-name', {
                style: {
                  color: '#039396',
                }},
              'Main Network'),
              props.onClick && h('i.fa.fa-caret-down.fa-lg'),
            ])
          case 'ropsten-test-network':
            return h('.network-indicator', [
              h('.menu-icon.red-dot'),
              h('.network-name', {
                style: {
                  color: '#ff6666',
                }},
              'Ropsten Test Net'),
              props.onClick && h('i.fa.fa-caret-down.fa-lg'),
            ])
          case 'kovan-test-network':
            return h('.network-indicator', [
              h('.menu-icon.hollow-diamond'),
              h('.network-name', {
                style: {
                  color: '#690496',
                }},
              'Kovan Test Net'),
              props.onClick && h('i.fa.fa-caret-down.fa-lg'),
            ])
          case 'rinkeby-test-network':
            return h('.network-indicator', [
              h('.menu-icon.golden-square'),
              h('.network-name', {
                style: {
                  color: '#e7a218',
                }},
              'Rinkeby Test Net'),
              props.onClick && h('i.fa.fa-caret-down.fa-lg'),
            ])
          case 'mainnet2-network':
            return h('.network-indicator', [
              h('.menu-icon.diamond'),
              h('.network-name', {
                style: {
                  color: '#e7a218',
                }
              },
                'MainNet'),
              props.onClick && h('i.fa.fa-caret-down.fa-lg'),
            ])
          case 'staging-network':
            return h('.network-indicator', [
              h('.menu-icon.red-dot'),
              h('.network-name', {
                style: {
                  color: '#e7a218',
                }},
              'StagingNet'),
              props.onClick && h('i.fa.fa-caret-down.fa-lg'),
            ])
          case 'test-network':
            return h('.network-indicator', [
              h('.menu-icon.golden-square'),
              h('.network-name', {
                style: {
                  color: '#e7a218',
                }
              },
                'TestNet'),
              props.onClick && h('i.fa.fa-caret-down.fa-lg'),
            ])
          default:
            return h('.network-indicator', [
              h('i.fa.fa-question-circle.fa-lg', {
                style: {
                  margin: '10px',
                  color: 'rgb(125, 128, 130)',
                },
              }),

              h('.network-name', {
                style: {
                  color: '#AEAEAE',
                }},
              'Private Network'),
              props.onClick && h('i.fa.fa-caret-down.fa-lg'),
            ])
        }
      })(),
    ])
  )
}
