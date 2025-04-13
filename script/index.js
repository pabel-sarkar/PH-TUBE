

function loadCategories() {
    //1 - fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        //2 - convert promise to json
        .then((res) => res.json())
        //3 - sent data to display
        .then((data) => displayCategories(data.categories));
}

function loadVideos() {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then((res) => res.json())
        .then(data => displayVideos(data.videos))
}

function displayCategories(categories) {
    // get the container
    const categoriesContainer = document.
        getElementById("category-container")

    //Loop operation on array of object
    for (let cat of categories) {

        //create Element
        const categoriesDiv = document
            .createElement("div");
        categoriesDiv.innerHTML = `
 <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
`
        //Append the Element
        categoriesContainer.appendChild(categoriesDiv)
    }

}


//{
//     "category_id": "1003",
//     "video_id": "aaaf",
//     "thumbnail": "https://i.ibb.co/5LRQkKF/stick-and-stones.jpg",
//     "title": "Sticks & Stones",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/rdTZrCM/dev.jpg",
//             "profile_name": "Dave Chappelle",
//             "verified": true
//         }
//     ],
//     "others": {
//         "views": "113K",
//         "posted_date": ""
//     },
//     "description": "Dave Chappelle's 'Sticks & Stones' has garnered 113K views and remains a controversial yet highly engaging piece of stand-up comedy. Known for his fearless approach, Dave dives into a wide range of topics, delivering his unique perspective with wit and sharp humor. As a verified artist, Dave's comedy is raw, honest, and unapologetically funny."
// }

const displayVideos = (videos) => {
    const videoContainer = document.getElementById("video-container");
    videos.forEach(video => {
        console.log(video)

        const videoCard = document.createElement("div");

        videoCard.innerHTML = `
<div class="card bg-base-100">
            <figure class="relative">
              <img class="w-full h-[150px] object-cover"
                src="${video.thumbnail}}"
                alt="Shoes" />
                <span class="absolute bottom-2 right-2
                bg-black text-white px-2 text-sm
                rounded">3hrs 56 min ago</span>
            </figure>
            <div class=" flex gap-3 px-0 py-5">
              <div class="profile">
                <div class="avatar">
                    <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                      <img src="${video.authors[0].profile_picture}" />
                    </div>
                  </div>
              </div>

              <div class="intro">
                 <h2 class="text-sm font-semibold"></h2>
                 <p class="text-sm text-gray-400 flex gap-1">${video.authors[0].profile_name}
                    <img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=bE5mRAhk65Br&format=gif" alt="">
                 </p>
                 <p class="text-sm text-gray-400">${video.others.views}</p>
              </div>
            </div>
          </div>
`;
        // Append
        videoContainer.appendChild(videoCard);

    })
}

loadCategories()
