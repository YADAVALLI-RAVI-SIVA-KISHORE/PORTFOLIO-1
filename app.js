const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = contactForm.name.value;
  const email = contactForm.email.value;
  const message = contactForm.message.value;

  db.collection('contacts').add({
    name,
    email,
    message,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    alert('Message sent successfully!');
    contactForm.reset();
  }).catch(error => {
    alert('Error sending message: ' + error.message);
  });
});

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});
