console.log("Hello!");
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
  })
  .catch((error) => console.log("error", error));
