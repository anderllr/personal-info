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
		login: async (parent, args, { db }) => {
			const { User } = db;
			const user = await User.findOne(args);

			if (!user) {
				return {};
			}
			return user;
		},
	},
	Mutation: {
		createUser: async (parent, { input }, { db }) => {
			const { User } = db;
			const user = await new User(input).save();
			return user;
		},
		updateUserPassword: async (parent, { input }, { db }) => {
			const { User } = db;
			const user = await User.findOne();
			user.set(input);
			await user.save();
			if (!user) {
				return false;
			}
			return true;
		},
		deleteUser: async (parent, args, { db }) => {
			const { User } = db;
			const userRemoved = await User.findByIdAndRemove(id);

			if (!userRemoved) {
				throw new Error('Error removing user');
			}

			return userRemoved;
		},
	},
};
