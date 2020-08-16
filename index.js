import { lambda, Format } from '@node-lambdas/core';

const configutation = {
  version: 1,
  input: Format.Json,
  output: Format.Text
};

lambda(configutation, (input, output) => {
  const spaces = (Number(input.url.slice(1)) | 0) || 2;
  output.send(JSON.stringify(input.body, null, spaces));
});
