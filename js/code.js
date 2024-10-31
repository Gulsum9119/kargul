
const openPopupButton = document.getElementById('openPopup');
const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('closePopup');

openPopupButton.addEventListener('click', () => {
  popup.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
  popup.style.display = 'none';
});
