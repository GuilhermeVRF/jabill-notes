export async function fetchPagesInServer(){
    try{
        const response = await fetch(`http://localhost:5000/pages`,{
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("user_token")}`
            }
        })
        const responseBody = await response.json();

        return responseBody.data || []
    }catch(exception){
        return [];
    }
}

export async function fetchPageInServer(slug){
    try{
        const response = await fetch(`http://localhost:5000/page/${slug}`,{
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("user_token")}`
            }
        });

        const responseBody = await response.json();

        if(responseBody.status == "success"){
            return responseBody.data
        }else{
            window.showPopup(responseBody.status, responseBody.message);
            return null;
        }
    }catch(exception){
        return "";
    }
}

export async function sendTextChangeToServer(slug, content){
    try{
        const response = await fetch(`http://localhost:5000/page/content/${slug}`,{
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("user_token")}`
            },
            body: JSON.stringify({ content : content })
        });

        const responseBody = await response.json();
      
        return responseBody.status == "success"
    }catch(exception){
        return false;
    }
}

export async function sentTitleChangeToServer(slug, title){
    try{
        const response = await fetch(`http://localhost:5000/page/title/${slug}`,{
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("user_token")}`
            },
            body: JSON.stringify({ title : title })
        });

        const responseBody = await response.json();
        
        if (responseBody.status == "success"){
            return {title: responseBody.data.title, slug: responseBody.data.slug}
        }else{
            window.showPopup(responseBody.status, responseBody.message);
            return null;
        }
    }catch(exception){
        return null;
    }
}

export async function sentEmojiChangeToServer(slug, emoji){
    try{
        const response = await fetch(`http://localhost:5000/page/emoji/${slug}`,{
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("user_token")}`
            },
            body: JSON.stringify({ emoji : emoji })
        });

        const responseBody = await response.json();

        if (responseBody.status){
            window.showPopup(responseBody.status, responseBody.message);
        }
    }catch(exception){
        return null;
    }
}