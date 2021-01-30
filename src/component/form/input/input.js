import m from 'mithril';
import { trim } from 'ramda';

const input = {
  view: ({ attrs: { className = '', ...attrs }, ...vnode }) =>
    m('input', {
      className: trim(
        `border border-gray-300 focus:border-0 focus:outline-none focus:ring-2 focus:ring-pink-600 mb-2 p-2 rounded-lg shadow-md ${className}`
      ),
      onfocus: () => document.getElementById(attrs.id).select(),
      ...attrs,
    }),
};

export const numericInput = {
  view: vnode => m(input, { type: 'number', ...vnode.attrs }),
};

export default input;
