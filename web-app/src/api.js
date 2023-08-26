export const getTodos = async () => {
    return fetch('http://127.0.0.1:5001/to-do-list-demo-ec1bd/us-central1/todos')
    .then(res => res.json())
    .then(json => json.todos)
}