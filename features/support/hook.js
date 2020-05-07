const { BeforeAll, After, AfterAll, Status, scenarioResult } = require('cucumber');
const { config, driver } = require('../../helpers/capabilities');

BeforeAll({timeout: 60000}, async () => {
  await driver.init(config);
});

After(async function(scenarioResult) {
	if(scenarioResult.result.status === 'failed'){
    const self = this;
    // const scenario = scenarioResult.pickle.name;
    // const imageFileName = __dirname+'/'+scenarioResult.pickle.name+'.png';
    return driver.takeScreenshot().then(function(screenShot) {
      // screenShot is a base-64 encoded PNG
      self.attach(screenShot, 'image/png');
    });
	}
});

AfterAll({timeout : 60000}, async() => {
  await driver.quit();
});

module.exports = {
  BeforeAll, After, AfterAll
};