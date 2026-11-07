import { defineConfig } from "@playwright/test";
import env from './env/env.config.js';

export default defineConfig({
    testDir : './tests',

    retries : 1,

    workers : 2,

    fullyParallel : false,

    timeout : 60 * 1000,

    reporter : [['html'], ['allure-playwright']],

    outputDir : 'reporter',

    globalSetup : './storage/Login.js',

    use : 
    {
        baseURL : env.URL,

        storageState : './storage/login.json',

        headless : false,

        // maximize browser
        viewport : 
        {
            width : 1920,
            height : 1080
        },

        screenshot : 'on',
        video : 'retain-on-failure',
        trace : 'retain-on-failure',

        launchOptions :
        {
            slowMo : 500
        }
    },

    projects : 
    [
        {
            name : 'chromium',
            use : 
            {
                browserName : 'chromium'
            }
        },
        {
            name : 'firefox',
            use :
            {
                browserName : 'firefox'
            }
        },
        {
            name : 'webkit',
            use :
            {
                browserName : 'webkit'
            }
        }
    ]
});