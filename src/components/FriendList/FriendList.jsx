import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendListic } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListic>
      {friends.map(friend => {
        return (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
              key={friend.id}
            />
          </li>
        );
      })}
    </FriendListic>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
