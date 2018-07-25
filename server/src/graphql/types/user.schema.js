const userTypes = `

    # User definition type
    type User {
        id: ID!
        email: String!
    }

    input UserCreateInput {
        email: String!
        password: String!
    }

    input UserUpdatePasswordInput {
        password: String!
    }

`;

const userQueries = `
    users: [ User ]
    user(id: ID!): User!
`;

const userMutations = `
    createUser(input: UserCreateInput!): User
    updateUserPassword(id: ID!, input: UserUpdatePasswordInput!): Boolean
    deleteUser(id: ID!): Boolean
`;

export { userTypes, userQueries, userMutations };
