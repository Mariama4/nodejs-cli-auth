import { stdin, stdout } from 'node:process';

export const write = (string) => stdout.write(string);

export const input = stdin;

export const toHomePos = () => write('\x1b[H');

export const clearCmd = () => write('\x1Bc');

export const getForm = (name, params) => {
  if (!name) throw Error('No name form');
  if (!params.length) throw Error('Zero parameters');

  const DEFAULT_MIN_INPUT_LENGTH = 10;
  const DEFAULT_BORDER_LENGTH = 40;
  const DEFAULT_MARGIN_LEFT = 20;

  const borderLength = params.reduce(
    (accumulator, value) =>
      (accumulator < (
        value.length + DEFAULT_MIN_INPUT_LENGTH + 2
      ) ? value.length : accumulator),
    DEFAULT_BORDER_LENGTH
  );

  const marginLeft = ' '.repeat(DEFAULT_MARGIN_LEFT);

  let form = marginLeft.concat(' '.repeat(
    Math.floor(DEFAULT_BORDER_LENGTH / 2) - Math.floor(name.length / 2)),
  name,
  '\n');

  const paramsCoordinates = [];

  form += marginLeft.concat(
    '┌', '─'.repeat(borderLength),
    '┐\n');

  for (const index in params) {
    const paddingRight = borderLength - params[index].length - 2;
    form += marginLeft.concat(
      '│ ', params[index],
      ':',
      ' '.repeat(paddingRight),
      '│\n');
    const height = `\x1b[${(2 + parseInt(index)).toString()}B`;
    const width = `\x1b[${(DEFAULT_MARGIN_LEFT + 3 + params[index].length).toString()}C`;
    paramsCoordinates.push(height + width);
  }

  form += marginLeft.concat(
    '└',
    '─'.repeat(borderLength),
    '┘\n');


  return {
    form,
    paramsCoordinates
  };
};
