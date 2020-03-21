const CreatePost = () => {
    let container = document.createElement('div');
    container.className = 'create-post__wrapper';
    container.innerHTML = `
        <h2>Create a post</h2>
        <form>
            <label for="title">Title</label>
            <input class="create-post__input" type="text" id="title" name="title">
            <label for="text">Text</label>
            <input class="create-post__input" type="text" id="text" name="text">
        </form>
        <button class="create-post__button">Next</button>
    `;

    return container;
};
export default CreatePost;
