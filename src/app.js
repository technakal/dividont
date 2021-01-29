import form from '@component/form/form';
import layout from '@container/layout';
import m from 'mithril';
import _s$, { State } from '@service/state';
import dividendForm from '@widget/dividendForm';
import dividendResult from '@widget/dividendResult';

export default () => {
  const _form = form({
    _s$,
    State,
  });

  return {
    view: vnode =>
      m(layout, [
        m(
          'main',
          { className: 'h-screen' },
          m(_form, {
            form: dividendForm,
          })
        ),
        m(dividendResult, { dividend: _s$().dividend }),
      ]),
  };
};
