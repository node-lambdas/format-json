import { lambda, Format } from '@node-lambdas/core';

const configutation = {
  version: 1,
  input: Format.Json,
  output: Format.Text
};

lambda(configutation, (input, output) => {
  const format = input.url.slice(1);
  const formatAsNumber = Number(format);
  const spaces = !isNaN(formatAsNumber) && formatAsNumber >= 0 && formatAsNumber <= 4 ? formatAsNumber : 2;
  const char = format === 'TAB' ? '\t' : '';

  output.send(JSON.stringify(input.body, null, char || spaces));
});
