const err = document.querySelector(".error");
const map = document.querySelector("#map");
const refresh = document.querySelector(".refresh img");
mapboxgl.accessToken =
  "pk.eyJ1IjoiYm9zc29uY29kZSIsImEiOiJja29qeHRoZHAwZHo2MnBxZndjanYycGU3In0.r_T8-h5iPsxR87Dq5nbHqQ";

function successLocation(position) {
  setMap([position.coords.longitude, position.coords.latitude]);
}
function errorLocation() {
  err.classList.add("show");
  map.classList.add("hide");
}

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccurcy: true,
});

function setMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav, "bottom-right");
  const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });

  map.addControl(directions, "top-left");
}

refresh.addEventListener("click", (e) => {
  location.reload();
});
