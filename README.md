# Nyati Installations — Curtain Rod Landing Page

Local static landing page for curtain rod installation services.

Preview:

1. Open `index.html` in a browser (double-click or use a local server).
2. The contact form shows a client-side confirmation; integrate with your backend as needed.

Files added:
- `index.html`
- `assets/css/styles.css`
- `assets/js/main.js`

Next steps (optional): commit files, add images, or wire the form to a backend.

Hooking the contact form to email (Formspree)

- Sign up at Formspree (https://formspree.io/) and create a new form to get an endpoint like `https://formspree.io/f/abcd1234`.
- Open `index.html` and replace the placeholder `data-endpoint` value on the form with your Formspree endpoint. Example:

	`<form id="contactForm" data-endpoint="https://formspree.io/f/abcd1234" method="post">`

Note: The form in this project is already configured to use the endpoint `https://formspree.io/f/xkoonqle`.

- The frontend already sends a JSON payload `{ name, contact, message }`. No server code required.
- To test the endpoint manually:

```bash
curl -X POST -H "Content-Type: application/json" \
	-d '{"name":"Test","contact":"+263771234567","message":"Hello"}' \
	https://formspree.io/f/abcd1234
```

Alternatives:
- EmailJS: client-side email sending with service and user keys (requires creating an account and embedding credentials). See https://www.emailjs.com/
- Host a small server (Node/Express) and send via SMTP (e.g., `nodemailer`) if you prefer full control.

Security note: Do not commit private API keys or service secrets into the repo. Use environment variables or a server-side relay when possible.
