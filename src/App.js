import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';
import StatistiscList from './components/Statistics/StatisticsList';
import FriendList from './components/FriendList/FriendList';
import TransactionTable from './components/Transaction/TransactionTable';

const App = () => {
   return (
      <div>
         <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
         />
         <StatistiscList />
         <FriendList />
         <TransactionTable />
      </div>
   );
};

export default App;
