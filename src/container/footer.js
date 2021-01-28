import m from 'mithril';
import { faceIcon } from 'component/icon/icon';

export default {
  view: () =>
    m(
      'footer',
      {
        class:
          'absolute border-box bottom-0 flex flex-row items-center justify-center pb-6 pt-4 px-2 text-center w-full',
      },
      [m('p', 'Made by N. Keener'), m(faceIcon, { className: 'ml-2' })]
    ),
};
