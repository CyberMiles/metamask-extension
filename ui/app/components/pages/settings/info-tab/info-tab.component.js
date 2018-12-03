import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class InfoTab extends PureComponent {
  state = {
    version: global.platform.getVersion(),
  }

  static propTypes = {
    tab: PropTypes.string,
    metamask: PropTypes.object,
    setCurrentCurrency: PropTypes.func,
    setRpcTarget: PropTypes.func,
    displayWarning: PropTypes.func,
    revealSeedConfirmation: PropTypes.func,
    warning: PropTypes.string,
    location: PropTypes.object,
    history: PropTypes.object,
  }

  static contextTypes = {
    t: PropTypes.func,
  }

  renderInfoLinks () {
    const { t } = this.context

    return (
      <div className="settings-page__content-item settings-page__content-item--without-height">
        <div className="info-tab__link-header">
          { t('links') }
        </div>
        <div className="info-tab__link-item">
          <a
            href="https://www.cybermiles.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="info-tab__link-text">
              CyberMiles
            </span>
          </a>
        </div>
        <div className="info-tab__link-item">
          <a
            href="https://www.cybermiles.io/cmt-wallet/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="info-tab__link-text">
              CMT Wallet
            </span>
          </a>
        </div>
        <div className="info-tab__link-item">
          <a
            href="https://www.cmttracking.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="info-tab__link-text">
              CMT Tracking
            </span>
          </a>
        </div>
        <div className="info-tab__link-item">
          <a
            href="http://remix.cybermiles.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="info-tab__link-text">
              Remix for CMT
            </span>
          </a>
        </div>
        <div className="info-tab__link-item">
          <a
            href="http://travis-faucet.cybermiles.io/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="info-tab__link-text">
              Test Faucet
            </span>
          </a>
        </div>
        <div className="info-tab__link-item">
          <a
            href="mailto:support@cybermiles.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="info-tab__link-text">
              { t('emailUs') }
            </span>
          </a>
        </div>
      </div>
    )
  }

  render () {
    const { t } = this.context

    return (
      <div className="settings-page__content">
        <div className="settings-page__content-row">
          <div className="settings-page__content-item settings-page__content-item--without-height">
            <div className="info-tab__logo-wrapper">
              <img
                src="images/info-logo.png"
                className="info-tab__logo"
              />
            </div>
            <div className="info-tab__item">
              <div className="info-tab__version-header">
                { t('metamaskVersion') }
              </div>
              <div className="info-tab__version-number">
                { this.state.version }
              </div>
            </div>
          </div>
          { this.renderInfoLinks() }
        </div>
      </div>
    )
  }
}
