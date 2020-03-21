const CreatePost = () => {
    let container = document.createElement('div');
    container.className = 'create-post__wrapper';
    container.innerHTML = `
        <form>
            <label for="title">Title</label>
            <input class="create-post__input" type="text" id="title" name="title">
            <label for="text">Last Name</label>
            <input class="create-post__input" type="text" id="text" name="text">
        </form>
    `;

    return container;
};
export default CreatePost;
