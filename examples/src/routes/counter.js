




import {Observable} from 'rx';
import {div} from '@cycle/dom';
import {Checkbox} from './../components/checkbox';

function Counter() {
  const counter = div([
    Checkbox(),
    Checkbox()
  ]);

  return {
    DOM: Observable.of(counter)
  };
}

export default Counter;
