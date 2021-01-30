import m from 'mithril';
import title from '@component/title/title';

export default {
  view: vnode =>
    m(
      'header',
      {
        className:
          'bg-pink-600 flex flex-col items-center justify-center mb-14 p-6 pb-8 ring-4 ring-offset-4 ring-pink-600 shadow-lg text-center',
      },
      [m(title, 'DiviDont')]
    ),
};
