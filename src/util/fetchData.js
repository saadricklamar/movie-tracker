export const fetchData = async(url, options) => {
    const response = await fetch(url, options)
    if(response.ok) {
        return response.json()
    } else {
        throw Error('Error receiving data from fetch')
    }
}   