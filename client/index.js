import "./layout.scss"
import NavBar from "./components/NavBar";
import Post from "./componentParts/Post"
import UserObj from "./componentParts/UserObj"
import CreatePost from "./componentParts/CreatePost";
import axios from 'axios';



const LayoutHeader = document.getElementsByClassName("Layout__header")[0];
const LayoutMain = document.getElementsByClassName("Layout__main")[0];
const LayoutFooter = document.getElementsByClassName("Layout__footer")[0];

const backend_url = "http://127.0.0.1:8000/api/v1/";

LayoutHeader.appendChild(NavBar());

const sample_data = {
    "id": 1,
    "first_name": "Veronika",
    "last_name": "Romanko",
    "email": "veronika.romanko@gmail.com"
};


function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

const deleteItems = () => {
    removeElementsByClass('user__wrapper');
    removeElementsByClass('create-post__wrapper');
    removeElementsByClass('post__wrapper');

};

const getAllUsers = async (e) => {
    deleteItems();
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
        // LayoutMain.removeChild(post);
        LayoutMain.appendChild(UserObj());
        document.getElementsByClassName('user__username')[i].innerHTML = elem['username'];
        i++
    })
};


async function onCreatePostButtonClick(e) {
    let data = {
        'title': document.getElementsByClassName('create-post__input')[0].value,
        'text': document.getElementsByClassName('create-post__input')[1].value
    };
    let res = await axios.post(backend_url + 'user/' + sample_data['id'] + '/create_post/', data);
    console.log(res)
    getUserNewsFeed();
};


const create_post = () => {
    deleteItems();

    LayoutMain.appendChild(CreatePost());
    let button = document.getElementsByClassName('create-post__button')[0];
    button.addEventListener('click', onCreatePostButtonClick);
};



async function getUserNewsFeed() {
    let i = 0;
    let res = await axios.get(backend_url + 'user/' + sample_data['id'] + '/news_feed');

    let data = res.data;
    console.log(data);
    deleteItems();
    data.forEach(elem => {
        LayoutMain.appendChild(Post());
        document.getElementsByClassName('post__title')[i].innerHTML = elem['title'];
        document.getElementsByClassName('post__text')[i].innerHTML = elem['text'];
        document.getElementsByClassName('post__author')[i].innerHTML = "Author id: " + elem['author'];
        document.getElementsByClassName('post__created')[i].innerHTML = "Created at: " + elem['created_at'];
        i++;
    })

};


getUserNewsFeed();

let all_users_button = document.getElementsByClassName('nav-bar__users')[0];
all_users_button.addEventListener('click', getAllUsers);

let main_paige_button = document.getElementsByClassName('nav-bar__home')[0];
main_paige_button.addEventListener('click', getUserNewsFeed);

let post_create_button = document.getElementsByClassName('nav-bar__post-create')[0];
post_create_button.addEventListener('click', create_post);



