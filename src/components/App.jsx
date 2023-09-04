import { Profile } from './Profile/Profile';
import user from 'data/User.json';
import { Statistics } from './Statistics/Statistics';
import data from 'data/Stat.json';
import friends from 'data/Friend.json';
import { FriendList } from './FriendList/FriendList';
import transactions from 'data/Transaction.json';
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
      {/* <Statistics stats={data} /> */}
      <Statistics stats={data} title="Upload stats" />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};

export default App;