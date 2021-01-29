import m from 'mithril';
import title from '@component/title/title';

export default {
  view: vnode =>
    m(
      'header',
      {
        className:
          'flex flex-col items-center justify-center p-6 pb-10 text-center',
      },
      [m(title, 'DiviDont')]
    ),
};
