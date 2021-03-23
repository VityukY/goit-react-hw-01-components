const TransactionRow = (props) => {
   return (
      <tr className = 'transationRow'>
         <td>{props.type}</td>
         <td>{ props.amount}</td>
         <td>{props.currency}</td>
      </tr>
   )

}
export default TransactionRow

