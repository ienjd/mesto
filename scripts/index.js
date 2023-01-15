const editButton = document.querySelector('.profile__edit-button-shell');
const aboutPopup = document.querySelector('.popup');
const popupClosed = document.querySelector('.popup__close-icon');
const addCardButton = document.querySelector('.profile__add-button-shell');
const addCardPopup = document.querySelector('.popup-add-card');
const addCardPopupClosed = document.querySelector('.popup-add-card__close-icon');
const formElement = document.querySelector('.popup__input');
const nameUser = formElement.querySelector('#type-name');
const professionUser = formElement.querySelector('#type-profession');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');


function openForm() {
    nameUser.value = profileName.textContent;
    professionUser.value = profileProfession.textContent;
    aboutPopup.classList.add('popup_opened');
};
editButton.addEventListener('click',openForm);

function closeForm () {
    aboutPopup.classList.remove('popup_opened');
};
popupClosed.addEventListener('click',closeForm);

function cardOpenForm() {
    nameUser.value = profileName.textContent;
    professionUser.value = profileProfession.textContent;
    addCardPopup.classList.add('popup-add-card_opened');
};
addCardButton.addEventListener('click',cardOpenForm);

function cardCloseForm () {
    addCardPopup.classList.remove('popup-add-card_opened');
};
addCardPopupClosed.addEventListener('click',cardCloseForm);

function formSubmit (evt) {
    evt.preventDefault();

    profileName.textContent = nameUser.value;
    profileProfession.textContent = professionUser.value;
    closeForm();
};
formElement.addEventListener('submit', formSubmit);