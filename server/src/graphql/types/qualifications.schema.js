const qualificationsTypes = `

    type Qualification {
        id: ID!
        qualification: String!
        description: String!
        person: Person
    }

    input QualificationInput {
        qualification: String!
        description: String!
        personId: ID!
    }

`;

const qualificationsQueries = `
    qualificationsByPerson(personId: ID!): [ Qualification! ]!
`;

const qualificationsMutations = `
    createQualification(input: QualificationInput!): Qualification
    updateQualification(id: ID!, input: QualificationInput!): Qualification
    deleteQualification(id: ID!): Boolean
`;

export { qualificationsTypes, qualificationsQueries, qualificationsMutations };
