import m from 'mithril';
import flyd from 'flyd';
import formOnChange from 'component/form/form.on.change';
import { map } from 'ramda';

export default ({ State, onsubmit, oncancel }) => {
  const form$ = flyd.stream();
  const errors$ = flyd.stream();

  flyd.on(State('form'), form$);
  flyd.on(State('errors'), errors$);

  const onSubmit = e => {
    e.preventDefault();
    onsubmit(...form$());
  };

  const onCancel = e => {
    e.preventDefault();
    oncancel();
  };

  const onChange = e => {
    const [form, error] = formOnChange(e);
    form$({ ...form$(), ...form });
    errors$({ ...errors$(), ...error });
  };

  return {
    view: ({ attrs: { form } }) =>
      m(
        'form',
        {
          className:
            'container flex flex-col content-center justify-evenly max-w-md mb-10 mx-auto',
        },
        [
          form(onChange),
          m('div', { onsubmit: onSubmit, oncancel: onCancel }, 'BUTTONS TODO'),
        ]
      ),
  };
};
