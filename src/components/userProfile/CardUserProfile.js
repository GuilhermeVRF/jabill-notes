export async function fetchUser(){
    const response = await fetch('https://randomuser.me/api/');
    
    const data = await response.json();
    const username = data.results[0].name.first;
    const photo = data.results[0].picture.large;
    return {username : username, photo : photo};
}