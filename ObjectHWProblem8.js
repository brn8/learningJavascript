//made an object called account with it's keys and values

let address = {
	street: "128 Congress Street",
	city: "Jersey City ",
	state: "NJ",
	zipcode: "07307"
}
let client = {
	first_name: "Brijesh",
	last_name: "Naik",
	birth_date: "1-27-1999",
	social_security_number: "146-64-2456",
	phone_number: "201-752-6956",
	email: "br42@njit.edu",
	home_address: address,
}

let bank_account1 = {
	account_type: "Checking",
	account_number: 165246542,
	current_balance: 1420

}
let bank_account2 = {
	account_type: "Saving",
	account_number: 165246542,
	current_balance: 2500
}
var all_accounts = [bank_account1, bank_account2];

let credit_card = {
	credit_card_number: "4515-4454-5454-5454",
	credit_card_expiration_date: "12/23",
	credit_card_security_code:345,
	credit: 1500,
	current_balance: 154
}
let activities1 = {
	transaction_types: "Deposit",
	date: "6/20/21",
	amount: 1000,

}
let activities2 = {
	transaction_types: "Withdraw",
	date: "6/22/21",
	amount: 560,
}

let all_activities = [activities1, activities2];

let account = {
	personal_info: client,
	bank_accounts: all_accounts,
	credit_cards: credit_card,
	recent_activites: all_activities
}

console.log(account)