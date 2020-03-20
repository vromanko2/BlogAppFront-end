import "./layout.scss"
import NavBar from "./components/NavBar";
import Post from "./componentParts/Post"
import UserObj from "./componentParts/UserObj"



const LayoutHeader = document.getElementsByClassName("Layout__header")[0];
const LayoutMain = document.getElementsByClassName("Layout__main")[0];
const LayoutFooter = document.getElementsByClassName("Layout__footer")[0];

const backend_url = "http://0.0.0.0:8002/api/v1/";

LayoutHeader.appendChild(NavBar());

const sample_data = {
    "id": 1,
    "first_name": "Veronika",
    "last_name": "Romanko",
    "email": "veronika.romanko@gmail.com"
};


const getUserNewsFeed = () => {
    let Url = backend_url + 'user/' + sample_data['id'] + '/news_feed';
    let otherParam = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    let i = 0;
    fetch(Url, otherParam)
        .then(response => response.json())
        .then((contents) => {
            console.log(contents)
            contents.forEach(elem => {
                let user = document.getElementsByClassName('user__wrapper')[0];
                if (user) {
                    LayoutMain.removeChild(user);
                }
                LayoutMain.appendChild(Post());
                document.getElementsByClassName('post__title')[i].innerHTML = elem['title'];
                document.getElementsByClassName('post__text')[i].innerHTML = elem['text'];
                document.getElementsByClassName('post__author')[i].innerHTML = "Author id: " + elem['author'];
                document.getElementsByClassName('post__created')[i].innerHTML = "Created at: " + elem['created_at'];
                i++;
            })
        })
        .catch(() => console.log("Can’t access " + Url + " response. Blocked by browser?"));
};

const getAllUsers = async (e) => {
    e.preventDefault();
    let response = await fetch(backend_url + 'users/', {
        method: 'GET', // или 'PUT'
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let jsonResponse = await response.json();
    let i = 0;
    // console.log(jsonResponse)
    jsonResponse.forEach(elem => {
        let post = document.getElementsByClassName('post__wrapper')[0];
        LayoutMain.removeChild(post);
        LayoutMain.appendChild(UserObj());
        document.getElementsByClassName('user__username')[i].innerHTML = elem['username'];
        console.log(elem)
        i++
    })
};


let all_users_button = document.getElementsByClassName('nav-bar__about')[0];
all_users_button.addEventListener('click', getAllUsers);

let main_paige_button = document.getElementsByClassName('nav-bar__home')[0];
main_paige_button.addEventListener('click', getUserNewsFeed);




getUserNewsFeed();
