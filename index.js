import { lambda, Format } from '@node-lambdas/core';

const configutation = {
  version: 1,
  input: Format.Json,
  output: Format.Text
};

lambda(configutation, (input, output) => {
  const parsedSpaces = Number(input.url.slice(1));
  const spaces = isNaN(parsedSpaces) ? 2 : Math.max(parsedSpaces, 4);
  
  output.send(JSON.stringify(input.body, null, spaces));
});
