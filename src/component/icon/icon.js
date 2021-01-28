import m from 'mithril';
import { trim } from 'ramda';

const icon = icon => {
  return {
    view: ({ attrs: { className = '' }, ...vnode }) =>
      m(
        'i',
        { className: trim(`material-icons ${className}`), ...vnode.attrs },
        icon
      ),
  };
};

export default icon;

export const faceIcon = icon('face');
export const heartIcon = icon('favorite');
export const plusIcon = icon('add');
export const deleteIcon = icon('backspace');
