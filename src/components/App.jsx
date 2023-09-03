import { Profile } from "./Social/Socialcard";
import user from './Social/user.json';

export const App = () => {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
};

export default App




//==========
// import { Card } from './Card/Card'

// const App = () => {
//   return (
//     <Card isOnline/>
//   )
// }

