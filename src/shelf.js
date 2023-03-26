function shelfBook(book, shelfName){
  if (shelfName.length < 3) {
    shelfName.unshift(book)
  }
  return shelfName
}

function unshelfBook(book, shelfName){
  for (i=0; i<shelfName.length; i++){
   if (shelfName[i].title === book){
      shelfName.splice(i,1)
   }
  }
  
  
  return shelfName
}

function listTitles(shelfName){
  var t =[]
  for (i=0; i<shelfName.length; i++){
    t.push(shelfName[i].title)
  } 
  
  return t.join(", ")
}

// function searchShelf (shelfName, titleName) {
  
//   for(var i=0; i<shelfName.length; i++) {
//     if(shelfName[i].title === titleName) {
//       there = true
//       break
//     } else {
//       there = false
//     }
//   }
//   return there
// }

function searchShelf (shelfName, titleName) {
  for(var i=0; i<shelfName.length; i++) {
    if(shelfName[i].title === titleName) {
      return true
    } 
  }
  return false
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};