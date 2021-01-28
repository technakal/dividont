import m from 'mithril';
import header from 'container/header';
import footer from 'container/footer';

export default {
  view: vnode =>
    m('div', { className: 'box-border flex flex-col' }, [
      m(header, { ...vnode.attrs }),
      vnode.children,
      m(footer, { ...vnode.attrs }),
    ]),
};
