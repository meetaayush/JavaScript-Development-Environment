/* eslint-disable no-console */

import webpack from "webpack";
import config from "../webpack.production.config";
import chalk from "chalk";

process.env.NODE_ENV = 'production';

console.log(chalk.blueBright('Generating minified build for production. This might take a moment...'));

webpack(config).run((err, stats) => {
  if (err) {
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalk.red(error));)
  }

if (jsonStats.hasWarnings) {
  console.log(chalk.yellowBright('Webpack generated the following warnings'));
  jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
}

console.log(`Webpack stats: ${stats}`);

// If we got this far then build is successfull
console.log(chalk.green('Your app has been built for production and written to /dist'));

return 0;
});