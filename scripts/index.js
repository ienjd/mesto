const editButton = document.querySelector('.profile__edit-button-shell');
const aboutPopup = document.querySelector('.popup');
const popupClosed = document.querySelector('.popup__close-icon');
const addCardButton = document.querySelector('.profile__add-button-shell');
const addCardPopup = document.querySelector('.popup-add-card');
const addCardPopupClosed = document.querySelector('.popup-add-card__close-icon');
const formElement = document.querySelector('.popup__input');
const nameUser = formElement.querySelector('.popup__input-text_type_name');
const professionUser = formElement.querySelector('.popup__input-text_type_profession');
const addCardElement = document.querySelector('.popup-add-card__input');
const placeTitle = document.querySelector('.popup__input-text_type_location');
const placeImage = document.querySelector('.popup__input-text_type_link');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const elementsCard = document.querySelector('.elements');
const cardElement = document.querySelector('.elements__card');

const cardText = document.querySelector('.elements__label-text');
const cardTemplate = document.querySelector('.card-template').content;
const imagePopup = document.querySelector('.popup-image');
const image = imagePopup.querySelector('.fullscreen__image');
const labelImage = imagePopup.querySelector('.fullscreen__label');
const closeImagePopup = imagePopup.querySelector('.fullscreen__close-icon');
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

  function openImagePopup(cardImage) {
      
    image.src = cardImage.src;
    image.alt = cardImage.alt;
    labelImage.textContent = cardText.textContent;
    imagePopup.classList.add('.popup-image_opened');
  };   
    const cardImage = elementsCard.querySelector('elements__card-image');
    cardImage.addEventListener('click', () => {
    openImagePopup(cardImage);
 });

  function deleteCard(event) {
    event.target.closest('.elements__card').remove();
  };

  function likeCard(event) {
    event.target.classList.toggle('elements__like-shell_active');
  };

  function sortCard() {
    initialCards.forEach(function(element){
      const cardElement = cardTemplate.cloneNode(true);
    
      cardElement.querySelector('.elements__card-image').src = element.link;
      cardElement.querySelector('.elements__label-text').textContent = element.name;
      cardElement.querySelector('.elements__like-shell').addEventListener('click', function (evt) {
        const likeButton = evt.target;
        likeButton.classList.toggle('elements__like-shell_active'); 
      });
      cardElement.querySelector('.elements__trash-shell').addEventListener('click', deleteCard);
    
      elementsCard.append(cardElement);
  });
      
};
sortCard();

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

function addCardEventListeners (card) {
	const deleteButton = card.querySelector('.elements__trash-shell');
	deleteButton.addEventListener('click', deleteCard);

  const likeButton = card.querySelector('.elements__like-shell');
  likeButton.addEventListener('click', likeCard);
};

function createCard(name, link) {
	const card = cardTemplate.cloneNode(true);
	const cardText = card.querySelector('.elements__label-text');
	cardText.textContent = name;
  const cardImage = card.querySelector('.elements__card-image');
	cardImage.src = link;
  addCardEventListeners(card);
  cardCloseForm();
	return card;
}

function addCard(card) {
	elementsCard.prepend(card);
}

function submitForm(event) {
	event.preventDefault();

	const newCard = createCard(placeTitle.value, placeImage.value);
	addCard(newCard);
}

addCardElement.addEventListener('submit', submitForm);

