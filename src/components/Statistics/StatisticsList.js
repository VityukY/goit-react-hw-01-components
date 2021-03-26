import StatisticItem from './StatisticsItem';
import statisticalData from './statistical-data.json';

const StatistiscList = () => {
   return (
      <section className="statistics">
         <h2 className="title">Upload stats</h2>
         <ul className="stat-list">
            {statisticalData.map(item => {
               return (
                  <StatisticItem
                     key={item.id}
                     label={item.label}
                     percentage={item.percentage}
                  />
               );
            })}
         </ul>
      </section>
   );
};
export default StatistiscList;
