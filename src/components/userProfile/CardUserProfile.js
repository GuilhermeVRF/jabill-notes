export async function fetchUser(router){
    try{
        const response = await fetch(`http://localhost:5000/user`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("user_token")}`
            }
        });
        const responseBody = await response.json();

        if (response.status === 401) {
            window.showPopup(responseBody.status, responseBody.message);
            router.push("/login")
        }

        return responseBody.data.name;
    }catch(exception){
        return null;
    }
}

export async function fetchUserProfile(){
    try{
        const response = await fetch(`http://localhost:5000/user/profile`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("user_token")}`
            }
        });
        const responseBody = await response.json();

        return responseBody.data.profile;
    }catch(exception){
        return null;
    }
}