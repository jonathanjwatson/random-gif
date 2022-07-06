console.log("Hello!");

let imageURL =
  "https://media2.giphy.com/media/3orif7XXtgQZirOw1y/giphy.gif?cid=adfa8aa387ecd7e7c7bf61990874c5f28cc5ea6a3b6eb2c3&rid=giphy.gif&ct=g";

const imageEl = document.getElementById("my-gif");

const displayImage = () => {
  imageEl.src = imageURL;
};


const requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch(
  "http://api.giphy.com/v1/gifs/random?api_key=0VeHhpnQTWuUFaK58DmOErmtss9ZL5XR",
  requestOptions
)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    console.log(result.data.images.original.url);
    imageURL = result.data.images.original.url;
    displayImage();
  })
  .catch((error) => console.log("error", error));
