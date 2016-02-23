




import {Observable} from 'rx';
import {hJSX} from '@cycle/dom';
import {Checkbox} from './../components/checkbox';

function Counter() {
  const counter = (
    <div>
      <span>uuffffffffffffffffff</span>
      <Checkbox />
      <span>dd</span>
      <Checkbox />
    </div>
  );

  console.log(counter)

  return {
    DOM: Observable.of(counter)
  };
}

export default Counter;
