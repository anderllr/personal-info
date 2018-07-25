import { authenticated } from './auth.resolver';

export default {
	Query: {
		users: async (parent, args, { db }) => {
			const { User } = db;
			const users = await User.find(args);
			return users.map(user => {
				user._id = user._id.toString();
				return user;
			});
		},
		user: async (parent, args, { db }) => {
			const { User } = db;
			const user = await User.findById(args.id);
			return user;
		},
	},
	Mutation: {
		createUser: async (parent, { input }, { db }) => {
			const { User } = db;
			const user = await new User(input).save();
			return user;
		},
		updateUserPassword: async (parent, { id, input }, { db }) => {
			const { User } = db;
			const user = await User.findById(id);
			user.set(input);
			await user.save();
			if (!user) {
				return false;
			}
			return true;
		},
		deleteUser: async (parent, { id }, { db }) => {
			const { User } = db;
			const userRemoved = await User.findByIdAndRemove(id);

			if (!userRemoved) {
				throw new Error('Error removing user');
			}

			return userRemoved;
		},
	},
};
