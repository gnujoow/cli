const {
  runCLI,
  setupIntegrationServer,
  teardownIntegrationServer
} = require('../../utils')
const deleteDeploy = require('../../fixtures/deleteDeploy.json')

describe('site delete-deploy', () => {
  beforeAll(() => setupIntegrationServer(deleteDeploy))
  afterAll(() => teardownIntegrationServer())

  test('requires uuid', async () => {
    const out = await runCLI({
      args: 'site delete-deploy --site=test',
      testForError: true
    })
    expect(out).toMatchSnapshot()
  })

  test('deletes deploy', async () => {
    const out = await runCLI({
      args: 'site delete-deploy --site=test --uuid=1',
      testForError: true
    })
    expect(out).toMatchSnapshot()
  })
})
