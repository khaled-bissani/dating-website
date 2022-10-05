const homeContainer = document.querySelector('.home-container');
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
                        <i class="fa fa-comment"></i>
                        <i class="fa fa-ban"></i>
                    </div>
                </div>
                <div class="person-column2">
                    <div class="person-interest">
                        <h1>Interests:</h1>
                        <ul>
                            <li>${response_view_people.data.data[i].interest}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    }

    const likes = document.querySelectorAll('.like')
    console.log(likes)
    likes.forEach(like => {
        like.addEventListener('click', async()=>{
            
            const check_favorite = new FormData();
            check_favorite.append('id',localStorage.getItem('currentUserId'));
            check_favorite.append('id1',like.getAttribute('data-value'));

            const check_favorite_url = `${homeBaseURL}favorite/check_favorite`;
            const response_check_favorite = await postAPI(check_favorite_url,check_favorite);
            
        })
    });

}