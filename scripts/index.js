const editButton = document.querySelector('.profile__edit-button');
const aboutPopup = document.querySelector('.popup_closed');
const popupClosed = document.querySelector('.popup__close-icon');

function openForm() {
    aboutPopup.classList.add('popup_opened');
};

editButton.addEventListener('click',openForm);

function closeForm () {
    aboutPopup.classList.remove('popup_opened');
};

popupClosed.addEventListener('click',closeForm);

const formElement = document.querySelector('.popup__input');
const nameUser = formElement.querySelector('.popup__input-text_type_name');
const professionUser = formElement.querySelector('.popup__input-text_type_profession');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const saveChangesButton = document.querySelector('.popup__submit');

function formSubmit (evt) {
    evt.preventDefault();

    profileName.textContent = nameUser.value;
    profileProfession.textContent = professionUser.value;
    closeForm();
};

formElement.addEventListener('submit', formSubmit);