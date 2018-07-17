import jwt from 'jsonwebtoken';

import db from '../models';
import { JWT_SECRET } from '../utils/utils';
import { UserInstance } from '../models/UserModel';

export const tokenMiddleware = (req, res, next) => {
	let authorization: string = req.get('authorization');
	let token: string = authorization ? authorization.split(' ')[1] : undefined;

	req['context'] = {};
	req['context']['authorization'] = authorization;

	if (!token) {
		return next();
	}

	jwt.verify(token, JWT_SECRET, (err, decoded: any) => {
		if (err) {
			return next();
		}

		db.User.findById(decoded.sub, {
			attributes: ['id', 'email'],
		}).then((user: UserInstance) => {
			if (user) {
				req['context']['authUser'] = {
					id: user.get('id'),
					email: user.get('email'),
				};
			}

			return next();
		});
	});
};
