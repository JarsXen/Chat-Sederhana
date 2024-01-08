function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const chatMessages = document.getElementById('chat-messages');

    if (messageInput.value.trim() !== '') {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message';
        messageDiv.textContent = messageInput.value;
        chatMessages.appendChild(messageDiv);

        // Clear the input field after sending the message
        messageInput.value = '';

        // Optionally, you can add logic here to send the message to the server (backend).
    }
}
