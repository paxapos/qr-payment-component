# qr-pay
Generates a QR using href property and shows a checkmark if the done prop is present

```html
<qr-pay href="URL"/>
```
(show QR of passed URL)

```html
<qr-pay href="URL" done />
```
(show DONE CHECK MARK)


How dows it works?

'''html
<script type="module">
   // import stencil js component
   import { defineCustomElements } from "https://cdn.jsdelivr.net/npm/qr-pay@0.0.4/dist/loader/index.es2017.js";
   defineCustomElements();
</script>

<!-- YOUR HTML STUFF -->

<div class="qr-container">
			<qr-pay id="qr" href="QR-PAY IS AWSOME" width=180></qr-pay>
		</div>
		<button onclick="done()">DONE</button>
		<button onclick="undone()">UNDONE</button>
</div>

<script>
  // with JS change "done" property for showing the checkmark
  const qr = document.getElementById("qr");
  const done = () => qr.setAttribute("done", true);
  const undone = () => qr.setAttribute("done", false);
</script>
'''



