//style
import b from '../styles/btn.module.scss';
//type
import { Button } from '../types/button';

export const btn = (props: Button) => {
  return <div className={b.btn}>{props.text}</div>;
};

export default btn;
