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

var bigPicture = document.querySelector('.big-picture').classList.remove('hidden');
var bigPictureLikes = document.querySelector('.likes-count').textContent=likesStat;
var bigPictureImg = document.querySelector('.big-picture__img');
bigPictureImg.querySelector('img').src=image.src;
var bigPictureComments = document.querySelector('.comments-count').textContent=commentsCount;
var socialCaption = document.querySelector('.social__caption').textContent=randomElement(descriptions);

var hiddenComments = document.querySelector('.social__comment-count', '.social__loadmore').classList.add('.visually-hidden');

