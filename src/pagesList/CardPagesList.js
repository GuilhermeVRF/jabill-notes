export async function fetchPages(){
    try{
        const response = await fetch(`http://localhost:5000/pages`,{
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("user_token")}`
            }
        })
        const responseBody = await response.json();
        
        return responseBody.status == "success" ? responseBody.data : []
    }catch(exception){
        return []
    }
}

export async function createPage(){
    try{
        const response = await fetch(`http://localhost:5000/page`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("user_token")}`
            },
            body: JSON.stringify({title: "Nova Página"})
        })
        const responseBody = await response.json();
        
        return responseBody.status == "success" ? responseBody.data : null
    }catch(exception){
        return null
    }    
}