import FriendListItem from './FriendListItem'
import friendList from './friend-list.json'

const FriendList = () => {
   return (
      <ul className='friendList'>
         {friendList.map(friend => {
            return (
               <FriendListItem key={friend.id} name={friend.name} avatar={friend.avatar} isOnline={friend.isOnline} />
            )
         })}
      </ul>
   )
}

export default FriendList