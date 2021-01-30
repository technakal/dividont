import { inlineButton, roundedButton } from '@component/button/button';
import input, { numericInput } from '@component/form/input/input';
import inputGroup from '@component/form/input/inputGroup';
import label from '@component/form/label/label';
import { deleteIcon, plusIcon } from '@component/icon/icon';
import flyd from 'flyd';
import m from 'mithril';
import {
  always,
  cond,
  equals,
  filter,
  head,
  keys,
  length,
  lt,
  map,
  not,
  path,
  pathOr,
  pipe,
  T,
  values,
} from 'ramda';
import { v4 as uuid } from 'uuid';
import dividend, { emod } from '@service/dividend';

const hasSurcharges = pipe(
  s => s(),
  pathOr([], ['form', 'surcharges']),
  length,
  lt(0)
);

export default ({ attrs: { _s$, form$, errors$, ...attrs }, ...vnode }) => {
  const onsurchargechange = e => {
    const { target } = e;
    const { id, value } = target;

    const surcharges = map(
      s => (equals(id, pipe(keys, head)(s)) ? { [id]: Number(value) } : s),
      form$().surcharges
    );

    form$({ ...form$(), surcharges: [...surcharges] });
  };

  flyd.on(f => _s$({ ..._s$(), dividend: dividend(f) }), form$);

  const ondeletesurcharge = id => {
    const surcharges = filter(
      s => not(equals(id, pipe(keys, head)(s))),
      form$().surcharges
    );
    form$({ ...form$(), surcharges: surcharges });
  };

  const onaddsurcharge = () => {
    const surcharges = pipe(s => s(), pathOr([], ['form', 'surcharges']))(_s$);

    form$({
      ...form$(),
      surcharges: cond([
        [
          pipe(length, lt(0)),
          always([...surcharges, { [`surcharge-${uuid()}`]: 0 }]),
        ],
        [T, always([{ [`surcharge-${uuid()}`]: 0 }])],
      ])(surcharges),
    });
  };

  return {
    view: ({ attrs: { _s$, onchange, ...attrs }, ...vnode }) => [
      m(inputGroup, {
        component: numericInput,
        placeholder: pipe(s => s(), pathOr(0, ['form', 'premium']))(_s$),
        error: pipe(s => s(), pathOr('', ['errors', 'premium']))(_s$),
        id: 'premium',
        label: 'Audited Premium',
        min: 1,
        step: 'any',
        onblur: onchange,
        required: true,
      }),
      m(inputGroup, {
        component: numericInput,
        placeholder: pipe(s => s(), pathOr(0, ['form', 'divFactor']))(_s$),
        error: pipe(s => s(), pathOr('', ['errors', 'divFactor']))(_s$),
        id: 'divFactor',
        label: 'Dividend Factor',
        onblur: onchange,
        required: true,
      }),
      m(inputGroup, {
        className: 'flex-auto',
        component: numericInput,
        placeholder: pipe(s => s(), pathOr(0, ['form', 'emod']))(_s$),
        error: pipe(s => s(), pathOr('', ['errors', 'emod']))(_s$),
        id: 'emod',
        label: 'Emod',
        subLabel: `Emod Factor: ${pipe(
          s => s(),
          pathOr(0, ['form', 'emod']),
          emod
        )(_s$)}`,
        onblur: onchange,
        required: true,
        step: 'any',
      }),
      hasSurcharges(_s$)
        ? [
            m(label, { className: 'mt-6' }, 'Surcharge Exceptions'),
            map(
              i =>
                m(
                  'div',
                  {
                    className: 'flex flex-row',
                    key: pipe(keys, head)(i),
                  },
                  [
                    m(numericInput, {
                      className: 'flex-auto mb-2',
                      id: pipe(keys, head)(i),
                      placeholder: pipe(values, head)(i),
                      onblur: onsurchargechange,
                    }),
                    m(
                      inlineButton,
                      {
                        className: 'self-center',
                        onclick: () => ondeletesurcharge(pipe(keys, head)(i)),
                      },
                      m(deleteIcon, { className: 'text-3xl text-pink-600' })
                    ),
                  ]
                ),
              pipe(s => s(), pathOr([], ['form', 'surcharges']))(_s$)
            ),
          ]
        : m(
            label,
            { className: 'mt-6 self-center' },
            'Add Surcharge Exception'
          ),
      m(
        roundedButton,
        { className: 'mt-4 self-center', onclick: onaddsurcharge },
        m(plusIcon)
      ),
    ],
  };
};
