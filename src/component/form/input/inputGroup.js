import m from 'mithril';
import label from '@component/form/label/label';

export default {
  view: ({ attrs: { component, error, id, ...attrs } }) =>
    m('div', { className: 'flex flex-col justify-around mb-5' }, [
      m(label, { htmlFor: id }, attrs.label),
      attrs.subLabel
        ? m('p', { className: 'italic text-sm text-gray-500' }, attrs.subLabel)
        : null,
      m(component, { id, ...attrs }),
      error ? m('p', { className: 'text-red-500' }, error) : null,
    ]),
};
