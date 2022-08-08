const fs = require('fs');

const pathFile = './db/Database.json'

const saveInDB = (data) =>{

    fs.writeFileSync(pathFile,JSON.stringify(data))

}

const readDB = () =>{

    if(!fs.readFileSync(pathFile)){
        return null
    }

    const info = JSON.parse(fs.readFileSync(pathFile,{encoding:'utf-8'}))
    return info
}

module.exports = {
    saveInDB,
    readDB
}