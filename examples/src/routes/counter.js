


import {Observable} from 'rx';
import {hJSX} from '@cycle/dom';

const counter = (
  <div>
    <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-2">
      <input type="checkbox" id="checkbox-2" className="mdl-checkbox__input" />
      <span className="mdl-checkbox__label">Checkbox</span>
    </label>
    <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-1">
        <input type="checkbox" id="checkbox-1" class="mdl-checkbox__input" checked />
        <span class="mdl-checkbox__label">Checkbox</span>
    </label>
  </div>
);

function Counter() {
  return {
    DOM: Observable.of(counter)
  };
}

export default Counter;
