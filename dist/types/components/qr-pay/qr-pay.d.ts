export declare class QrPay {
  href: string;
  done: boolean;
  background: string;
  color: string;
  colorSuccess: string;
  width: number;
  ecl: "H" | "M";
  elSvgCheck: HTMLOrSVGElement;
  options: {
    content: string;
    width: string | number;
    height: string | number;
    color: string;
    background: string;
    ecl: string;
  };
  render(): any;
}
