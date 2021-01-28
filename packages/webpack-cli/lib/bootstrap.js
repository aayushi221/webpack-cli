const WebpackCLI = require('./webpack-cli');
const logger = require('./utils/logger');

process.title = 'webpack-cli';

const runCLI = async (args, originalModuleCompile) => {
    try {
        // Create a new instance of the CLI object
        const cli = new WebpackCLI();

        cli._originalModuleCompile = originalModuleCompile;

        await cli.run(args);
    } catch (error) {
        logger.error(error);
        process.exit(2);
    }
};

module.exports = runCLI;
