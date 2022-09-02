import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => (
    axios.post(baseUrl, newObject)
        .then(response => response.data)
)

const remove = (id) => (
    axios.delete(`${baseUrl}/${id}`)
)

export default { 
    getAll: getAll, 
    create: create,
    remove: remove
}