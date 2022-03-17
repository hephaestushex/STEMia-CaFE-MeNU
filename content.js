// const breakfastMoreInfo = document.getElementById("breakfast-more-info");
// const breakfastInfo = document.getElementById("breakfast-info");

// breakfastInfo.style.display = "none";

// breakfastMoreInfo.addEventListener("click", function () {
// 	if (breakfastInfo.style.display === "none") {
// 		breakfastInfo.style.display = "block";
// 	} else if (breakfastInfo.style.display === "block") {
// 		breakfastInfo.style.display = "none";
// 	}
// });

const moreInfoButtons = document.querySelectorAll(".more-info");
const infoTexts = document.querySelectorAll(".info");
console.log(infoTexts)

infoTexts.forEach(infoText => {
	infoText.style.display = "none";
});

// moreInfoButtons.forEach(moreInfoButton => {
// 	moreInfoButton.addEventListener("click", function () {
// 		//infoTexts.forEach(infoText => {
// 		if (infoTexts[0].style.display === "none") {
// 			infoTexts[0].style.display = "block";
// 		} else if (infoTexts[0].style.display === "block") {
// 			infoTexts[0].style.display = "none";
// 		}
// 		//});
// 	});
// });
/****** not gonna use foreach ******/

for (let i = 0; i < moreInfoButtons.length; i++) {
	moreInfoButtons[i].addEventListener("click", function () {
		if (infoTexts[i].style.display === "none") {
			infoTexts[i].style.display = "block";
		} else if (infoTexts[i].style.display === "block") {
			infoTexts[i].style.display = "none";
		}
	});
}