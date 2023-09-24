import * as React from 'react';
import { User } from '../types/types';

const UserCard: React.FC<User> = ({ name, email, phone }: User) => {
  return (
    <li className="user">
      <span className="user_elem user_elem--main">{name}</span>
      <span className="user_elem">{email}</span>
      <span className="user_elem">{phone}</span>
    </li>
  );
};

export default UserCard;
