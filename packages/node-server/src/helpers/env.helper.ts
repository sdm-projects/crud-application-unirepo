import env from "dotenv";
import path from "path";


const loadEnv = () => {
    const envFile = process.env.NODE_ENV === "development" ? "../../env/.env.development" : "../../env/.env.production";
    env.config({path: path.resolve(__dirname, envFile)});
};  

export default loadEnv; 