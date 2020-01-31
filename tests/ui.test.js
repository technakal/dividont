import { removeClass, addClass } from '../src/js/components/ui.js';

test('removeClass returns the element without the specified class', () => {
  const elem = document.createElement('div');
  elem.className = 'test test-class';
  const className = 'test-class';
  const expected = document.createElement('div');
  expected.className = 'test';
  expect(removeClass(elem, className)).toEqual(expected);
});

test('removeClass returns the element, even if the class was not on the original element', () => {
  const elem = document.createElement('div');
  elem.className = 'test test-class';
  const className = 'not-in-class-list';
  const expected = document.createElement('div');
  expected.className = 'test test-class';
  expect(removeClass(elem, className)).toEqual(expected);
});

test('addClass returns the element with the new class added', () => {
  const elem = document.createElement('div');
  elem.className = 'test';
  const className = 'test-class';
  const expected = document.createElement('div');
  expected.className = 'test test-class';
  expect(addClass(elem, className)).toEqual(expected);
});
