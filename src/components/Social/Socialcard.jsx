import { HeadText, LiText, LocationText, Photo, SocialContainer, TagText, TextSpan, UlText } from './socialcard.styled';
import data from './user.json';


export const SocialCard = () => {
 return data.map(data => {
 return (<SocialContainer className="profile" key={data.id}>
     <div className="description" >
    <Photo
      src={data.avatar}
      alt="User avatar"
      className="avatar"
    />
         <HeadText className="name">{data.username}</HeadText>
         <TagText className="tag">{data.tag}</TagText>
         <LocationText className="location">{data.location}</LocationText>
  </div>

  <UlText className="stats">
    <LiText>
      <TextSpan className="label">Followers</TextSpan>
      <TextSpan className="quantity"> {data.stats.followers}</TextSpan>
    </LiText>
    <LiText>
      <TextSpan className="label">Views</TextSpan>
      <TextSpan className="quantity"> {data.stats.views}</TextSpan>
    </LiText>
    <LiText>
      <TextSpan className="label">Likes</TextSpan>
      <TextSpan className="quantity"> {data.stats.likes}</TextSpan>
    </LiText>
  </UlText>
     </SocialContainer>);
});
};

console.log(SocialCard);
