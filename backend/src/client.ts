const fs = require('fs');
const pg = require('pg');
const url = require('url');
import dotenv from 'dotenv';
import aivenConfig from './config'
dotenv.config();

const config = {
    user: aivenConfig.AIVEN_USER ,
    password: aivenConfig.AIVEN_PASSWORD,
    host: aivenConfig.AIVEN_HOST,
    port: aivenConfig.AIVEN_PORT,
    database: aivenConfig.AIVEN_DATABASE,
    ssl: {
        rejectUnauthorized: true,
        ca: aivenConfig.AIVEN_CA,
    },
};


export default function getClient(){
    const client = new pg.Client(config);
    client.connect(function (err: Error) {
        if (err)
            throw err;
        client.query("SELECT VERSION()", [], function (err: Error, result: any) {
            if (err)
                throw err;
    
            console.log(result.rows[0].version);
        });
    });
    return client;
}