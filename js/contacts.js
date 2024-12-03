function init() {
    import("./header.js");
    import("./global.shopping-cart.js");
    import("./contacts.contacts-form.js");
    import("./contacts.term-conditions.js");
  }
  
  const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
  let loadedPartialsCount = 0;
  
  document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
  });