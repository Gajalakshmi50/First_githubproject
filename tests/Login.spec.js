// @ts-check

const{test,expect} = require('../Fixtures/Fixtures');
const EnvUtils = require('../Utils/envUtils');

test('Login with Valid details', async ({loginPage}) => {
  const username = EnvUtils.get('USER');
  const password = EnvUtils.get('PASS')
  await loginPage.login(username, password);
});


