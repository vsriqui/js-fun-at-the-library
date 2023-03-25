function createTitle(title) {
  var newTitle = `The ${title}`
  return newTitle
}
// console.log(createTitle("Running"))

// function buildMainCharacter(name1,age1,pronoun1){
//   var nameAgePronoun ={}
//   nameAgePronoun = {
//     name: name1,
//     age: age1,
//     pronoun: pronoun1
//   }
//   return  nameAgeProunoun
// }

function buildMainCharacter(name1,age1,pronoun1){
  var nameAgePronoun ={}
  nameAgePronoun.name = name1
  nameAgePronoun.age = age1
  nameAgePronoun.pronouns = pronoun1
  
  return nameAgePronoun 
}
// console.log(buildMainCharacter("victor", 37, "he"))

var reviews = [];
function saveReview(inputReview, outputReviews){
  if (inputReview !== outputReviews.find(finders => finders === inputReview)){
    return outputReviews.push(inputReview)
  
  }
}

// console.log(reviews)

// saveReview("Its great!", reviews)
// console.log(reviews)
// saveReview("Its great!", reviews)
// saveReview("Its ok!", reviews)
// saveReview("Its turrible!", reviews)
// saveReview("Its ok!", reviews)
// console.log(reviews)

// console.log(reviews.find(finders => finders === "Its ok!"))



function calculatePageCount(title){
  var newLength = (title.length*20)
  return newLength
}

// console.log(calculatePageCount(""))

function writeBook(title1, char1, genre1){
  var book={}
  book.title = title1
  book.mainCharacter = char1
  book.pageCount = calculatePageCount(title1)
  book.genre = genre1
  return book
}
// console.log(writeBook("A river of candy", "Beetlejuice", "horror/fantasy"))

function editBook(book){
  book.pageCount = book.pageCount*(3/4)
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}