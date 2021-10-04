function findAuthorById(authors, id) {
  for (let key in authors){
    if (id == authors[key].id){
      return authors[key]
    }
  }
}

function findBookById(books, id) {
  for (let key in books){
    if (id == books[key].id){
      return books[key]
    }
  }
}

function partitionBooksByBorrowedStatus(books) {
  
    let available = []
    let unavailable = []
    let status = []
  
    books.forEach((books) => {
     const checkedOut = books.borrows[0].returned === false;
     if (checkedOut) { 
       unavailable.push(books)
     } else { 
       available.push(books)
     }
   })
  
   status.push(unavailable)
   status.push(available)
  
   return status
  
  }
  
function getBorrowersForBook(book, accounts) {
  let holder = []
  let borrowedBooks = book.borrows
  borrowedBooks.forEach(borrow => {
    let account = accounts.find(acc => acc.id == borrow.id)
    let accountOne = account
    accountOne['returned'] = borrow.returned
    holder.push(accountOne)
  })
  return holder.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
