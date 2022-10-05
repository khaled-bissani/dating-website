const homeContainer = document.querySelector('.home-container');
const favoriteContainer = document.querySelector('.favorite-container');
const favoriteButton = document.getElementById('go-to-favorite');
const homeBaseURL = "http://127.0.0.1:8000/api/v0.1/home/";

const postAPI = async (api_url, api_data = null, api_token = null) => {
    try{
        return await axios.post(
            api_url,
            api_data,
            { headers:{
                    'Authorization' : "token " + api_token
                }
            }
        );
    }catch(error){
        console.log("Error from POST API", error);
    }
}

window.onload = async() =>{

    // Retreiving all the people from the database
    const view_people= new FormData();
    view_people.append('id', localStorage.getItem('currentUserId'));
    view_people.append('gender_interested',localStorage.getItem('genderIntersetedIn'));

    const view_people_url = `${homeBaseURL}view_people`;
    const response_view_people = await postAPI(view_people_url,view_people);

    for(let i=0; i<response_view_people.data.data.length; i++){
        homeContainer.innerHTML +=`
            <div class="person">
                <div class="person-column1">
                    <div class="person-image">
                        <img src="../dating-server/dating-server/public/${response_view_people.data.data[i].picture}" alt="person">
                    </div>
                    <div class="person-information">
                        <p>${response_view_people.data.data[i].name}</p>
                        <p>${response_view_people.data.data[i].age}</p>
                        <p>${response_view_people.data.data[i].location}</p>
                    </div>
                    <div class="person-option">
                        <i class="like fa fa-heart" data-value=${response_view_people.data.data[i].id}></i>
                        <i class="save-chat fa fa-comment" data-value=${response_view_people.data.data[i].id}></i>
                        <i class="block fa fa-ban" data-value=${response_view_people.data.data[i].id}></i>
                    </div>
                </div>
                <div class="person-column2">
                    <div class="person-interest">
                        <h1>Interests:</h1>
                        <ul>
                            <li>${response_view_people.data.data[i].interest}</li>
                        </ul>
                        <h1>Bio:</h1>
                        <ul>
                            <li>${response_view_people.data.data[i].bio}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    }

    // Accessing each favorite button in the home page
    const likes = document.querySelectorAll('.like')
    likes.forEach(like => {
        like.addEventListener('click', async()=>{
            
            const check_favorite = new FormData();
            check_favorite.append('id',localStorage.getItem('currentUserId'));
            check_favorite.append('id1',like.getAttribute('data-value'));

            const check_favorite_url = `${homeBaseURL}favorite/check_favorite`;
            const response_check_favorite = await postAPI(check_favorite_url,check_favorite);
            
        })
    });

    // Accessing each block button for each person
    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => {
        block.addEventListener('click', async()=>{
            const add_block = new FormData();
            add_block.append('id',localStorage.getItem('currentUserId'));
            add_block.append('id1',block.getAttribute('data-value'));

            const add_block_url = `${homeBaseURL}block/add_block`;
            const response_add_block = await postAPI(add_block_url,add_block);

            // const blockPersons = document.querySelectorAll('.person');
            // blockPersons.forEach(blockPerson => {
            //     blockPerson.style.display="none"
            // })

        });
    });

    // Accessing all the chat button for each person
    const chats = document.querySelectorAll('.save-chat')
    chats.forEach(saveChat => {
        saveChat.addEventListener('click', async()=>{
            localStorage.setItem('clickedChat',saveChat.getAttribute('data-value'))            
        })
    });
}

const viewFavorite = async() => {
    // Retreiving all the favorite from the database
    const view_favorite= new FormData();
    view_favorite.append('id', localStorage.getItem('currentUserId'));
    view_favorite.append('gender_interested', localStorage.getItem('genderIntersetedIn'));

    const view_favorite_url = `${homeBaseURL}favorite/view_favorite`;
    const response_view_favorite = await postAPI(view_favorite_url,view_favorite);

    for(let i=0; i<response_view_favorite.data.data.length; i++){
        favoriteContainer.innerHTML +=`
            <div class="person">
                <div class="person-column1">
                    <div class="person-image">
                        <img src="../dating-server/dating-server/public/${response_view_favorite.data.data[i].picture}" alt="person">
                    </div>
                    <div class="person-information">
                        <p>${response_view_favorite.data.data[i].name}</p>
                        <p>${response_view_favorite.data.data[i].age}</p>
                        <p>${response_view_favorite.data.data[i].location}</p>
                    </div>
                    <div class="person-option">
                        <i class="like fa fa-heart" data-value=${response_view_favorite.data.data[i].id}></i>
                        <i class="fa fa-comment"></i>
                    </div>
                </div>
                <div class="person-column2">
                    <div class="person-interest">
                        <h1>Interests:</h1>
                        <ul>
                            <li>${response_view_favorite.data.data[i].interest}</li>
                        </ul>
                        <h1>Bio:</h1>
                        <ul>
                            <li>${response_view_favorite.data.data[i].bio}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    }
}

favoriteButton.addEventListener('click', viewFavorite)