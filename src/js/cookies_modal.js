
const cookieModal = document.getElementById('cookieModal');
  const acceptCookiesBtn = document.getElementById('acceptCookies');
  const declineCookiesBtn = document.getElementById('declineCookies');

  if (!localStorage.getItem('cookiesAccepted')) {
    cookieModal.style.display = 'flex';
  } else {
    cookieModal.style.display = 'none';
  }

  acceptCookiesBtn.addEventListener('click', function () {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieModal.style.display = 'none';
  });

  declineCookiesBtn.addEventListener('click', function () {
    cookieModal.style.display = 'none';
  });