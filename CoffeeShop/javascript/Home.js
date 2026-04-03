// SLIDER ONE 
// Current slide index
let sliderIndex = 0;

// Select all slides
const contents = document.querySelectorAll(".slid");

// Function to show slide
function showContentSlide(index) {
  contents.forEach((content, i) => {
    // Move all slides
    content.style.transform = `translateX(${-(index) * 100}%)`;

    // Remove active class
    content.classList.remove("Active");
  });

  // Add active class to current slide
  if (contents[index]) {
    contents[index].classList.add("Active");
    content.style.transform = `translateX(${( index) * 100}%)`;
  }
}

// Auto slide function
function autoContentSlide() {
  sliderIndex++;

  // Reset if exceeds length
  if (sliderIndex >= contents.length) {
    sliderIndex = 0;
  }

  showContentSlide(sliderIndex);
}

// Run every 5 seconds
setInterval(autoContentSlide, 5000);

// SLIDER TWO 
// Current comment index
let currentIndex = 0;

// Select comment slides
const comments = document.querySelectorAll(".Comment");

// Function to show comment
function showCommentSlide(index) {
  comments.forEach((slide, i) => {
    // Move slides
    slide.style.transform = `translateX(${(index) * 100}%)`;

    // Remove active class
    slide.classList.remove("Active");
  });

  // Activate current
  if (comments[index]) {
    comments[index].classList.add("Active");
    comments[index].style.transform = `translateX(${-(index) * 100}%)`;
  }
}

// Auto slide every 3 seconds
setInterval(() => {
  currentIndex++;

  if (currentIndex >= comments.length) {
    currentIndex = 0;
  }

  showCommentSlide(currentIndex);
}, 3000);


//MENU ICON
const menuIcon =document.getElementById('menuIconBtn')
menuIcon.addEventListener("click", function() {
  console.log('clike');
  const menus=document.getElementById('NAVBARMENUICON')
    menus.classList.toggle("activebtn");
});