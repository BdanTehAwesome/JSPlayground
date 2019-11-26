function promisTest() {
    let test1 = false;
    let test2 = true;
    return new Promise((resolve, reject) => {
      if (test1) {
        reject({
          name: 'Sorry', 
          message: 'Denied 1'
        })
      } else if (test2) {
        reject({
          name: 'Sorry',
          message: 'Denied 2' 
        })
      } else {
        resolve();
      }
    })
  }
  promisTest().then(message => {
    console.log('Success' + message);
  }).catch((error) => {
    console.log(error.name + ' ' + error.message);
  })