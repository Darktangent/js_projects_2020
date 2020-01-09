const btn = document.querySelector('button');
const moveX = (element, amount, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const bodyBoundary = document.body.clientWidth;
			const elRight = element.getBoundingClientRect().right;
			const currLeft = element.getBoundingClientRect().left;
			if (elRight + amount > bodyBoundary) {
				reject({ bodyBoundary, elRight, amount });
			} else {
				element.style.transform = `translateX(${currLeft + amount}px)`;
				// if (onSuccess) onSuccess();
				resolve();
			}
		}, delay);
	});
};
async function animateRight(el) {
	await moveX(el, 100, 1000);
	await moveX(el, 100, 1000);
}
animateRight(btn).catch(e => {
	console.log('All Done');
});

// moveX(btn, 300, 1000)
// 	.then(() => moveX(btn, 300, 1000))
// 	.then(() => moveX(btn, 300, 1000))
// 	.then(() => moveX(btn, 200, 2000))
// 	.then(() => console.log('Done'))
// 	.catch(({ bodyBoundary, elRight, amount }) => {
// 		console.log(`Body is ${bodyBoundary}px right`);
// 		console.log(`Element is at ${elRight}px, ${amount} is too large`);
// 	});

// setTimeout(() => {
// 	btn.style.transform = `translateX(100px)`;
// 	setTimeout(() => {
// 		btn.style.transform = `translateX(200px)`;
// 		setTimeout(() => {
// 			btn.style.transform = `translateX(200px)`;
// 		}, 2000);
// 	}, 2000);
// }, 1000);

// const moveX = (element, amount, delay, onSuccess, onFailure) => {
// 	// const bodyBoundary = document.body.clientWidth;
// 	// const elRight = element.getBoundingClientRect().right;
// 	// const currLeft = element.getBoundingClientRect().left;

// 	setTimeout(() => {
// 		const bodyBoundary = document.body.clientWidth;
// 		const elRight = element.getBoundingClientRect().right;
// 		const currLeft = element.getBoundingClientRect().left;
// 		if (elRight + amount > bodyBoundary) {
// 			onFailure();
// 		} else {
// 			element.style.transform = `translateX(${currLeft + amount}px)`;
// 			// if (onSuccess) onSuccess();
// 			onSuccess();
// 		}
// 	}, delay);
// };

// moveX(btn, 300, 1000, () => {
// 	moveX(btn, 500, 3000, () => {
// 		moveX(btn, 600, 5000);
// 	});
// });

// moveX(
// 	btn,
// 	100,
// 	1000,
// 	() => {
// 		// success
// 		moveX(
// 			btn,
// 			400,
// 			1000,
// 			() => {
// 				// success
// 			},
// 			() => {
// 				// fail
// 				console.log("Can't move forward");
// 			}
// 		);
// 	},
// 	() => {
// 		// fail
// 		console.log("Can't move further");
// 	}
// );
