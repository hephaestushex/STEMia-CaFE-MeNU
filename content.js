const breakfastMoreInfo = document.getElementById("breakfast-more-info");
const breakfastInfo = document.getElementById("breakfast-info");

breakfastInfo.style.display = "none";

breakfastMoreInfo.addEventListener("click", function () {
	if (breakfastInfo.style.display === "none") {
		breakfastInfo.style.display = "block";
	} else if (breakfastInfo.style.display === "block") {
		breakfastInfo.style.display = "none";
	}
});