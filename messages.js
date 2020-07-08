exports.default =
  '\n\x1b[34mCookup 2.0.0\x1b[0m by @jadeallencook\n\n\x1b[33mCopy boilerplate:\x1b[0m cookup boilerplate.ext\n\x1b[33mUse boilerplate:\x1b[0m cookup boilerplate ext\n\x1b[33mRename boilerplate:\x1b[0m cookup boilerplate/new-name ext\n\x1b[33mPass params:\x1b[0m cookup boilerplate ext param1 param2\n';
exports.importing =
  '\n\x1b[34mWorking: Please wait while your boilerplate is imported\x1b[0m';
  exports.exporting =
  '\n\x1b[34mWorking: Please wait while your boilerplate is exported\x1b[0m';
exports.success = string => `\x1b[32mSuccess: Your boilerplate was successfully ${string}\x1b[0m\n`;
exports.setup = `\n\x1b[35mSetup: Setting up your cookup work environment\x1b[0m`;
exports.error = (string) =>
  `\x1b[31mERROR: ${string || 'Command not found'}\x1b[0m\n`;
