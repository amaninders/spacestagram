import axios from 'axios';

export default axios.create({
  baseURL: 'https://images-api.nasa.gov/',
});


// params: {
//     api_key: 'DYj2p0gPdHZUHklHW8fe3I9aNRtf4keleuJvJpdX'
// }