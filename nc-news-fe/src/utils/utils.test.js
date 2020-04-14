import { stringToTitleCase } from './utils';

describe('stringToTitleCase', () => {
  test('Empty string returns empty string', () => {
    expect(stringToTitleCase('')).toBe('');
  });
  test('Title case remains unchanged', () => {
    expect(stringToTitleCase('Title')).toBe('Title');
  });
  test('Returns single words in title case', () => {
    expect(stringToTitleCase('title')).toBe('Title');
  });
  test('Returns strings in title case', () => {
    expect(stringToTitleCase('title case')).toBe('Title Case');
  });
});
