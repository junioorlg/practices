'use strict';

var booksData = JSON.parse(data),
	/*reviewsData = JSON.parse(review),*/
	book = [
	  {
	    "id" : 101,
	    "title" : "Some book title"
	  },
	  {
	    "id" : 102,
	    "title" : "Another book title"
	  },
	  {
	    "id" : 103,
	    "title" : "Best book title ever"
	  }
	],
	review = [
	  {
	    "bookId" : 101,
	    "author" : "John",
	    "content" : "Great book!"
	  },
	  {
	    "bookId" : 101,
	    "author" : "Alice",
	    "content" : "Worth reading."
	  },
	  {
	    "bookId" : 102,
	    "author" : "Joe",
	    "content" : "Waste of time :("
	  }
	],
	arrayList = [], 
	obj_c_processed = [];

for (var b in book) {
    var obj = {id: book[b].id, title: book[b].title};
    
    for (var r in review) {
        if (book[b].id == review[r].bookId) {
            obj.review = {author: review[r].author, content: review[r].content}
        }
    }
    arrayList.push(obj);
    console.log(obj);
}
/*for (var r in review){
    if (typeof obj_c_processed[review[r].id] == 'undefined') {
        arrayList.push({id: review[r].id, author: review[r].author, content: review[r].content, content: 'no', circle: review[r].circle});
    }
}*/

console.log(booksData);


var BookWithReviews = function(id, title) {
  this.id = id;
  this.title = title;
  this.reviews = [];

  this.addReview = function(author, content) {
    this.reviews.push({ author: author, content: content });
  }
};

/**
 * Parses passed books and reviews arrays to create an array of BookWithReviews object. Each row from books input array
 * should have a corresponding row in resulting array. For example, for following input data:
 *    books = [ { "id" : 101, "title" : "Some book title" } ]
 *    reviews = [ { "bookId" : 101, "author" : "John", "content" : "Great book!" } ];
 * It should return following result:
 *    result = [ { id: 101, title: "Some book title", reviews : [ { author: "John", content: "Great book!" }] } ];
 *
 * @param books - an array of input books, see 'src/app/dataset/books.json' for sample data.
 * @param reviews - an array of input reviews, see 'src/app/dataset/reviews.json' for sample data.
 * @returns {Array} - an array of BookWithReviews objects
 */
function parseBooksData(books, reviews) {
  return [];  // TODO: Implement
}

/**
 * Displays data from passed `books` array. For example, if books argument would have following value:
 *    books = [ { id: 101, title: "Some book title", reviews : [ { author: "John", content: "Great book!" }] } ];
 * then, following structure should be created under the parentNode:
 * <ol>
 *    <li>
 *      <span>Some book title</span>
 *      <ul>
 *        <li>Great book! by John</li>
 *      </ul>
 *    </li>
 * </ol>
 * @param parentNode - parent node for all books
 * @param books - an array of BookWithReviews objects.
 */
function displayBooks(parentNode, books) {
  // TODO: Implement
}
