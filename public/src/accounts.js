function findAccountById(accounts, id) {
  for (let index in accounts){
    if (accounts[index].id == id){
      return accounts[index]
    }
  }
}

function sortAccountsByLastName(accounts) {
  const sortedAccs = accounts.sort((accA, accB) => accA.name.last > accB.name.last ? 1 : -1 )
  return sortedAccs
}

function getTotalNumberOfBorrows(account, books) {
  let accumulator = 0
  for (let index in books){
    for (let jIndex in books[index].borrows){
      if (account.id == books[index].borrows[jIndex].id){
        accumulator = accumulator + 1
      }
    }
  }
  return accumulator
}

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter((book) => book.borrows.some(
     acc => acc.id === account.id && acc.returned === false))
      .map(book => { let author = authors.find(author => author.id === book.authorId)
  book.author = author
  
  return book }) }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
