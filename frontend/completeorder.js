// Function to handle opening MetaMask
function openMetaMask() {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
        // Request access to the user's MetaMask accounts
        window.ethereum.request({ method: 'eth_requestAccounts' })
            .then(accounts => {
                console.log('Connected to MetaMask!');
                // You can perform further actions here after connecting to MetaMask
                console.log('Connected account:', accounts[0]);
            })
            .catch(error => console.error(error));
    } else {
        // MetaMask is not installed, prompt the user to install it
        alert('MetaMask is not installed. Please install it to proceed.');
    }
}

// Attach the openMetaMask function to the button click event
document.getElementById('openMetaMaskBtn').addEventListener('click', openMetaMask);
