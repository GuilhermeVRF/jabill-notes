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

export async function deletePage(slug){
    try{
        const response = await fetch(`http://localhost:5000/page/${slug}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("user_token")}`
            }
        })

        const responseBody = await response.json();
        window.showPopup(responseBody.status, responseBody.message);
    }catch(exception){
        return null;
    }
}