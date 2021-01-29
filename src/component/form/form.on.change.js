import { always, cond, propEq, T } from 'ramda';

export default e => {
  const { target } = e;
  const { checked, form, id, name, validationMessage, value } = target;
  const val = cond([
    [propEq('type', 'number'), always(Number(value))],
    [propEq('type', 'checkbox'), always(checked)],
    [T, always(value)],
  ])(target);

  form.checkValidity();
  return [{ [id || name]: val }, { [id || name]: validationMessage }];
};
