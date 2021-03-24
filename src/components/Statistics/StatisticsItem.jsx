import PropTypes from "prop-types";


const StatisticItem = (props) => {
   return (
      <li class="item">
         <span class="label">{ props.label}</span>
         <span class="percentage">{ props.percentage}%</span>
      </li>
   )
}

StatisticItem.propTypes = {
   label: PropTypes.string.isRequired,
   percentage: PropTypes.number.isRequired,


};
export default StatisticItem