// This generates mock data for local development
/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import { schema } from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';
import faker from 'faker';

jsf.extend("faker", function () {
  return faker
})

var outputFile = './src/api/db.json';

//const json = JSON.stringify(jsf(schema));

jsf.resolve(schema).then(function (result) {
  fs.writeFile(outputFile, JSON.stringify(result, null, 2), function (err) {
    if (err) {
      return console.log(chalk.red((err)));
    } else {
      console.log(chalk.green(`Mock Data Generated Here: ${outputFile}`));
    }
  });
});