export default {
	Person: {
		qualifications: async (person, args, { db }) => {
			const qualifications = await db.Qualifications.find({ personId: person._id });
			return qualifications;
		},
	},
	Query: {
		//Remember that for this case we will have only one person ever
		person: async (parent, args, { db }) => {
			const { Person } = db;
			const person = await Person.findById(args.id);
			return person;
		},
	},
	Mutation: {
		createPerson: async (parent, { input }, { db }) => {
			const { Person } = db;
			//First check if have register in our Person collection
			//Because I don't want to register more than once
			const person = await Person.findOne();
			if (person) {
				await person.set(input).save();
				return person;
			}
			const personNew = new Person(input);
			await personNew.save();
			return personNew;
		},
		updatePerson: async (parent, { id, input }, { db }) => {
			const { Person } = db;
			const person = await Person.findById(id);
			await person.set(input).save();
			return person;
		},
		deletePerson: async (parent, { id }, { db }) => {
			const { Person } = db;
			const personRemoved = await Person.findByIdAndRemove(id);

			if (!personRemoved) {
				throw new Error('Error removing person');
			}

			return personRemoved;
		},
	},
};
