export async function login(form, router){
    const data = form.formData;

    try{
        const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            body: JSON.stringify(data)
        });

        const responseBody = await response.json();
        if(responseBody.status === "success"){
            localStorage.setItem("user_id", responseBody.data.id)
            router.push('/content')
        }
    }catch(exception){
        console.log(exception)
    }
}