document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');

    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const userMessage = userInput.value.trim();

        if (!userMessage) return;

        addMessage(userMessage, 'user');
        userInput.value = '';

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            addMessage(data.reply, 'bot');
        } catch (error) {
            console.error('Error:', error);
            addMessage('Sorry, something went wrong. Please try again.', 'bot');
        }
    });

    function addMessage(message, sender) {
        const chatBox = document.getElementById('chat-box');

        const messageWrapper = document.createElement('div');
        messageWrapper.classList.add('message-wrapper', `${sender}-message-wrapper`);

        const messageContent = document.createElement('div');
        messageContent.classList.add('message-content');

        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', `${sender}-message`);
        messageElement.textContent = message;

        const time = new Date();
        const timestamp = document.createElement('div');
        timestamp.classList.add('timestamp');
        timestamp.textContent = `${time.getHours()}.${String(time.getMinutes()).padStart(2, '0')}`;

        messageContent.appendChild(messageElement);
        messageContent.appendChild(timestamp);

        messageWrapper.appendChild(messageContent);

        chatBox.appendChild(messageWrapper);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
