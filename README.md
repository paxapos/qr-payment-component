# qr-payment-component
Shows QR for payments, or e GREEN CHECK when payment was done

uses https://davidshimjs.github.io/qrcodejs/ for generating QR code

```html
<qr-pay href="URL"/>
```
(show QR of passed URL)

```html
<qr-pay href="URL" done />
```
(show DONE CHECK MARK)


show a 100% with of container QR bassed on the URL passed as param in href

![image](https://user-images.githubusercontent.com/222193/151999442-b0cf2551-287a-4d91-a71a-e7f9a291c6d7.png)


then, ifproperty "done" is true, the QR is hidden and a check mark is showed

![image](https://user-images.githubusercontent.com/222193/151999669-aee1c7c0-ce62-4c15-964c-a93c38bfaa12.png)

