var blocks = document.querySelectorAll(".opp-card");
var container = document.querySelector(".scroll-view");
var leftArrow = document.querySelector(".left");
var rightArrow = document.querySelector(".right");


function myFunction(x) {
	if (x.matches) { 
		console.log("pass");
	} else {
		for (block of blocks) {
			if ((block !== blocks[0]) && (block !== blocks[1]) && (block !== blocks[2])) {
				block.style.display = "none";
			}
			
			leftArrow.style.opacity = 0;
		}
	}
}

var x = window.matchMedia("(max-width: 767px)");
myFunction(x);
x.addListener(myFunction);

leftArrow.onclick = () => {
	var counter = 0;
	for (block of blocks) {
		if (block.style.display === "none") {
			console.log("pass")
		} else {
			var blocksArray = Array.from(blocks); 
			var previousBlock = blocksArray[(blocksArray.indexOf(block) - 1)];
			previousBlock.style.display = "block";

			var delBlock = blocksArray[(blocksArray.indexOf(block) + 2) % 7];
			delBlock.style.display = "none";

			if ((blocksArray.indexOf(block) - 1) !== 0) {
				leftArrow.style.opacity = 1;
			} else {
				leftArrow.style.opacity = 0;
			}
			

			if ((blocksArray.indexOf(block) - 1) !== 4) {
				rightArrow.style.opacity = 1;
			} else {
				rightArrow.style.opacity = 0;
			}

			break;
		}	

	}
};


rightArrow.onclick = () => {
	for (block of blocks) {
		if (block.style.display === "none") {
			console.log("pass")
		} else {
			block.style.display = "none";

			var blocksArray = Array.from(blocks);
			var addBlock = blocksArray[(blocksArray.indexOf(block) + 3) % 7];
			addBlock.style.display = "block";

			if ((blocksArray.indexOf(block) + 1) !== 0) {
				leftArrow.style.opacity = 1;
			} else {
				leftArrow.style.opacity = 0;
			}

			
			if ((blocksArray.indexOf(block) + 1) !== 4) {
				rightArrow.style.opacity = 1;
			} else {
				rightArrow.style.opacity = 0;
			}

			break;
		}	
	}
};