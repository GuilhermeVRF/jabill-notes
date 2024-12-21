export async function fetchUser(){
    const response = await fetch(`http://localhost:5000/user/${localStorage.getItem("user_id")}`);
    
    const responseBody = await response.json();

    return {username : responseBody.data.name, photo : ""};
}