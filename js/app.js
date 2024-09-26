const container = document.querySelector(".container");
const phones = [
  { name: "IphoneX", image: "images/phone1.jpg" },
  { name: "IphoneXS", image: "images/phone2.jpeg" },
  { name: "Iphone11", image: "images/phone3.jpeg" },
  { name: "Iphone11Pro", image: "images/phone4.jpeg" },
  { name: "Iphone12", image: "images/phone5.jpeg" },
  { name: "Iphone12Pro", image: "images/phone6.jpeg" },
  { name: "Iphone13", image: "images/phone7.jpeg" },
  { name: "Iphone13Pro", image: "images/phone8.jpeg" },
  { name: "Iphone14", image: "images/phone9.jpeg" },
];
const showPhones = () => {
  let output = "";
  phones.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Technology</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showPhones);
