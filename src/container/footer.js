import m from 'mithril';
import { faceIcon } from '@component/icon/icon';

export default {
  view: () =>
    m(
      'footer',
      {
        class:
          'absolute bg-white border-box bottom-0 flex flex-col items-center justify-center pb-6 pt-4 px-2 text-center w-full',
      },
      [
        m('p', { className: 'flex flex-row items-center pb-2' }, [
          m('span', 'Made by N. Keener'),
          m(faceIcon, { className: 'ml-2' }),
        ]),
        m(
          'a',
          {
            className: 'hover:text-pink-600',
            href: 'https://github.com/technakal/dividont',
            target: '_blank',
          },
          'Check out the code on GitHub.'
        ),
      ]
    ),
};
