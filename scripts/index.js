const editButton = document.querySelector('.profile__edit-button');
const aboutPopup = document.querySelector('.popup_closed');
const popupClosed = document.querySelector('.popup__close-icon');

editButton.addEventListener('click', (event) => {
    event.preventDefault();
    aboutPopup.classList.add('popup_opened');
});

popupClosed.addEventListener('click', (event) => {
    event.preventDefault();
    aboutPopup.classList.remove('popup_opened');
});