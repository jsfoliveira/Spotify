const CLIENT_ID = '3c9461d2bfe0421da60b47be0d1e400d';
const CLIENT_SECRET = '78abba3afe0048ed96c813ec1ed8e9cb';
const url = 'https://accounts.spotify.com/api/token';
// https://developer.spotify.com/dashboard/applications/3c9461d2bfe0421da60b47be0d1e400d
// converter em base 64: btoa(x)


// const getToken = async () => {
//     const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//             Authorization: 'Basic' + btoa(CLIENT_ID + ':' + CLIENT_SECRET),
//             'Content-Type': 

//         };
//     });

// }