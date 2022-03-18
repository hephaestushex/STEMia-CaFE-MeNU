const moreInfoButtons = document.querySelectorAll(".more-info");
const infoTexts = document.querySelectorAll(".info");
console.log(infoTexts)

infoTexts.forEach(infoText => {
	infoText.style.display = "none";
});

for (let i = 0; i < moreInfoButtons.length; i++) {
	moreInfoButtons[i].addEventListener("click", function () {
		if (infoTexts[i].style.display === "none") {
			infoTexts[i].style.display = "block";
		} else if (infoTexts[i].style.display === "block") {
			infoTexts[i].style.display = "none";
		}
	});
}
