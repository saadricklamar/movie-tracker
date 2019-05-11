export const fetchData = async(url, options) => {
    const response = await fetch(url, options)
    if(response.ok) {
        return response.json()
    } else {
        throw Error('Error receiving data from fetch')
    }
}   

export const addUser = async (user) => {
    try  {
        const response = await fetch('http://localhost:3000/api/users/new', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
            'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        return data
    } catch(error) {
        throw new Error()
    }
}
   