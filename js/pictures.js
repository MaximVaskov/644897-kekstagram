var comments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
var descriptions= ['Тестим новую камеру!', 'Затусили с друзьями на море', 'Как же круто тут кормят', 'Отдыхаем...', 'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......', 'Вот это тачка!'];

var createCard = function (index) {
    return {
    url: 'photos/'+index+'.jpg',
    likes: Math.floor(Math.random() * (200 - 15 + 1)) + 15,
    comments: getRandomElements(comments),
    description: randomElement(descriptions),
    };
};

var randomElement = function (items) {
var index = Math.floor(Math.random()*items.length);
    return items[index];
};

var getRandomElements = function (items) {
    var randomNumber = Math.floor((Math.random()<.5)+1);
    var randomItems= [];
    for (var i = 0; i < randomNumber; i++) {
    var rItem = items[Math.floor(Math.random()*items.length)];
    randomItems.push(rItem);
    }
    return randomItems;
};

var generateComment = function () {
    var randomComments = getRandomElements(comments);
    return randomComments.join(' ');
}

var createRandomComments = function () {
    var createRComments = Math.floor(Math.random()*4)+1
    var commentCreate =[];
    for (var i=1; i<=createRComments; i++) {
      commentCreate.push(generateComment());
    }
    return commentCreate;
}
console.log(createRandomComments());

var countPhotos = 26;
var photos = [];

var fragment = document.createDocumentFragment();

var picturesList = document.querySelector('.picture__img');
var photoItem = createCard();

var pictureTemplate = document.querySelector('#picture');
for (var i = 0; i < countPhotos; i++) {
    photos.push(createCard(i));
};

for (var i=1; i < countPhotos; i++) {
    var newElement = pictureTemplate.content.querySelector('.picture__link').cloneNode(true);
    var image = newElement.querySelector('img');
    image.src = photos[i].url;
    var commentsCount= newElement.querySelector('.picture__stat--comments').textContent = photos[i].comments.length;
    likesStat = newElement.querySelector('.picture__stat--likes').textContent =photos[i].likes;
    fragment.appendChild(newElement);
};

var pictures = document.querySelector('.pictures');
pictures.appendChild(fragment);

//Большое изображение:


var bigPictureLikes = document.querySelector('.likes-count').textContent=likesStat;
var bigPictureImg = document.querySelector('.big-picture__img');
bigPictureImg.querySelector('img').src=image.src;

var bigPictureComments = document.querySelector('.comments-count').textContent=commentsCount;

var createCommentElement = function(comment) {
    var index = Math.floor(Math.random()*6)+1
    var createElementLi = document.createElement('li');
    createElementLi.classList.add('social__comment');
    var socialImg = document.createElement('img');
    socialImg.classList.add('social__picture');
    socialImg.src= 'img/avatar-'+index+'.svg';
    var commentP = document.createElement('p');
    commentP.classList.add('social__text');
    commentP.textContent = comment;
}
console.log (createCommentElement());
var createCommentsMassive = function (comments) {
    var documentFragment = document.createDocumentFragment();
    for (var i=0; i<= comments.length; i++){
    documentFragment.appendChild(createCommentElement(comments[i]));
    }
    return documentFragment;
}
var socialCaption = document.querySelector('.social__caption').textContent=randomElement(descriptions);
document.querySelector('.social__text').textContent=randomElement(comments);
var socialComments = document.querySelector('.social__comment');

var hiddenComments = document.querySelector('.social__comment-count', '.social__loadmore').classList.add('.visually-hidden');

//Открытие/Закрытие


var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var bigPicture = document.querySelector('.big-picture');
var smallPicture = document.querySelector('.picture__img');
var pictureClose = bigPicture.querySelector('.big-picture__cancel');

var onPopupEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function() {
  bigPicture.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function() {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

smallPicture.addEventListener('click', function() {
  openPopup();
});

smallPicture.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

pictureClose.addEventListener('click', function() {
  closePopup();
});

pictureClose.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

//Загрузка фотографий
var downloadImageLabel = document.querySelector('.img-upload__label');
var imgUploadOverlay = document.querySelector('.img-upload__overlay');
//imgUploadOverlay.classList.remove('hidden');
