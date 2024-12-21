export async function registerUser(form, router){
    const data = form.formData;
    console.log(data)
    data.profile_image = 'imagem';
    try{
        const response = await fetch("http://localhost:5000/user", {
            method : "POST",
            body : JSON.stringify(data)
        });
        
        const responseBody = await response.json();
        if(responseBody.status === "success"){
            localStorage.setItem("user_id", responseBody.data.id);
            router.push("/content");
        }
    }catch(exception){
        console.log(exception)
    }
}