const wd = require('wd');
const env = require('dotenv').config();

const config = {
  platformName: process.env.PLATFORM_NAME,
  platformVersion: process.env.PLATFORM_VERSION,
  deviceName: process.env.DEVICE_NAME,
  automationName: 'UiAutomator2',
  noReset: false,
  app: __dirname+'/../apps/'+process.env.APP,
};
const driver = wd.promiseChainRemote(process.env.HOST, process.env.PORT);

module.exports = {
    driver, config
  };