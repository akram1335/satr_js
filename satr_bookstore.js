const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let book1 = [1, 'Start with why', 'Simon Sinek', 80.0, 13];
let book2 = [2, 'But how do it know', 'J. Clark Scott', 59.9, 22];
let book3 = [3, 'Clean Code', 'Robert Cecil Martin', 50.0, 5];
let book4 = [4, 'Zero to One', 'Peter Thiel', 45.0, 12];
let book5 = [5, 'You don\'t know JS', 'Kyle Simpson', 39.9, 9];
let Bookstore = [book1, book2, book3, book4, book5];

function addbook(bookTitle, author, price, quantity) {
    let new_book = [Bookstore.length, bookTitle, author, price, quantity];
    Bookstore.push(new_book);
    console.log('book added \n ' + new_book);
}

function findbook(word) {
    for (book of Bookstore) {
        if (book[0] == word || book[1] == word || book[2] == word) {
            console.log('founded');
            return book;
        }
    }
    console.log('not founded');
    return [];
}

function sellbook(bookTitle, Quantity, credit) {
    let book = findbook(bookTitle);
    if (book.length > 0) {
        if ((book[4] - Quantity) < 0) {
            console.log(`Quantity is not enough, we have only ${book[4]}`);
        } else {
            let totalAmount = book[3] * Quantity;
            if (credit >= totalAmount) {
                book[4] -= Quantity;
                credit -= totalAmount;
                console.log(`${Quantity} books with the title ${bookTitle} have been purchased with total amount of ${totalAmount}, your credit now is ${credit}`);
            } else {
                console.log(`Your sold ${credit} is not enough to complete this process ,you need ${totalAmount}`);
            }

        }
    }
}

console.log('***************************************\n\n hello and welcome to our book store , please choose an option.');
rl.question(" 1 : for add new book\n 2 : for find out if a book is a available\n 3 : buy a book. \n", (input) => {
    if (input == 1) {
        addbook('my new book', 'me', 40.0, 7);
    }
    if (input == 2) {
        findbook('Zero to One');
    }
    if (input == 3) {
        sellbook('Clean Code', 3, 200);
    }

    rl.close();
});