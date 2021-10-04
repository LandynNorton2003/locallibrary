function getLength(input){
  return input.length
}

function shorten(input){
  let array = array.sort((a, b) => b.count - a.count).slice(0,5)
  return array
}
//Instead of just doing books.length I decided to use reduce so I could fit it in here somewhere
  function getTotalBooksCount(books) {
    let array = books.reduce((arr, book)=> {
        arr.push(book.title)
        return(arr)
    }, [])
    return array.length
  }
function getTotalAccountsCount(accounts) {
  return getLength(accounts)
}

function getBooksBorrowedCount(books) {
  let holder = 0 
  
  books.forEach (book => {
    if(book.borrows[0].returned == false) holder = holder + 1
  })
  return holder
}

  function getMostCommonGenres(books) {
    const object = {}
    let holder = []
    books.forEach(book => {
      if(object[book.genre]) {
          object[book.genre]++
       } else {
          object[book.genre] = 1
       }
    })
  const objectKeys = Object.keys(object)  
  let counter = -1
  for (let key in object){
    counter++
    holder.push({name: objectKeys[counter], count: object[key]})
  }
  holder.sort((holdA, holdB) => (holdA.count < holdB.count ? 1 : -1))
  
  return holder.splice(0,5)
}
  function getMostPopularBooks(books) {
    let object = {}
    let holder = []
    books.forEach(book => {
      if(object[book.title]) {
          object[book.title]++
       } else {
          object[book.title] = book.borrows.length
       }
    })
  const objectKeys = Object.keys(object)  
  let counter = -1
  for (let key in object){
    counter++
    holder.push({name: objectKeys[counter], count: object[key]})
  }
  holder.sort((holdA, holdB) => (holdA.count < holdB.count ? 1 : -1))
  
  return holder.splice(0, 5)
}

  function getMostPopularAuthors(books, authors) {
    let holder = []
  
    authors.forEach((author) => {
     let authorHolder = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
     }
  
     books.forEach((book) => {
      if (book.authorId === author.id) {
       authorHolder.count += book.borrows.length;
      }
     })
      holder.push(authorHolder);
    })
  holder.sort((holdA, holdB) => (holdA.count < holdB.count ? 1 : -1))
  holder.length = 5
  return holder
   }


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
