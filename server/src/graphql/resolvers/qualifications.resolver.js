import { authenticated } from './auth.resolver';

export default {
	Qualification: {
		person: async (qualification, args, { db }) => {
			const { Person } = db;
			const person = await db.Person.findById(qualification.personId);
			return person;
		},
	},
	Query: {
		//Remember that for this case we will have only one person ever
		qualificationsByPerson: async (parent, { personId }, { db }) => {
			const { Qualifications } = db;
			const qualifications = await Qualifications.find({ personId });

			return qualifications.map(q => {
				q._id = q._id.toString();
				return q;
			});
		},
	},
	Mutation: {
		createQualification: authenticated(async (parent, { input }, { db }) => {
			const { Qualifications } = db;

			const qualifications = new Qualifications(input);

			await qualifications.save();
			return qualifications;
		}),
		updateQualification: authenticated(async (parent, { id, input }, { db }) => {
			const { Qualifications } = db;
			const qualifications = await Qualifications.findById(id);
			qualifications.set(input);
			await qualifications.save();
			return qualifications;
		}),
		deleteQualification: authenticated(async (parent, { id }, { db }) => {
			const { Qualifications } = db;
			const qualificationRemoved = await Qualifications.findByIdAndRemove(id);

			if (!qualificationRemoved) {
				throw new Error('Error removing qualification');
			}

			return qualificationRemoved;
		}),
	},
};
