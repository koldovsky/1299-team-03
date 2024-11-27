const form = document.querySelector('.contact-form__form');

async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    });
    form.reset();

  }
  
  form.addEventListener("submit", handleSubmit);
