import {
  createSurchargeFields,
  replicateSurchargeValues,
  addSurchargeEventHandlers,
  getSurchargeTotal,
} from '../src/js/components/surcharge.js';

test('replicateSurchargeValues returns an array of objects', () => {
  const container = document.createElement('div');
  container.innerHTML = `<input id="1" value="17" /><input id="2" value="28" /><input id="3" value="39" />`;
  const expected = [
    {
      id: '1',
      value: '17',
    },
    {
      id: '2',
      value: '28',
    },
    {
      id: '3',
      value: '39',
    },
  ];
  expect(replicateSurchargeValues(container)).toEqual(expected);
});

test('createSurchargeFields returns a template literal containing existing inputs and one new one', () => {
  const container = document.createElement('div');
  container.innerHTML = `<input id="surcharge-0" value="17" /><input id="surcharge-1" value="28" /><input id="surcharge-2" value="-218" />`;
  const expected = `<input type="number" step="any" id="surcharge-0" name="surcharge" value="17"/><a id="surcharge-0-delete" class="btn btn__round btn__delete" data-input="surcharge-0">×</a><input type="number" step="any" id="surcharge-1" name="surcharge" value="28"/><a id="surcharge-1-delete" class="btn btn__round btn__delete" data-input="surcharge-1">×</a><input type="number" step="any" id="surcharge-2" name="surcharge" value="-218"/><a id="surcharge-2-delete" class="btn btn__round btn__delete" data-input="surcharge-2">×</a><input type="number" step="any" id="surcharge-3" name="surcharge" value="0"/><a id="surcharge-3-delete" class="btn btn__round btn__delete" data-input="surcharge-3">×</a>`;
  expect(createSurchargeFields(container, 3)).toEqual(expected);
});

test('getSurchargeTotal of 17, 28, and -218 equals -173', () => {
  const container = document.createElement('div');
  container.innerHTML = `<input id="surcharge-0" value="17" /><input id="surcharge-1" value="28" /><input id="surcharge-2" value="-218" />`;
  const surcharges = container.querySelectorAll('input');
  expect(getSurchargeTotal(surcharges)).toEqual(-173);
});
