const Testimonials = [
  {
    id: 1,
    name: "Atia Mathew",
    skills: "UI/UX Designer/Web Developer",
    img: "./mentor1.jpg",
    bio: "I am a UI/UX Designer adipisicing elit. Ipsam atque expedita magni obcaecati impedit cum ipsum labore soluta quis temporibus, in fugiat. Distinctio ab nisi quisquam asperiores natus, beatae modi!",
  },
  {
    id: 2,
    name: "Mary Magdalene",
    skills: "Technical Writer",
    img: "./mentor2.jpg",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam atque expedita magni obcaecati impedit cum ipsum labore soluta quis temporibus, in fugiat. Distinctio ab nisi quisquam asperiores natus, beatae modi!",
  },
  {
    id: 3,
    name: "Solomon Dzebley",
    skills: "Technical Writer/Social Communicator",
    img: "./mentor3.jpg",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam atque expedita magni obcaecati impedit cum ipsum labore soluta quis temporibus, in fugiat. Distinctio ab nisi quisquam asperiores natus, beatae modi!",
  },
];

//card details
const img = document.querySelector(".mentor-img");
const mentorName = document.querySelector(".mentor-name");
const skills = document.querySelector(".skills");
const bio = document.querySelector(".bio");

//card buttons
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const randBtn = document.getElementById("randBtn");

let currentMentor = 0;

// display initial details of mentor on window load
window.addEventListener("DOMContentLoaded", function () {
  dispMentor();
});

//function to store the data of a mentor for resue
function dispMentor() {
  const data = Testimonials[currentMentor];
  img.src = data.img;
  mentorName.textContent = data.name;
  skills.textContent = data.skills;
  bio.textContent = data.bio;
}

//next button to display next mentor in the card
nextBtn.addEventListener("click", function () {
  currentMentor++;
  if (currentMentor > Testimonials.length - 1) {
    currentMentor = 0;
  }
  dispMentor(currentMentor);
});

prevBtn.addEventListener("click", function () {
  currentMentor--;
  if (currentMentor < 0) {
    currentMentor = Testimonials.length - 1;
  }
  dispMentor(currentMentor);
});

randBtn.addEventListener("click", function () {
  let rand = Math.floor(Math.random() * Testimonials.length);
  currentMentor = rand;
  console.log(currentMentor);
  dispMentor(currentMentor);
});
