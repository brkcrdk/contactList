import chalk from 'chalk';

interface Logger<T> {
  logType: 'warn' | 'success' | 'error';
  content: T;
}

function logger<T>({ logType, content }: Logger<T>) {
  const colors = {
    warn: chalk.yellow('WARN'),
    success: chalk.green('SUCCESS'),
    error: chalk.red('ERR')
  };

  return console.log(`${colors[logType]} => ${content}`);
}

export default logger;
