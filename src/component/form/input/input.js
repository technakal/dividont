import m from 'mithril';
import { trim } from 'ramda';

const input = {
  view: ({ attrs: { className = '', ...attrs }, ...vnode }) =>
    m('input', {
      className: trim(`border border-gray-500 rounded p-2 ${className}`),
      onfocus: () => document.getElementById(attrs.id).select(),
      ...attrs,
    }),
};

export const numericInput = {
  view: vnode => m(input, { type: 'number', ...vnode.attrs }),
};

export default input;
