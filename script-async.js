console.log("Hello!");

let imageURL =
  "https://media2.giphy.com/media/3orif7XXtgQZirOw1y/giphy.gif?cid=adfa8aa387ecd7e7c7bf61990874c5f28cc5ea6a3b6eb2c3&rid=giphy.gif&ct=g";

const imageEl = document.getElementById("my-gif");

const buttonEl = document.getElementById("new-gif");

const displayImage = () => {
  imageEl.src = imageURL;
};

buttonEl.addEventListener("click", async () => {
  console.log("you clicked the button!");
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  //   imageURL =
  //     "https://gifimage.net/wp-content/uploads/2018/05/spinner-gif-transparent-background-5.gif";
  //   displayImage();

  try {
    // throw new Error("This is a generic error!");
    // Only use await in front of functions that return promises. 
    const response = await fetch(
      "http://api.giphy.com/v1/gifs/random?api_key=0VeHhpnQTWuUFaK58DmOErmtss9ZL5XR",
      requestOptions
    );
    const result = await response.json();
    imageURL = result.data.images.original.url;
    displayImage();
  } catch (err) {
    console.log(err);
  }
});
