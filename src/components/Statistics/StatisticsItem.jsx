const StatisticItem = (props) => {
   return (
      <li class="item">
         <span class="label">{ props.label}</span>
         <span class="percentage">{ props.percentage}%</span>
      </li>
   )
}
export default StatisticItem