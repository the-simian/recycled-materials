import {Observable} from 'rx';
import {div, label, input, span} from '@cycle/dom';

function Checkbox({DOM}){

  const check = div([
    label(".mdl-checkbox.mdl-js-checkbox.mdl-js-ripple-effect", {
      attributes: {
        className: "mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect",
        htmlFor: "checkbox-2"
      }
    }, [
      input("#checkbox-2.mdl-checkbox__input", {
        attributes: {
          type: "checkbox",
          className: "mdl-checkbox__input"
        },
        id: {
          name: "id",
          value: "checkbox-2"
        }
      }),
      span(".mdl-checkbox__label", [`Checssdfdfkbox`])
    ])
  ]);

  return {
    DOM: Observable.of(check)
  };
}

export default Checkbox;
