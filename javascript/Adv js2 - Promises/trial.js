
// const myPromise = new Promise((resolve, reject) => {
//   // Asynchronous operation here (e.g., API call, timeout)
//   setTimeout(() => {
//     const success = true; // Or false to simulate an error
//     if (success) {
//       resolve("Operation completed successfully!");
//     } else {
//       reject("Operation failed!");
//     }
//   }, 1000); // Simulate a 1-second delay
// });

// myPromise
//   .then((result) => {
//     console.log(result); // Handle successful result
//   })
//   .catch((error) => {
//     console.error(error); // Handle errors
//   });

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.5; // Random success
    if (success) {
      resolve({ message: "Operation successful", data: { value: 123 } });
    } else {
      reject(new Error("Operation failed due to random chance."));
    }
  }, 1000);
});

