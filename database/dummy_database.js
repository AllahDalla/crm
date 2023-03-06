const fs = require('fs');

function DummyDatabase(userdata={department:"", username:"", email:"", password:""}, filepath, write=true){
    if(write){
      const data = userdata
      const path = filepath
      
      // Convert the object to a JSON string
      const jsonData = JSON.stringify(data);
      
      // Write the JSON string to the file
      fs.appendFile(path, jsonData + '\n', err => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('Object written to file successfully!');
        return;
      });
      
      return true
    }else{
      const data = userdata
      const path = filepath

      const fileContents = fs.readFileSync(path, 'utf-8').trim()
      const dataArray = fileContents.split("\n").map(fileContents => JSON.parse(fileContents))

      for(let x =0; x < dataArray.length; x++){
        if(dataArray[x].department === data.department){
          if(dataArray[x].username === data.username){
            if(dataArray[x].password === data.password){
              return true
            }
          }
        }
      }
      return false
    }

}   

module.exports = DummyDatabase;

