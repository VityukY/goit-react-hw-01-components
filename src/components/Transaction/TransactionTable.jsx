import TransactionRow from './TransactionRow'
import transactions from './transaction.json'

const TransactionTable = () => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className=''>
        {transactions.map(transaction => {
          return (<TransactionRow
            key={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency} />
          )
        })}
      </tbody>
    </table>

  )
}

export default TransactionTable