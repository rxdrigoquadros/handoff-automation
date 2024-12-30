import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { FormData } from 'formdata-node';
import { fileFromPath } from 'formdata-node/file-from-path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BROWSERSTACK_USERNAME = process.env.BROWSERSTACK_USERNAME;
const BROWSERSTACK_ACCESS_KEY = process.env.BROWSERSTACK_ACCESS_KEY;

async function uploadToBrowserStack() {
    const filePath = path.join(__dirname, '../app/handoff.apk');
    
    try {
        const formData = new FormData();
        const file = await fileFromPath(filePath);
        formData.append('file', file);

        const response = await fetch('https://api-cloud.browserstack.com/app-automate/upload', {
            method: 'POST',
            body: formData,
            headers: {
                'Authorization': 'Basic ' + Buffer.from(BROWSERSTACK_USERNAME + ':' + BROWSERSTACK_ACCESS_KEY).toString('base64')
            }
        });

        const data = await response.json();
        
        if (data.app_url) {
            console.log('App uploaded successfully to BrowserStack');
            console.log('App URL:', data.app_url);
        } else {
            console.error('Failed to upload app:', data);
        }
    } catch (error) {
        console.error('Error uploading app:', error);
    }
}

uploadToBrowserStack();