const API_KEY = 'AIzaSyAM1e2_HGpMgPZxLIg2yMOvG9QJRghLJ6M'

export const YOUTUTBE_LIST_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${API_KEY}`

export const YOUTUBE_LIST = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}`
export const YOUTUBE_SEARCH_API = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';