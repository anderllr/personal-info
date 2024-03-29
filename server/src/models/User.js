import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { GEN_SALT_NUMBER } from '../utils/utils';

/*
    I used regex to require correct e-mail and a strong password
*/

const UserSchema = mongoose.Schema({
	email: {
		type: String,
		unique: true,
		required: true,
		trim: true,
		match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a email format'],
	},
	password: {
		type: String,
		required: true,
		trim: true,
		match: [
			/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
			'Your password must have at least 8 characters, one uppercase letter and one number',
		],
	},
});

UserSchema.pre('save', function save(next) {
	const user = this;
	if (!user.isModified('password')) {
		return next();
	}
	bcrypt.genSalt(Number(GEN_SALT_NUMBER), (err, salt) => {
		if (err) {
			return next(err);
		}
		bcrypt.hash(user.password, salt, (err, hash) => {
			if (err) {
				return next(err);
			}
			user.password = hash;
			next();
		});
	});
});

export const User = mongoose.model('User', UserSchema);
