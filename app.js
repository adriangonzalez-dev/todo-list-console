require('colors');
const {listMenu, pause} = require('./helpers/messages')

console.clear();

const main = async () =>{
    listMenu();
    pause();
}

main();