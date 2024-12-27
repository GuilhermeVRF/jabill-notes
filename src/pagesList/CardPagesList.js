export async function createPageInServer(title){
    try{
        const response = await fetch(`http://localhost:5000/page`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("user_token")}`
            },
            body: JSON.stringify({title: title})
        })
        const responseBody = await response.json();
        
        return responseBody.status == "success" ? responseBody.data : null
    }catch(exception){
        return null
    }    
}