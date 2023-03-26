

function createLibrary(aLibrary){
  var object = {};
  object.name = aLibrary;
  object.shelves ={}; 
  object.shelves.fantasy = [];
  object.shelves.fiction = [];
  object.shelves.nonFiction = [];
  return object;
  }

//  console.log(createLibrary("Denver Public Library"))

 function addBook(aLibrary, bookName) {
  aLibrary["shelves"][bookName["genre"]].push(bookName);
  return aLibrary;
}

// function addbook(DPL,Dracula) {
//   DPL["shelves"][Dracula["genre"]].push(Dracula)
//   return DPL
// }

// addBook(denverLibrary, dracula);
// console.log(denverLibrary)
// console.log(denverLibrary.shelves.fantasy)
////////////////////
// function checkoutBook(aLibrary, bookName, theGenre){
//   aLibrary["shelves"][theGenre].splice(theGenre.indexOf(bookName), 1)
//   return `You have now checked out ${bookName} from the ${aLibrary.name}.`
// }
///////////////////////
// console.log(checkoutBook(denverLibrary, "Dracula", "fantasy"))
// console.log("...........")

// for (i=0;i<denverLibrary["shelves"]["fantasy"].length;i++){
// console.log(denverLibrary["shelves"]["fantasy"][i].title)
//   if (denverLibrary["shelves"]["fantasy"][i].title === "Dracula") {
//     console.log("shabob")
// } else {
//   console.log("squeek")
// }
// }
// function checkoutBook(aLibrary, bookName, theGenre){
//   for (i=0;i<aLibrary["shelves"][theGenre].length;i++){
//     if (aLibrary["shelves"][theGenre][i].title === bookName) {
//       aLibrary["shelves"][theGenre].splice(theGenre.indexOf(bookName), 1)
//     return `You have now checked out ${bookName} from the ${aLibrary.name}.`
//     break
//   } else {
//     console.log(`Sorry, there are currently no copies of ${bookName} available at the ${aLibrary.name}.`)
//   }
//   }
//   }
  // console.log(checkoutBook(denverLibrary, "Dracula", "fantasy"))
  // function checkoutBook(aLibrary, bookName, theGenre){
    
  //   for (i=0;i<aLibrary["shelves"][theGenre].length;i++){
  //     if (aLibrary["shelves"][theGenre][i].title === bookName) {
  //       aLibrary["shelves"][theGenre].splice(i, 1);
  //       x = `You have now checked out ${bookName} from the ${aLibrary.name}.`;
  //     } else {
  //       x = `Sorry, there are currently no copies of ${bookName} available at the ${aLibrary.name}.`;
  //     }
    
  //   }
  //   return x;
  // }

  function checkoutBook(aLibrary, bookName, theGenre){
    var bookThere = false;
    for (var i=0;i<aLibrary["shelves"][theGenre].length;i++){
      if (aLibrary["shelves"][theGenre][i].title === bookName) {
        aLibrary["shelves"][theGenre].splice(i, 1);
        bookThere = true;
      } 
      }
    if (bookThere===true){
      return `You have now checked out ${bookName} from the ${aLibrary.name}.`;
    } else {
      return `Sorry, there are currently no copies of ${bookName} available at the ${aLibrary.name}.`;
    }
  }
  


  function takeStock(aLibrary, theGenre) {
    var booksNum = 0;
    if (theGenre) {
      booksNum = aLibrary.shelves[theGenre].length;
      return `There are a total of ${booksNum} ${theGenre} books at the ${aLibrary.name}.`;
    } else {        
      booksNum=aLibrary.shelves.fantasy.length+aLibrary.shelves.nonFiction.length+aLibrary.shelves.fiction.length;
      return `There are a total of ${booksNum} books at the ${aLibrary.name}.`;
    }
  }
  
module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};