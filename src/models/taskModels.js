const createTask = (id, title, completed) => {
    return{
        id,
        title,
        completed: false
    };
};
module.exports = { createTask };

