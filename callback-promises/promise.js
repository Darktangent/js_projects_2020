// const makeDogPromise = () => {
// 	new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const rand = Math.random();
// 			if (rand < 0.5) {
// 				resolve();
// 			} else {
// 				reject();
// 			}
// 		}, 5000);
// 	});
// };
// makeDogPromise()
// 	.then(() => {
// 		console.log('yay we got a dog');
// 	})
// 	.catch(() => {
// 		console.log(':{ no dog');
// 	});

const fakereq = url => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// const rand = Math.random();
			// if (rand < 0.3) {
			// 	reject({ status: 404 });
			// } else {
			const pages = {
				'/users': [
					{ id: 1, username: 'bilbo' },
					{ id: 2, username: 'Fredo' }
				],
				'/users/1': {
					id: 1,
					username: 'bilbo',
					upvotes: 360,
					city: 'Lisbon',
					topPostId: 454321
				},
				'/users/2': {
					id: 2,
					username: 'Fredo',
					upvotes: 571,
					city: 'Honolulu'
				},
				'/posts/454321': {
					id: 454321,
					title: 'Ladies & Gents, may I introduce my pet pig, Hamlet'
				},
				'/about': 'About Page'
			};
			const data = pages[url];
			if (data) {
				resolve({ status: 200, data });
			} else {
				reject({ status: 404 });
			}
		}, 3000);
	});
};
fakereq('/users')
	.then(res => {
		const id = res.data[0].id;
		return fakereq(`/users/${id}`);
	})
	.then(res => {
		const id = res.data.topPostId;
		return fakereq(`/posts/${id}`);
	})
	.then(res => {
		console.log(res.data.title);
	})
	.catch(res => {
		console.log(res.status);
	});
// .then(res => {
// 		const id = res.data.topPostId;
// 		fakereq(`/posts/${id}`).then(res => {
// 			console.log(res.data.title);
// 		});
// 	});
