document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.getElementById('submitBtn');
  
    submitBtn.addEventListener('click', async function () {
      if (window.ethereum) { // Check if MetaMask is installed
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' }); // Prompt user to connect their MetaMask wallet
          // Once connected, you can proceed with your logic here, such as sending transactions
          console.log('MetaMask is connected!');
          // Example: Send transaction or perform other actions
          // await sendTransaction();
        } catch (error) {
          console.error('User denied account access or MetaMask is not installed:', error);
        }
      } else {
        console.error('MetaMask is not installed');
      }
    });
  
    // Example function to send a transaction
    async function sendTransaction() {
      const web3 = new Web3(window.ethereum);
      // Your transaction logic here
    }
  });
  // Delay for 1 second before calling openMetaMask
setTimeout(openMetaMask, 1000);
