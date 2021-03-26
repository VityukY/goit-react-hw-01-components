import FriendListItem from './FriendListItem';
import friendList from './friend-list.json';
import styles from './FriendList.module.css';

const FriendList = () => {
   return (
      <ul className={styles.list}>
         {friendList.map(friend => {
            return (
               <FriendListItem
                  key={friend.id}
                  name={friend.name}
                  avatar={friend.avatar}
                  isOnline={friend.isOnline}
               />
            );
         })}
      </ul>
   );
};

export default FriendList;
