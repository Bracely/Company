document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');
  const endpoint = form && form.dataset ? form.dataset.endpoint : '';

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const payload = {
      name: data.get('name') || '',
      contact: data.get('contact') || '',
      message: data.get('message') || ''
    };

    // If endpoint is not configured, show helpful message and stop.
    if (!endpoint || endpoint.includes('your-id')) {
      msg.textContent = 'Form not configured. Add your Formspree endpoint in the form `data-endpoint` attribute (see README).';
      return;
    }

    try {
      msg.textContent = 'Sending...';
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        msg.textContent = 'Thanks — your request was sent. We will contact you soon.';
        form.reset();
      } else {
        const body = await res.json().catch(() => null);
        msg.textContent = body && body.error ? body.error : 'Unable to send. Try again later.';
      }
    } catch (err) {
      console.error(err);
      msg.textContent = 'Network error. Try again later.';
    } finally {
      setTimeout(() => (msg.textContent = ''), 4000);
    }
  });
});
