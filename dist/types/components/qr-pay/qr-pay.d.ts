export declare class QrPay {
  href: string;
  done: boolean;
  background: string;
  color: string;
  width: number;
  options: {
    content: string;
    width: string | number;
    height: string | number;
    color: string;
    background: string;
    ecl: string;
  };
  componentWillRender(): Promise<void>;
  render(): any;
}
