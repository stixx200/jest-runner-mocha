const runJest = require('./runJest');

it('Works when it has only passing tests', () => {
  return expect(runJest('passing')).resolves.toMatchSnapshot();
});

it('Works when it has only passing tests and --coverage', () => {
  return expect(runJest('passing', ['--coverage'])).resolves.toMatchSnapshot();
});

it('Works when it has only passing tests and --coverage with v8', () => {
  return expect(
    runJest('passing', ['--coverage', '--coverageProvider', 'v8']),
  ).resolves.toMatchSnapshot();
});
