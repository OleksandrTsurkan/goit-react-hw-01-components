import { HeadText, LiText, LocationText, Photo, SocialContainer, TagText, TextSpan, UlText } from './socialcard.styled';

import PropTypes from 'prop-types';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (<SocialContainer className="profile" >
     <div className="description" >
    <Photo
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
         <HeadText className="name">{username}</HeadText>
         <TagText className="tag">{tag}</TagText>
         <LocationText className="location">{location}</LocationText>
  </div>

  <UlText className="stats">
    <LiText>
      <TextSpan className="label">Followers</TextSpan>
      <TextSpan className="quantity"> {followers}</TextSpan>
    </LiText>
    <LiText>
      <TextSpan className="label">Views</TextSpan>
      <TextSpan className="quantity"> {views}</TextSpan>
    </LiText>
    <LiText>
      <TextSpan className="label">Likes</TextSpan>
      <TextSpan className="quantity"> {likes}</TextSpan>
    </LiText>
  </UlText>
     </SocialContainer> );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};


// console.log(SocialCard);
