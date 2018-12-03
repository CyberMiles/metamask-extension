import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import SenderToRecipient from '../sender-to-recipient'
import { CARDS_VARIANT } from '../sender-to-recipient/sender-to-recipient.constants'
import TransactionActivityLog from '../transaction-activity-log'
import TransactionBreakdown from '../transaction-breakdown'
import Button from '../button'
import Tooltip from '../tooltip'
import prefixForNetwork from '../../../lib/etherscan-prefix-for-network'

export default class TransactionListItemDetails extends PureComponent {
  static contextTypes = {
    t: PropTypes.func,
  }

  static propTypes = {
    onCancel: PropTypes.func,
    onRetry: PropTypes.func,
    showCancel: PropTypes.bool,
    showRetry: PropTypes.bool,
    transaction: PropTypes.object,
  }

  handleEtherscanClick = () => {
    const { hash, metamaskNetworkId } = this.props.transaction

    let link = ''
    switch (metamaskNetworkId) {
      case '19': // travis test net
        link = `https://testnet.cmttracking.io/tx/${hash}`
        break
      case '18': // travis main net
        link = `https://www.cmttracking.io/tx/${hash}`
        break
      default:
        const prefix = prefixForNetwork(metamaskNetworkId)
        const etherscanUrl = `https://${prefix}etherscan.io/tx/${hash}`
        link = etherscanUrl
        break
    }

    global.platform.openWindow({ url: link })
    this.setState({ showTransactionDetails: true })
  }

  handleCancel = event => {
    const { onCancel } = this.props

    event.stopPropagation()
    onCancel()
  }

  handleRetry = event => {
    const { onRetry } = this.props

    event.stopPropagation()
    onRetry()
  }

  render () {
    const { t } = this.context
    const { transaction, showCancel, showRetry } = this.props
    const { txParams: { to, from } = {} } = transaction

    return (
      <div className="transaction-list-item-details">
        <div className="transaction-list-item-details__header">
          <div>Details</div>
          <div className="transaction-list-item-details__header-buttons">
            {
              showRetry && (
                <Button
                  type="raised"
                  onClick={this.handleRetry}
                  className="transaction-list-item-details__header-button"
                >
                  { t('speedUp') }
                </Button>
              )
            }
            {
              showCancel && (
                <Button
                  type="raised"
                  onClick={this.handleCancel}
                  className="transaction-list-item-details__header-button"
                >
                  { t('cancel') }
                </Button>
              )
            }
            <Tooltip title={t('viewOnEtherscan')}>
              <Button
                type="raised"
                onClick={this.handleEtherscanClick}
                className="transaction-list-item-details__header-button"
                >
                <img src="/images/arrow-popout.svg" />
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className="transaction-list-item-details__sender-to-recipient-container">
          <SenderToRecipient
            variant={CARDS_VARIANT}
            addressOnly
            recipientAddress={to}
            senderAddress={from}
          />
        </div>
        <div className="transaction-list-item-details__cards-container">
          <TransactionBreakdown
            transaction={transaction}
            className="transaction-list-item-details__transaction-breakdown"
          />
          <TransactionActivityLog
            transaction={transaction}
            className="transaction-list-item-details__transaction-activity-log"
          />
        </div>
      </div>
    )
  }
}
