var countPhotos = 25;
var photos = {
  url: 'photos/1.jpg',
  likes: Math.floor(Math.random() * (200 - 15 + 1)) + 15,
  comments: ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'],
  description: ['Тестим новую камеру!', 'Затусили с друзьями на море', 'Как же круто тут кормят', 'Отдыхаем...', 'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......', 'Вот это тачка!'],
};

var fragment = document.createDocumentFragment();

var createPicture = function() {
    for (var i = 0; i < countPhotos; i++) {
    var picture = makeElement('img', 'picture__img');
    picture.src = photos.url;
    createCard.appendChild(picture);
    var comments = makeElement('picture__stat--comments', photos.comments);
    createCard.appendChild(comments);
    return createPicture;
  }
};


var picturesList = document.querySelector('.picture__img');
var photoItem = createCard();