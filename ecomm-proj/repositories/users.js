const fs = require('fs');
const crypto = require('crypto');
const util = require('util');
const Repository = require('./repository');
scrypt = util.promisify(crypto.scrypt);
class UsersRepository extends Repository {
	async create(attrs) {
		// attrs object

		attrs.id = this.randomId();
		const salt = crypto.randomBytes(8).toString('hex');
		const buf = await scrypt(attrs.password, salt, 64);
		const records = await this.getAll();
		const record = {
			...attrs,
			password: `${buf.toString('hex')}.${salt}`
		};
		records.push(record);
		// write to files
		await this.writeAll(records);
		return record;
	}
	async comparePasswords(saved, supplied) {
		// const result=saved.split(".")
		// const hashed=result[0]
		// const salt=result[1]
		const [hashed, salt] = saved.split('.');
		const hashedSuplied = await scrypt(supplied, salt, 64);
		return hashed === hashedSuplied.toString('hex');
	}
}
// const test = async () => {
// 	const repo = new UsersRepository('users.json');
// 	await repo.create({ email: 'example@test.com', password1: 'password' });
// 	// const users = await repo.getAll();
// 	const user = await repo.getOne('f880cad2');
// 	const getOne = await repo.getOneBy({ id: '61281ffc' });
// 	console.log(getOne);
// };
// test();
module.exports = new UsersRepository('users.json');
