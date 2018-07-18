//This file is used for storage information that I need in all system
// Or to keep information safe
//You have to create your own .env file with your secret information like example:
/*
export const env = {
    authSecret: 'MypersonalSecret',
    genSaltNumber: 10
}
*/
const env = require('dotenv').config();

export const JWT_SECRET = process.env.AUTH_SECRET;
export const GEN_SALT_NUMBER = process.env.GEN_SALT_NUMBER;
