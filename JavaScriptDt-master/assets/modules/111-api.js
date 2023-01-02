const seachShows = (query, cb)=>{
    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    .then(resp=>resp.json())
    .then(data=>{
        cb(data)
    })
    .catch(err=>{
        console.log(err)
    })
}
export {seachShows}