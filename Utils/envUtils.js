const dotenv=require('dotenv');
dotenv.config();

class EnvUtils{
    static get(key){
        const value=process.env[key];
        if(!value){
            throw new Error(`Env variable "${key}" is missing`);
        }
        return value;
    }
}
module.exports=EnvUtils;
