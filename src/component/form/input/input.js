import m from 'mithril';

const input = {
  view: vnode =>
    m('input', {
      className: 'border border-gray-500 rounded p-2',
      ...vnode.attrs,
    }),
};

export const numericInput = {
  view: vnode => m(input, { type: 'number', ...vnode.attrs }),
};

export default input;
