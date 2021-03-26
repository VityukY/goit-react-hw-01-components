import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = props => {
   return (
      <li className={styles.item}>
         <span className="status">Current status: {props.isOnline ? 'Online' : 'Ofline'}</span>
         <img className="avatar" src={props.avatar} alt="" width="48" />
         <p className="name">{props.name}</p>
      </li>
   );
};

FriendListItem.propTypes = {
   isOnline: PropTypes.bool.isRequired,
   avatar: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
};

export default FriendListItem;
