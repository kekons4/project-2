module.exports = {
    map_category: (title, body, date_created, username, categoryId, id) => {
        if(categoryId == id) {
            return `<div class="card">
                        <div class="card-body">
                            <div class="post-card">
                                <a href="/post/${id}"><h5>${title}</h5></a>
                                <p>${body}</p>
                                <span>${username}</span>
                            </div>
                        </div>
                    </div>`;
        }
    },
    format_date: (date) => {
        return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
    }
};