const firstChatColumn = document.querySelector('.chat-column1');
const chatButton = document.getElementById('go-to-chat');

const chatBaseURL = "http://127.0.0.1:8000/api/v0.1/chat/";

const viewChat = async() => {

    const chat_contact= new FormData();
    chat_contact.append('id', localStorage.getItem('currentUserId'));
    chat_contact.append('gender_interested',localStorage.getItem('genderIntersetedIn'));

    const chat_contact_url = `${homeBaseURL}view_people`;
    const response_chat_contact =  await postAPI(chat_contact_url,chat_contact);

    for(let i=0; i<response_chat_contact.data.data.length; i++){
        firstChatColumn.innerHTML +=`
            <div class="chat-contact">
                <div class="chat-image">
                    <img src="../dating-server/dating-server/public/${response_chat_contact.data.data[i].picture}" alt="person">
                </div>
                <p>${response_chat_contact.data.data[i].name}</p>
            </div>`
    }

    
}

chatButton.addEventListener('click',viewChat);