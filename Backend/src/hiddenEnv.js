
import dotenv from "dotenv";

dotenv.config();


export const serverPort = process.env.SERVER_PORT;

export const MongodbUrl = process.env.MongodbUrl;

export const jwtPrivatekey = process.env.jwtPrivatekey;

export const clientUrl = process.env.clientUrl;

export const smtpUsername = process.env.smtpUsername;

export const smtpPassword = process.env.smtpPassword;

export const jwtRefreshKey = process.env.jwtRefreshKey;

export const jwtAccessKey = process.env.jwtAccessKey;

