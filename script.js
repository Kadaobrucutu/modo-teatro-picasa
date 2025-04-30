const images = [
  "https://picsum.photos/id/1/1200/800",
  "https://picsum.photos/id/2/1200/800",
  "https://picsum.photos/id/3/1200/800",
  "https://picsum.photos/id/4/1200/800",
  "https://picsum.photos/id/5/1200/800"
];

let currentIndex = 0;
let scale = 1;

function openTheater(index) {
  currentIndex = index;
  document.getElementById("theater-img").src = images[index];
  document.getElementById("theater").style.display = "flex";
}

function closeTheater() {
  document.getElementById("theater").style.display = "none";
  scale = 1;
  document.getElementById("theater-img").style.transform = "scale(1)";
}

function prevImage() {
  if (currentIndex > 0) {
    currentIndex--;
    document.getElementById("theater-img").src = images[currentIndex];
  }
}

function nextImage() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    document.getElementById("theater-img").src = images[currentIndex];
  }
}

function zoom(event) {
  const img = document.getElementById("theater-img");
  event.preventDefault();
  scale += event.deltaY * -0.01;
  scale = Math.min(Math.max(0.5, scale), 5);
  img.style.transform = `scale(${scale})`;
}
