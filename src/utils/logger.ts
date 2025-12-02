import chalk from "chalk";

export function log(message: string) {
  console.log(chalk.red("[UCHIHA]"), chalk.white(message));
}
