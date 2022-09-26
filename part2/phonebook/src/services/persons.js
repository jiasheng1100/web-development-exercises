import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => (
    axios.get(baseUrl)
        .then(response => response.data)
        .catch(error => {
            console.log('fail')
        })
)

const create = newObject => (
    axios.post(baseUrl, newObject)
        .then(response => response.data)
        .catch(error => {
            console.log('fail')
        })
)

const remove = (id) => (
    axios.delete(`${baseUrl}/${id}`)
        .catch(error => {
            console.log('fail')
        })
)

export default { 
    getAll: getAll, 
    create: create,
    remove: remove
}