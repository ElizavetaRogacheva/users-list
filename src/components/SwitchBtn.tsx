import * as React from 'react';
import { SwitchBtnProps } from '../types/types';
import Icons from '../assets/sprite.svg';

const SwitchBtn: React.FC<SwitchBtnProps> = ({
  onClickHandler,
  btnData,
  activeMode,
}: SwitchBtnProps) => {
  return (
    <button
      className={`switcher-btn ${activeMode === btnData.mode ? 'active' : ''}`}
      aria-label={btnData.text}
      onClick={() => onClickHandler(btnData.mode)}>
      <svg className="switcher-icon">
        <use href={`${Icons}#${btnData.icon}`}></use>
      </svg>
    </button>
  );
};

export default SwitchBtn;
