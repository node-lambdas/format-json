import { lambda, Format } from '@node-lambdas/core';

const configutation = {
  version: 2,
  actions: {
    default: {
      input: Format.Json,
      output: Format.Text,
      handler: (input, output) => {
        const format = input.url.pathname.slice(1);
        const formatAsNumber = Number(format);
        const spaces = !isNaN(formatAsNumber) && formatAsNumber >= 0 && formatAsNumber <= 4 ? formatAsNumber : 2;
        const char = format === 'TAB' ? '\t' : '';

        output.send(JSON.stringify(input.body, null, char || spaces));
      },
    },
  },
};

lambda(configutation);
