import React from 'react';
import renderer from 'react-test-renderer';
import CommitComponent from '../CommitComponent';

test('renders correctly', () => {
  const history = {
    hash: '1',
    message: 'created test',
    name: 'Kartheek',
  };
  const tree = renderer.create(<CommitComponent history={history} />).toJSON();
  expect(tree).toMatchSnapshot();
});
