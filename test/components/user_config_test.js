import { renderComponent, expect } from '../test_helper';
import UserConfig from '../../src/components/user_config';

describe('UserConfig', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(UserConfig);
    component.find('input[type=text]').simulate('change', 'baltazar');
  });

  it('shows that username in inputarea', () => {
    expect(component.find('input[type=text]')).to.have.value('baltazar');
  });

})