const UserObj = () => {
    let container = document.createElement('div');
    container.className = 'user__wrapper';
    container.innerHTML = `
        <h2 class="user__username"></h2>
        <span class="user__id-text">User id: </span>
        <span class="user__id"></span>
        <p></p>
        <button class="user__subscribe">Subscribe</button>
    `;

    return container;
};
export default UserObj;
