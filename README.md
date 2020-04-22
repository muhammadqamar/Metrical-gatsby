
<h1 align="center">
  Metrical - Public Website | Gatsby - Jamstack
</h1>
<h3 align="center">
ARTIFICIAL INTELLIGENCE.
</br>
REAL REVENUE.
</h3>
<h4 align="center">
Smart targeting and real-time customer
engagement give you the edge you need.
</h4>


## Quick start | Local Setup

1.  **Install Gatsby CLI.**

    Install gatsby-cli globaly

    ```shell
     npm install -g gatsby-cli
    ```

2.  **Install Dependencies.**

    Install all project dependencies.
    
    ```shell
    npm install
    ```

3.  **Run Project.**

    Set environment variables in .env-local file. Env file template available on project root.

    Run project locally.
    
    ```shell
    npm run develop
    ```
    
1.  **Open the source code and start editing!**

    Site is now running at `http://localhost:8000`

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## Build & Deployment

1.  **Setup environment vailables.**

    Setup production env variables in .env file. Env file template available at project root

2.  
    **Build Project.**

    Build project will create a new 'Public' folder on project root will all project files.
    
    Run command

    ```shell
    npm run build
    ```
   **Deploy Project.**

    Project comes pre-setup with command line deployment on AWS S3 bucket. 
    Setup env variable `REACT_APP_S3_DEPLOYMENT_BUCKET`, `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` in .env file.

    Run command:
    ```shell
    npm run deploy
    ```

    **Build & Deploy Project on AWS S3.**

    Project comes pre-setup with command line deployment on AWS S3 bucket. 
    Setup env variable `REACT_APP_S3_DEPLOYMENT_BUCKET`, `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` in .env file.

    Run command:
    ```shell
    npm run build-deploy
    ```

    **TODO.**
    Invalidate Cloudflare cache after deployment

## What's inside?

Top-level files and directories:

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

8. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

9. **`README.md`**: A text file containing useful reference information about your project.