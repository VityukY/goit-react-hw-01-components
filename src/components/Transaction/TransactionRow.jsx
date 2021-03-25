import PropTypes from "prop-types";

const TransactionRow = (props) => {
   return (
      <tr className='transationRow'>
         <td>{props.type}</td>
         <td>{props.amount}</td>
         <td>{props.currency}</td>
      </tr>
   )

}


TransactionRow.propTypes = {
   type: PropTypes.string.isRequired,
   amount: PropTypes.string.isRequired,
   currency: PropTypes.string.isRequired,

};

export default TransactionRow