import { newE2EPage } from '@stencil/core/testing';

describe('qr-pay', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<qr-pay></qr-pay>');

    const element = await page.find('qr-pay');
    expect(element).toHaveClass('hydrated');
  });
});
