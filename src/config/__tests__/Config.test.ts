import {Config} from '../index';

describe('Config', () => {
  it('should render correctly', async () => {
    expect(Config.SENDBIRD_APPLICATION_ID).toBeTruthy();
  });
});
