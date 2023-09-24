import { User, Button } from './types/types';

export const LIST_MODES: Button[] = [
  {
    mode: 'list',
    icon: 'burger',
    text: 'Список',
    id: 1,
  },
  {
    mode: 'tiles',
    icon: 'tiles',
    text: 'Карточки',
    id: 2,
  },
];
export const USERS_DATA: User[] = [
  {
    name: 'Иванов Иван Иванович',
    email: 'ivanov@ivan.ivan',
    phone: '+70000000000',
    id: 1,
  },
  {
    name: 'Петров Петр Петрович',
    email: 'petrov@petr.petr',
    phone: '+70000000001',
    id: 2,
  },
  {
    name: 'Сидоров Сергей Сергеевич',
    email: 'sidorov@sidor.sidor',
    phone: '+70000000002',
    id: 3,
  },
];
