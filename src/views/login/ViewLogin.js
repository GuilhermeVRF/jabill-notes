export async function login(form, router){
    const data = form.formData;

    try{
        const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            body: JSON.stringify(data)
        });

        const responseBody = await response.json();
        if(responseBody.status === "success"){
            localStorage.setItem("user_token", responseBody.data.user_token)

            window.showPopup(responseBody.status, responseBody.message);
            setTimeout(() => {}, 3000);
            router.push('/content')
        }else{
            window.showPopup(responseBody.status, responseBody.message);   
        }
    }catch(exception){
        console.log(exception)
    }
}