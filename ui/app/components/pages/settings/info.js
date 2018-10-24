const { Component } = require('react')
const PropTypes = require('prop-types')
const h = require('react-hyperscript')

class Info extends Component {
  constructor (props) {
    super(props)

    this.state = {
      version: global.platform.getVersion(),
    }
  }

  renderLogo () {
    return (
      h('div.settings__info-logo-wrapper', [
        h('img.settings__info-logo', { src: 'images/info-logo.png' }),
      ])
    )
  }

  renderInfoLinks () {
    return (
      h('div.settings__content-item.settings__content-item--without-height', [
        h('div.settings__info-link-item', [
          h('a', {
            href: 'https://www.cybermiles.io/',
            target: '_blank',
          }, [
            h('span.settings__info-link', this.context.t('visitWebSite')),
          ]),
        ]),
        h('div.settings__info-link-item', [
          h('a', {
            href: 'https://www.cybermiles.io/cmt-wallet/',
            target: '_blank',
          }, [
              h('span.settings__info-link', "CMT Wallet"),
            ]),
        ]),
        h('div.settings__info-link-item', [
          h('a', {
            href: 'https://www.cmttracking.io/',
            target: '_blank',
          }, [
              h('span.settings__info-link', "CMT Tracking"),
            ]),
        ]),
        h('div.settings__info-link-item', [
          h('a', {
            href: 'http://travis-faucet.cybermiles.io/index.html',
            target: '_blank',
          }, [
              h('span.settings__info-link', "Test Faucet"),
            ]),
        ]),
        h('div.settings__info-link-item', [
          h('a', {
            target: '_blank',
            href: 'mailto:support@cybermiles.io',
          }, [
            h('span.settings__info-link', this.context.t('emailUs')),
          ]),
        ]),
      ])
    )
  }

  render () {
    return (
      h('div.settings__content', [
        h('div.settings__content-row', [
          h('div.settings__content-item.settings__content-item--without-height', [
            this.renderLogo(),
            h('div.settings__info-item', [
              h('div.settings__info-version-header', 'MetaMask for CMT'),
              h('div.settings__info-version-number', `Version: ${this.state.version}`),
            ]),
          ]),
          this.renderInfoLinks(),
        ]),
      ])
    )
  }
}

Info.propTypes = {
  tab: PropTypes.string,
  metamask: PropTypes.object,
  setCurrentCurrency: PropTypes.func,
  setRpcTarget: PropTypes.func,
  displayWarning: PropTypes.func,
  revealSeedConfirmation: PropTypes.func,
  warning: PropTypes.string,
  location: PropTypes.object,
  history: PropTypes.object,
  t: PropTypes.func,
}

Info.contextTypes = {
  t: PropTypes.func,
}

module.exports = Info
