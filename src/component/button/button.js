import m from 'mithril';
import { trim } from 'ramda';

const button = {
  view: ({
    attrs: { className = 'p-3', type = 'button', ...attrs },
    children,
    ...vnode
  }) =>
    m(
      'button',
      {
        className: `bg-pink-600 hover:bg-pink-400 focus:outline-none focus:ring-offset-0 focus:ring-pink-400 ring ring-pink-600 ring-offset-2 text-white ${className}`,
        type,
        ...attrs,
      },
      children
    ),
};

export const inlineButton = {
  view: ({ attrs: { className = '', ...attrs }, children, ...vnode }) =>
    m(
      'button',
      {
        className: trim(`focus:outline-white px-2 ${className}`),
        type: 'button',
        ...attrs,
      },
      children
    ),
};

export const roundedButton = {
  view: ({ attrs: { className = '', ...attrs }, children, ...vnode }) =>
    m(
      button,
      {
        className: trim(
          `h-12 rounded-full w-12 flex flex-col items-center justify-center ${className}`
        ),
        ...attrs,
      },
      children
    ),
};
export default button;
