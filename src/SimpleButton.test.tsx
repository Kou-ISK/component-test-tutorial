import { render } from '@testing-library/react';
import { SimpleButton } from './SimpleButton';

test('描画されてすぐはONと表示されている', () => {
  const view = render(<SimpleButton />);
  expect(view.container).toMatchSnapshot();
});
