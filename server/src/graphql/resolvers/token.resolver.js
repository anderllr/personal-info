import bcrypt from 'bcryptjs';

import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../../utils/utils';

/*
  Here I created a token based in user and password
*/
export default {
	Mutation: {
		createToken: async (parent, { email, password }, { db }) => {
			const { User } = db;
			const user = await User.findOne({ email });

			let errorMsg = 'Unauthorized, wrong email or password!';
			if (!user || !bcrypt.compareSync(password, user.password)) {
				throw new Error(errorMsg);
			}

			const payload = { sub: user._id };

			return {
				token: jwt.sign(payload, JWT_SECRET),
			};
		},
	},
};
