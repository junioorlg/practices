'use strict';

describe('appTests', function () {


  var booksData = readJSON('src/app/dataset/books.json');
  var reviewsData = readJSON('src/app/dataset/reviews.json');
  var bookIdx;

  it('parseBookData() should return '+booksData.length+' books', function() {
    var parsedBooks = parseBooksData(booksData, reviewsData);
    expect(parsedBooks.length).toEqual(booksData.length);
  });



  it('displayBooks() should display '+booksData.length+' book nodes', function() {
    //given
    var parentEl = document.createElement('div');

    //when
    displayBooks(parentEl, parseBooksData(booksData, reviewsData));
    var bookNodes = parentEl.querySelectorAll("ol > li");

    // then
    expect(bookNodes.length).toEqual(booksData.length);
  });

  for (bookIdx=0; bookIdx < booksData.length; bookIdx++) {
    var bookData = booksData[bookIdx];
    var reviews = _filterReviews(bookData);
    testBookWithReviewsObject(bookIdx,bookData, reviews);
    testBookNode(bookIdx, bookData, reviews);
  }

  function testBookWithReviewsObject(bookIdx, bookData, reviews) {
    describe("BookWithReview object for book "+booksData[bookIdx].id, function() {

      it('should contain correct book data', function() {
        var parsedBooks = parseBooksData(booksData, reviewsData);
        expect(parsedBooks[bookIdx]).toBeDefined();
        expect(parsedBooks[bookIdx].id).toEqual(bookData.id);
        expect(parsedBooks[bookIdx].title).toEqual(bookData.title);
      });
      it('should contain correct number of reviews', function() {
        var parsedBooks = parseBooksData(booksData, reviewsData);
        expect(parsedBooks[bookIdx]).toBeDefined();
        expect(parsedBooks[bookIdx].reviews.length).toEqual(reviews.length);
      })
    });
  }

  function testBookNode(bookIdx, bookData, reviews) {
    describe("DOM node for book "+booksData[bookIdx].id, function() {
      var parentEl = document.createElement('div');

      displayBooks(parentEl, parseBooksData(booksData, reviewsData));

      var bookNodes = parentEl.querySelectorAll("ol > li");

      it('should contain correct title', function() {
        expect(bookNodes[bookIdx]).toBeDefined();
        expect(bookNodes[bookIdx].innerText).toContain(bookData.title);
      });
      it('should contain correct number of reviews', function() {
        expect(bookNodes[bookIdx]).toBeDefined();
        var reviewsNodes = bookNodes[bookIdx].querySelectorAll("ul > li");
        expect(reviewsNodes.length).toEqual(reviews.length);
      });
      it('should contain correct review data', function() {
        expect(bookNodes[bookIdx]).toBeDefined();
        var reviewsNodes = bookNodes[bookIdx].querySelectorAll("ul > li");
        for (var i=0; i<reviews.length; i++) {
          expect(reviewsNodes[i]).toBeDefined();
          expect(reviewsNodes[i].innerText).toContain(reviews[i].content+' by '+reviews[i].author);
        }
      });
    });
  }
  function _filterReviews(book) {
    var result = [];
    for (var i=0; i<reviewsData.length; i++) {
      if (reviewsData[i].bookId === book.id) {
        result.push(reviewsData[i]);
      }
    }
    return result;
  }



});
