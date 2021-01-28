import m from 'mithril';
import { curry, pathOr } from 'ramda';
import layout from 'container/layout';
import form from 'component/form/form';
import input, { numericInput } from 'component/form/input/input';
import inputGroup from 'component/form/input/inputGroup';

export default () => {
  let _s = {};
  const State = curry((prop, val) => (_s[prop] = val));

  const dividendForm = form({
    State,
    oncancel: console.log,
    onsubmit: console.log,
  });

  return {
    view: vnode =>
      m(layout, [
        m(
          'main',
          m(dividendForm, {
            form: onchange => [
              m(inputGroup, {
                component: numericInput,
                defaultValue: pathOr(0, ['form', 'premium'], _s),
                error: pathOr('', ['errors', 'premium'], _s),
                id: 'premium',
                label: 'Audited Premium',
                min: 1,
                step: 'any',
                onblur: onchange,
                required: true,
              }),
              m(inputGroup, {
                component: numericInput,
                defaultValue: pathOr(0, ['form', 'divFactor'], _s),
                error: pathOr('', ['errors', 'divFactor'], _s),
                id: 'divfactor',
                label: 'Dividend Factor',
                onblur: onchange,
                required: true,
              }),
              m(inputGroup, {
                component: numericInput,
                defaultValue: pathOr(0, ['form', 'emodFactor'], _s),
                error: pathOr('', ['errors', 'emodFactor'], _s),
                id: 'emodFactor',
                label: 'Emod Factor',
                onblur: onchange,
                required: true,
              }),
            ],
          })
        ),
        m('pre', JSON.stringify(_s, null, 2)),
        // result
      ]),
  };
};
