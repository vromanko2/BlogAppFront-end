const UserObj = () => {
    let container = document.createElement('div');
    container.className = 'user__wrapper';
    container.innerHTML = `
        <h2 class="user__username"></h2>
        <button class="user__subscribe">Subscribe</button>
    `;

    return container;
};
export default UserObj;
