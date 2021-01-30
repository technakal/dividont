import m from 'mithril';

const title = {
  view: vnode =>
    m(
      'h1',
      {
        className:
          'antialiased font-semibold font-headline pt-10 text-5xl text-white',
        ...vnode.attrs,
      },
      vnode.children
    ),
};

export const subTitle = {
  view: vnode =>
    m(
      'h2',
      { className: 'antialiased font-serif text-2xl', ...vnode.attrs },
      vnode.children
    ),
};

export default title;
