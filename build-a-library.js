// https://www.codecademy.com/courses/learn-intermediate-javascript/projects/build-a-library

class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOff = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOff(){
    return this._isCheckedOff
  }
  getAverageRating() {
    const sumRatings = this._ratings.reduce(
  (previousValue, currentValue) => previousValue + currentValue)    
  return sumRatings / this._ratings.length;
  }
  toggleCheckOutStatus() {
    this._isCheckedOff = !this._isCheckedOff;
  }
  addRating(x) {
    this._ratings.push(x)
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages  = pages;
  } 
}
class Movie extends Media {
  constructor(title, director, runTime ) {
    super(title);
    this._director = director;
    this._runTime  = runTime ;
  } 
}
class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs  = songs;
  } 
}

const bible = new Book('Bible', 'someone', 1000);
bible.toggleCheckOutStatus();
console.log(bible.isCheckedOff);
bible.addRating(3);
bible.addRating(5);
bible.addRating(10);
console.log(bible.getAverageRating())

const speed = new Movie ('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOff);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating())
