import { Profile } from './Social/Socialcard';
import user from './Social/user.json';
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/stat.json';
import friends from './FriendList/Friend.json';
import { FriendList } from './FriendList/FriendList';
import transactions from './TransactionHistory/transaction.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';


export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <Statistics stats={data} title="Upload stats" />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};

export default App;

//==========
// import { Card } from './Card/Card'

// const App = () => {
//   return (
//     <Card isOnline/>
//   )
// }
