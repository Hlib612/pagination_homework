const API_KEY = '53713089-e92b0a45b341877e182c56214';
const BASE_URL = 'https://pixabay.com/api/docs'
const visualImgList = document.querySelector('#visual_img_list')

const optionsGet = {
method: "GET",
}

const fetchImg = (event) => {
    return fetch(`${BASE_URL}?key=${API_KEY}&per_page=12`, optionsGet)
    .then((response) => {
        console.log(response)
        return response.json()
    })
}


// visualImgList.innerHTML = fetchImg();

fetchImg()
.then(result => console.log(result))