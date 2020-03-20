const Post = () => {
    let container = document.createElement('div');
    container.className = 'post__wrapper';
    container.innerHTML = `
        <h2 class="post__title"></h2>
        <p class="post__text"></p>
        <h3 class="post__author"></h3>
        <span class="post__created"></span>
    `;

    return container;
};
export default Post;
