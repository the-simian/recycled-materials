import {Observable} from 'rx';
import {hJSX} from '@cycle/dom';

function Checkbox(source){

  const check = (
    <div>
      <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-2">
        <input type="checkbox" id="checkbox-2" className="mdl-checkbox__input" />
        <span className="mdl-checkbox__label">Checssdfdfkbox</span>
      </label>
    </div>
  );

  return {
    DOM: Observable.of(check)
  };
}

export default Checkbox;
