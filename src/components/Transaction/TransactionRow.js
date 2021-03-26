import PropTypes from 'prop-types';

const TransactionRow = ({ type, amount, currency }) => {
   return (
      <tr className="transationRow">
         <td>{type}</td>
         <td>{amount}</td>
         <td>{currency}</td>
      </tr>
   );
};

TransactionRow.propTypes = {
   type: PropTypes.string.isRequired,
   amount: PropTypes.string.isRequired,
   currency: PropTypes.string.isRequired,
};
export default TransactionRow;
