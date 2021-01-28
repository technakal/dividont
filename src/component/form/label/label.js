import m from 'mithril';

export default {
  view: vnode =>
    m(
      'label',
      { className: 'font-bold self-start text-sm', ...vnode.attrs },
      vnode.children
    ),
};
