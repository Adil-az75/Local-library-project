function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
  
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => {
    
    const lastNameA = accountA.name.last.toLowerCase();
    const lastNameB = accountB.name.last.toLowerCase();
   
    if (lastNameA < lastNameB) {
        return -1; 
    } else if (lastNameA > lastNameB) {
        return 1;
    } else {
        return 0; 
    }
});
   
}




function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function getAccountFullNames(accounts) {
  return accounts.map(account => `${account.name.first} ${account.name.last}`);
  }

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    
    const borrowsByAccount = book.borrows.filter(borrow => borrow.id === account.id);
    
    return acc + borrowsByAccount.length;
}, 0);
}



function getBooksPossessedByAccount(account, books, authors) {
  const checkedOutBooks = books.filter(book => {
    
    const firstBorrow = book.borrows[0];
    return !firstBorrow.returned && firstBorrow.id === account.id;
});


return checkedOutBooks.map(book => {
    
    const author = authors.find(author => author.id === book.authorId);
   
    return {
        ...book,
        author
    };
});
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
