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
            <input id="edit-name" class="remove-readonly" readonly="readonly" type="text" value="${response_view_profile.data.data[0].name}" />
            <input id="edit-email" class="remove-readonly" readonly="readonly" type="text" value="${response_view_profile.data.data[0].email}" />
            <input id="edit-number" class="remove-readonly" readonly="readonly" type="number" value="${response_view_profile.data.data[0].phone_number}" />
            <input id="edit-age" class="remove-readonly" readonly="readonly" type="number" value="${response_view_profile.data.data[0].age}" />
            <input id="edit-bio" class="remove-readonly" readonly="readonly" type="text" value="${response_view_profile.data.data[0].bio}" />
            <input id="edit-interest" class="remove-readonly" readonly="readonly" type="text" value="${response_view_profile.data.data[0].interest}" />
            <input id="edit-location" class="remove-readonly" readonly="readonly" type="text" value="${response_view_profile.data.data[0].location}" />
            <div class="profile-button">
                <button class="edit-button">Edit Profile</button>
                <button class="save-button">Save</button>
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

        // Declare all the input fields
        const editName = document.getElementById('edit-name');
        const editEmail = document.getElementById('edit-email');
        const editNumber = document.getElementById('edit-number');
        const editAge= document.getElementById('edit-age');
        const editBio = document.getElementById('edit-bio');
        const editInterest = document.getElementById('edit-interest');
        const editLocation = document.getElementById('edit-location');

        const saveButton = document.querySelectorAll('.save-button');
        saveButton.forEach(save => {
            save.onclick = async() => {
                const edit_profile= new FormData();
                edit_profile.append('id', localStorage.getItem('currentUserId'));
                edit_profile.append('name', editName.value);
                edit_profile.append('email', editEmail.value);
                edit_profile.append('number', editNumber.value);
                edit_profile.append('age', editAge.value);
                edit_profile.append('bio', editBio.value);
                edit_profile.append('interest', editInterest.value);
                edit_profile.append('location', editLocation.value);

                const edit_profile_url = `${profileBaseURL}edit_profile`;
                const response_edit_profile =  await postAPI(edit_profile_url,edit_profile);

                window.location.reload();
            }
        });
}

profileButton.addEventListener('click',viewProfile);