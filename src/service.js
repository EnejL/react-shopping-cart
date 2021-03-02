let user = {
	id : 1,
	login : "user1@example.com",
	balance : 120
};

let items = [
	{
		id : 2,
		name : "Bronze sword",
		price : 8,
		quantity : 10,
		image: require("./images/battle_axe.png")
	},
	{
		id : 7,
		name : "Wooden shield",
		price : 15,
		quantity : 5,
		image: require("./images/wooden_shield.png")
	},
	{
		id : 101,
		name : "Battle axe",
		price : 12,
		quantity : 2,
		image: require("./images/battle_axe.png")
	},
	{
		id : 3,
		name : "Longsword",
		price : 31,
		quantity : 1,
		image: require("./images/longsword.png")
	}
];

function simulateSuccessfulRequest(result) {
	return new Promise((resolve) => {
		setTimeout(
			() => resolve(result), 
			Math.random() * 100
		);
	});
}

function simulateFailureRequest() {
	return new Promise((_, reject) => {
		setTimeout(
			() => reject(),
			Math.random() * 100
		);
	});
}

export const service = {
	getUser: () => simulateSuccessfulRequest(user),
	list: () => simulateSuccessfulRequest(items)
};

export default items;