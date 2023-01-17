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
const elementsCard = document.querySelector('.elements');
const cardTemplate = document.querySelector('.card-template').content;
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
   },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

initialCards.forEach(function(element){
    const cardElement = cardTemplate.cloneNode(true);
  
    cardElement.querySelector('.elements__card-image').src = element.link;
    cardElement.querySelector('.elements__label-text').textContent = element.name;
    cardElement.querySelector('.elements__like-shell').addEventListener('click', function (evt) {
      const likeButton = evt.target;
      likeButton.classList.toggle('elements__like-shell_active'); 
    })
    elementsCard.append(cardElement)
});

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
