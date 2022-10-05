const profileContainer = document.querySelector('.profile-container');
const profileButton = document.getElementById('go-to-profile');

const profileBaseURL = "http://127.0.0.1:8000/api/v0.1/profile/";

const viewProfile = async() => {
    // Retreiving profile from the database
    const view_profile= new FormData();
    view_profile.append('id', localStorage.getItem('currentUserId'));

    const view_profile_url = `${profileBaseURL}view_profile`;
    const response_view_profile =  await postAPI(view_profile_url,view_profile);

    profileContainer.innerHTML =`
        <div class="profile-column1">
        <div class="profile-image">
            <img src="../dating-server/dating-server/public/${response_view_profile.data.data[0].picture}"/>
        </div>
        </div>
        <div class="profile-column2">
            <input readonly type="text" value="${response_view_profile.data.data[0].name}" />
            <input readonly type="text" value="${response_view_profile.data.data[0].email}" />
            <input readonly type="number" value="${response_view_profile.data.data[0].phone_number}" />
            <input readonly type="number" value="${response_view_profile.data.data[0].age}" />
            <input readonly type="text" value="${response_view_profile.data.data[0].bio}" />
            <input readonly type="text" value="${response_view_profile.data.data[0].interest}" />
            <input readonly type="text" value="${response_view_profile.data.data[0].location}" />
            <div class="profile-button">
                <button>Edit Profile</button>
                <button>Save</button>
            </div>
        </div>`
}

profileButton.addEventListener('click',viewProfile)