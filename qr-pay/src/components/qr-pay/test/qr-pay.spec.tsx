import { newSpecPage } from '@stencil/core/testing';
import { QrPay } from '../qr-pay';

describe('qr-pay', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [QrPay],
      html: `<qr-pay></qr-pay>`,
    });
    expect(page.root).toEqualHtml(`
      <qr-pay>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </qr-pay>
    `);
  });
});
