import axios from 'axios';

const KEY = 'AIzaSyAkhPctgew-Kf3LZlcfP5l38EUTPApCRRA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY 
    }
});
