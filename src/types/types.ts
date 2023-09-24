export type User = { name: string; email: string; phone: string; id: number };
export type Button = {
  mode: string;
  text: string;
  id: number;
  icon: string;
};
export type SwitchBtnProps = {
  onClickHandler: (mode: string) => void;
  btnData: Button;
  activeMode: string;
};
