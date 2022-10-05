const firstChatColumn = document.querySelector('.chat-column1');
const secondChatColumn = document.querySelector('.chat-message')
const chatButton = document.getElementById('go-to-chat');

const messageContent = document.getElementById('message-content');
const sendButton = document.getElementById('send-button');

const chatBaseURL = "http://127.0.0.1:8000/api/v0.1/chat/";

const viewChat = async() => {

    const chat_contact= new FormData();
    chat_contact.append('id', localStorage.getItem('currentUserId'));
    chat_contact.append('gender_interested',localStorage.getItem('genderIntersetedIn'));

    const chat_contact_url = `${homeBaseURL}view_people`;
    const response_chat_contact =  await postAPI(chat_contact_url,chat_contact);

    firstChatColumn.innerHTML=``
    for(let i=0; i<response_chat_contact.data.data.length; i++){
        firstChatColumn.innerHTML +=`
            <div class="chating chat-contact" data-value=${response_chat_contact.data.data[i].id}>
                <div class="chat-image">
                    <img src="../dating-server/dating-server/public/${response_chat_contact.data.data[i].picture}" alt="person">
                </div>
                <p>${response_chat_contact.data.data[i].name}</p>
            </div>`
    }

    // Accessing all the chat contact
    const chats = document.querySelectorAll('.chating')
    chats.forEach(chat => {
        chat.addEventListener('click', async()=>{
            
            const receive_message = new FormData();
            receive_message.append('receiver',localStorage.getItem('currentUserId'));
            receive_message.append('sender',chat.getAttribute('data-value'));

            const receive_message_url = `${chatBaseURL}receive_chat`;
            const response_receive_message = await postAPI(receive_message_url,receive_message);
            
            secondChatColumn.innerHTML=``
            for(let i=0; i<response_receive_message.data.data.length; i++){
                secondChatColumn.innerHTML += `
                    <div class="chat-message-box">
                        <p class="chat-box-name">${response_receive_message.data.data[i].name}</p>
                        <p class="chat-box-message">${response_receive_message.data.data[i].message}</p>
                        <p class="chat-box-time">${response_receive_message.data.data[i].created_at}</p>
                    </div>`
            }
        })

        sendButton.onclick = async() => {
            const send_message = new FormData();
            send_message.append('sender',localStorage.getItem('currentUserId'));
            send_message.append('receiver',chat.getAttribute('data-value'));
            send_message.append('message',messageContent.value);
        
            const send_message_url = `${chatBaseURL}send_chat`;
            const response_send_message = await postAPI(send_message_url,send_message);
        
            for(let i=0; i<response_send_message.data.data.length; i++){
                secondChatColumn.innerHTML += `
                    <div class="chat-message-box">
                        <p class="chat-box-name">${response_send_message.data.data[i].name}</p>
                        <p class="chat-box-message">${response_send_message.data.data[i].message}</p>
                        <p class="chat-box-time">${response_send_message.data.data[i].created_at}</p>
                    </div>`
            }
        }

    });
    
}

chatButton.addEventListener('click',viewChat);