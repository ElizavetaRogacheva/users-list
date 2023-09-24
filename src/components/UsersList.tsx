import { useState } from 'react';
import { LIST_MODES, USERS_DATA } from '../constants';
import UserCard from './UserCard';
import SwitchBtn from './SwitchBtn';

function UsersList() {
  const [activeMode, setActiveMode] = useState<string>(LIST_MODES[0].mode);
  const btnHandler = (mode: string): void => {
    setActiveMode(mode);
  };
  return (
    <div className="users-container">
      <div className="switcher">
        {LIST_MODES.map((btn) => (
          <SwitchBtn
            key={btn.id}
            btnData={btn}
            onClickHandler={btnHandler}
            activeMode={activeMode}></SwitchBtn>
        ))}
      </div>
      <ul className={`users users--${activeMode}`}>
        {USERS_DATA.map((user) => (
          <UserCard key={user.id} {...user}></UserCard>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
