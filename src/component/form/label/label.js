import m from 'mithril';
import { trim } from 'ramda';
export default {
  view: ({ attrs: { className = '', ...attrs }, ...vnode }) =>
    m(
      'label',
      {
        className: trim(`font-bold self-start text-sm ${className}`),
        ...attrs,
      },
      vnode.children
    ),
};
