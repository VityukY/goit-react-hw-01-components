import PropTypes from "prop-types";

const FriendListItem = (props) => {
   return (
      <li className="item">
         <span className="status">Current status: {props.isOnline? "Online":"Ofline"}</span>
         <img className="avatar" src={props.avatar} alt="" width="48" />
         <p className="name">{ props.name}</p>
      </li>
)
}

FriendListItem.propTypes = {
   isOnline: PropTypes.bool.isRequired,
   avatar: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,

};


export default FriendListItem