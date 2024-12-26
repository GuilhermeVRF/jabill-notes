import Quill from "quill";

export function initializeQuill(editorRef){
    const quill = new Quill(editorRef, {
        modules: {
            toolbar: [
                [{ header: [1,2,3,4,5,6,false] }, { font: [] }],
                [{ size: [] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ list: 'ordered' }, { list: 'bullet' },
                    { indent: '-1' }, { indent: '+1' }
                ],
                ['link', 'image', 'video'],
                ['clean']
            ]   
        },
        theme: 'snow',
    });

    return quill;
    //quill.root.addEventListener('keydown', (event) => toggleQuillMenu(event, menuIdentifier));
}

export async function fetchPage(slug){
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

export async function updateContent(slug, content){
    try{
        const response = await fetch(`http://localhost:5000/page/${slug}`,{
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