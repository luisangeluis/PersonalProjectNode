import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv';
import path from "path";
import fs from 'fs';
import Product from "../models/Product";

dotenv.config();

const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;

const connection = new Sequelize(dbName, dbUser, dbPassword, {
    dialect: "mysql",
    host: dbHost,
    models: [Product]
});


export const routTest = () => console.log(path.join(__dirname + "/models"));


export const connectToDB = async () => {
    try {
        await connection.authenticate();
        await connection.sync();
        console.log("db synced");

    } catch (error: any) {
        console.log(error.message);

    } finally {
        await connection.close();
    }
}