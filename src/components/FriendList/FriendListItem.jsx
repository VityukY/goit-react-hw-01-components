const FriendListItem = (props) => {
   return (
      <li class="item">
         <span class="status">Current status: {props.isOnline? "Online":"Ofline"}</span>
         <img class="avatar" src={props.avatar} alt="" width="48" />
         <p class="name">{ props.name}</p>
      </li>
)
}

export default FriendListItem