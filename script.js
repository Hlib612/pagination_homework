const API_KEY = "53713089-e92b0a45b341877e182c56214";
const BASE_URL = "https://pixabay.com/api/";
const visualImgList = document.querySelector("#visual_img_list");
const tamplateEL = document.querySelector("#tamplate");
const loadMoreBtn = document.querySelector("#load_more")

const template = Handlebars.compile(tamplateEL.innerHTML);

const optionsGet = {
  method: "GET",
};

const fetchImg = (event) => {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&image_type=photo&per_page=12`,
    optionsGet
  ).then((response) => {
    console.log(response);
    return response.json();
  });
};

// visualImgList.innerHTML = fetchImg();

fetchImg().then((result) => {
  console.log(result);
  console.log(result.hits);
  const hits = result.hits;
  hits.map((hit) => {
    console.log(hit.previewURL);
    const murkup = template(hit);

    visualImgList.insertAdjacentHTML("beforeend" , murkup)
  });
});

loadMoreBtn.addEventListener("click" , () => {
  fetchImg().then((result) => {
  const hits = result.hits;
  hits.map((hit) => {
    const murkup = template(hit);

    visualImgList.insertAdjacentHTML("beforeend" , murkup)
  });
});
})