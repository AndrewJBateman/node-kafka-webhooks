# :zap: Node Koa Data

* Kafka client KafkaJS used with Slack bot and webhoooks to send user notification of a released NPM module
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/node-kafka-webhooks?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/node-kafka-webhooks?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/node-kafka-webhooks?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/node-kafka-webhooks?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Node Koa Data](#zap-node-koa-data)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:wrench: Testing](#wrench-testing)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status, Testing & To-Do List](#clipboard-status-testing--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* tba

## :camera: Screenshots

![Image](./img/list.png)

## :signal_strength: Technologies

* [Node.js v16](https://nodejs.org/) Javascript runtime using the [Chrome V8 engine](https://v8.dev/)
* [KafkaJS v3](https://kafka.apache.org/) event streaming; real-time data capture

## :floppy_disk: Setup

* `npm i` to install dependencies
* `npm run dev` runs app in the development mode with auto-restart.

## :wrench: Testing

* N/A

## :computer: Code Examples

* `index.js` asynchronous function to render the index page in the browser root using Koa middleware

```javascript
router.get("/", async (ctx) => {
  await ctx.render("index", {
    title: "Underground Injection Control Wells",
    wells: wells,
  });
});
```

## :cool: Features

* Uses Koa which is much lighter than the usual Express middleware

## :clipboard: Status, Testing & To-Do List

* Status: Working
* To-Do: Add well update and delete + database connection & other db fields such as location of well etc.

## :clap: Inspiration

* [Oklahoma Oil Well Data](https://oklahoma.gov/occ/divisions/oil-gas/oil-gas-data.html)
* [esparkinfo.com/blog: Express vs Koa: Which Node.js Framework Is Best For You?](https://www.esparkinfo.com/blog/express-vs-koa.html)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
