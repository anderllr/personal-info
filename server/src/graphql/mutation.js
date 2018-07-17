import { userMutations } from './types/user.schema';
import { personMutations } from './types/person.schema';
import { qualificationsMutations } from './types/qualifications.schema';
import { tokenMutations } from './types/token.schema';

const Mutation = `
    type Mutation {
        ${userMutations},
        ${personMutations},
        ${qualificationsMutations},
        ${tokenMutations}               
    }
`;

export { Mutation };
