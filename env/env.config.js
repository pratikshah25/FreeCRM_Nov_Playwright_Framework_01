import dotenv from 'dotenv';

const envName = process.env.TEST_ENV || 'qa';

dotenv.config({path : `./env/${envName}.env`, override : true});

export default 
{
    URL : process.env.BASE_URL,
    USERNAME : process.env.USERNAME1,
    PASSWORD : process.env.PASSWORD1
}