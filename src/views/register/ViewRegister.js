export async function registerUser(form, router){
    const data = form.formData;
    const formData = new FormData()
    
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("repeat_password", data.repeat_password);
    formData.append("profile_image", data.profile_image);
   
    try{
        const response = await fetch("http://localhost:5000/user", {
            method : "POST",
            body : formData
        });
        
        const responseBody = await response.json();
        if(responseBody.status === "success"){
            localStorage.setItem("user_token", responseBody.data.user_token);

            window.showPopup(responseBody.status, responseBody.message);
            setTimeout(() => {}, 3000);
            router.push("/content/nova-pagina");
        }else{
            window.showPopup(responseBody.status, responseBody.message);
        }
    }catch(exception){
        console.log(exception)
    }
}