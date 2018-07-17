//This file is used for storage information that I need in all system
// Or to keep information safe
//You have to create your own .env file with your secret information like example:
/*
export const env = {
    authSecret: 'MypersonalSecret',
    genSaltNumber: 10
}
*/
import { env } from '../../src/.env';

export const JWT_SECRET = env.authSecret;
export const GEN_SALT_NUMBER = env.genSaltNumber;
