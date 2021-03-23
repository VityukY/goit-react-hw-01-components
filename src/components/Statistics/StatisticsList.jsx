import StatisticItem from './StatisticsItem'
import statisticalData from './statistical-data.json'


const StatistiscList = () => {
   return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>
      <ul class="stat-list">
        { statisticalData.map(item => { return (
          <StatisticItem key={item.id} label={item.label} percentage={ item.percentage}/>
        )})
           
        }
      </ul>
    </section>
   )
}
export default StatistiscList
