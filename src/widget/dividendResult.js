import isValue from '@util/isValue';
import m from 'mithril';
import { always, cond, gt, T } from 'ramda';

export default {
  oninit: vnode => console.log(vnode.attrs.dividend),
  view: ({ attrs: { dividend, ...attrs }, ...vnode }) =>
    cond([
      [
        isValue,
        always(
          m(
            'p',
            {
              className: `${
                gt(0, dividend) ? 'text-red-500' : ''
              } text-4xl text-center`,
            },
            `$${dividend}`
          )
        ),
      ],
      [
        T,
        always(
          m(
            'p',
            {
              className: `${
                gt(0, dividend) ? 'text-red-500' : ''
              } text-4xl text-center`,
            },
            `DON'T`
          )
        ),
      ],
    ])(dividend),
};
