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
            <input class="remove-readonly" readonly="readonly" type="text" value="${response_view_profile.data.data[0].name}" />
            <input class="remove-readonly" readonly="readonly" type="text" value="${response_view_profile.data.data[0].email}" />
            <input class="remove-readonly" readonly="readonly" type="number" value="${response_view_profile.data.data[0].phone_number}" />
            <input class="remove-readonly" readonly="readonly" type="number" value="${response_view_profile.data.data[0].age}" />
            <input class="remove-readonly" readonly="readonly" type="text" value="${response_view_profile.data.data[0].bio}" />
            <input class="remove-readonly" readonly="readonly" type="text" value="${response_view_profile.data.data[0].interest}" />
            <input class="remove-readonly" readonly="readonly" type="text" value="${response_view_profile.data.data[0].location}" />
            <div class="profile-button">
                <button class="edit-button">Edit Profile</button>
                <button>Save</button>
            </div>
        </div>`

        const editButton = document.querySelectorAll('.edit-button');
        editButton.forEach(edit => {
            edit.onclick = () =>{
                const removeReadOnly = document.querySelectorAll('.remove-readonly');
                removeReadOnly.forEach(remove => {
                    remove.removeAttribute('readonly');
                });
            }
        });
}

profileButton.addEventListener('click',viewProfile);