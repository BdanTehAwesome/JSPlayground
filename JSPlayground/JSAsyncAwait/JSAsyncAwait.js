function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to the ${location}`);
    if(location === 'DB') {
      resolve('DB says Hi :)');
    } else {
      reject('We can only make a request to the DB');
    }
  })
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log('Processing response');
    resolve(`Extra Information + ${response}`)
  })
}

async function doSomeWork() {
  const response = await makeRequest('DB');
  console.log('Response was received =>  '+ response);
  const processedResponse = await processRequest(response);
  console.log('processedResponse =>  '+ processedResponse);
}

doSomeWork()