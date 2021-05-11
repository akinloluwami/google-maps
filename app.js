const err = document.querySelector(".error");
const map = document.querySelector("#map");
const refresh = document.querySelector(".refresh img");

function successLocation(position) {
  setMap([position.coords.longitude, position.coords.latitude]);
}
function errorLocation() {
  err.classList.add("show");
  map.classList.add("hide");
}

function setMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15,
  });
}

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccurcy: true,
});

mapboxgl.accessToken =
  "pk.eyJ1IjoiYm9zc29uY29kZSIsImEiOiJja29qeHRoZHAwZHo2MnBxZndjanYycGU3In0.r_T8-h5iPsxR87Dq5nbHqQ";
refresh.addEventListener("click", (e) => {
  location.reload();
});
