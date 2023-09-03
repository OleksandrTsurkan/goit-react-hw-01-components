import PropTypes from 'prop-types';
import { Avatar, Item, Paragraph, Status } from './FriendListItemstyled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status statusOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar"></Avatar>
      <Paragraph>{name}</Paragraph>
    </Item>
  );
};


FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};