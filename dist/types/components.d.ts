/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface QrPay {
        "done": boolean;
        "href": string;
    }
}
declare global {
    interface HTMLQrPayElement extends Components.QrPay, HTMLStencilElement {
    }
    var HTMLQrPayElement: {
        prototype: HTMLQrPayElement;
        new (): HTMLQrPayElement;
    };
    interface HTMLElementTagNameMap {
        "qr-pay": HTMLQrPayElement;
    }
}
declare namespace LocalJSX {
    interface QrPay {
        "done"?: boolean;
        "href"?: string;
    }
    interface IntrinsicElements {
        "qr-pay": QrPay;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "qr-pay": LocalJSX.QrPay & JSXBase.HTMLAttributes<HTMLQrPayElement>;
        }
    }
}