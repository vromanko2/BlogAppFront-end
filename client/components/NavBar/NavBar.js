
const NavBar = () => {
    let container = document.createElement("nav");
    container.className = "nav-bar";
    container.innerHTML =
        `<div class="nav-bar__wrapper">
            <a>
                <div class="nav-bar__logo">
                    <div class="icon__logo">Logo</div>
                </div>
            </a>
            <div class="nav-bar__navigation">
                <a><div class="nav-bar__home">Main page</div></a>
                <a><div class="nav-bar__post-create">Create a post</div></a>
                <a><div class="nav-bar__users">All users</div></a>
            </div>
        </div>`;
    return container;
};

export default NavBar;
