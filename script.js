//your JS code here. If required.
 const form = document.querySelector('form');
  const nameInput = document.getElementById('name');
  const ageInput = document.getElementById('age');
  const sbtn = document.getElementById('btn');
  
  sbtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the form from submitting normally
    
    if (nameInput.value.trim() === '' || ageInput.value.trim() === '') {
      alert('Please fill in both inputs.'); // Show an error message if inputs are empty
      return;
    }
    
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const age = Number(ageInput.value);
        if (age >= 18) {
          const welcomeMessage = `Welcome, ${nameInput.value}. You can vote.`;
          resolve(welcomeMessage); // Resolve the promise with a welcome message
        } else {
          const sorryMessage = `Oh sorry ${nameInput.value}. You aren't old enough.`;
          reject(sorryMessage); // Reject the promise with an error message
        }
      }, 4000); // Wait 4 seconds before resolving/rejecting the promise
    });
    
    promise.then((message) => {
      alert(message); // Show the welcome message if the promise is resolved
    }).catch((message) => {
      alert(message); // Show the error message if the promise is rejected
    });
  });