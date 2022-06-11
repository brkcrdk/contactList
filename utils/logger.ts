import chalk from 'chalk';

interface Logger<T> {
  logType: 'warn' | 'success' | 'error' | 'info';
  content: T;
}

function logger<T>({ logType, content }: Logger<T>) {
  const colors = {
    warn: chalk.yellow.bold('WARN'),
    success: chalk.green.bold('SUCCESS'),
    error: chalk.red.bold('ERR'),
    info: chalk.white.bold('INFO')
  };

  return console.log(`${colors[logType]} => ${content}`);
}

export default logger;
