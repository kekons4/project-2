module.exports = {
    map_category: (title, body, username, categoryId, id) => {
        console.log(`${categoryId} : ${id}`);
        if(categoryId == id) {
            console.log("test"); 
            return `<div class="card">
                        <div class="card-body">
                            <div class="post-card">
                                <h5>${title}</h5>
                                <p>${body}</p>
                                <span>${username}</span>
                            </div>
                        </div>
                    </div>`;
        }
    }
};