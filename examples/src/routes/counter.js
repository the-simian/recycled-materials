import {Observable} from 'rx';
import {hJSX} from '@cycle/dom';

const counter = (
<label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-2">
  <input type="checkbox" id="checkbox-2" className="mdl-checkbox__input" />
  <span className="mdl-checkbox__label">Checkbox</span>
</label>
);

function Counter() {
  return {
    DOM: Observable.of(counter)
  };
}

export default Counter;
