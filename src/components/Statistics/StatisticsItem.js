import PropTypes from "prop-types";


const StatisticItem = (props) => {
   return (
      <li className="item">
         <span className="label">{props.label}</span>
         <span className="percentage">{props.percentage}%</span>
      </li>
   )
}

StatisticItem.propTypes = {
   label: PropTypes.string.isRequired,
   percentage: PropTypes.number.isRequired,


};
export default StatisticItem