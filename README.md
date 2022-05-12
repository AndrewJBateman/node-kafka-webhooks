# :zap: Node Kafka Webhooks

* Work in progress: Kafka client KafkaJS used to interract with Confluent Cloud
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/node-kafka-webhooks?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/node-kafka-webhooks?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/node-kafka-webhooks?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/node-kafka-webhooks?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Node Kafka Webhooks](#zap-node-kafka-webhooks)
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

* Confluent Getting-started files: `producer.js` and `consumer.js` files produce and consume data via Confluent Cloud, using `getting-started.properties` & `util.js` files

## :camera: Screenshots

![Image](./img/list.png)

## :signal_strength: Technologies

* [Node.js v16](https://nodejs.org/) Javascript runtime using the [Chrome V8 engine](https://v8.dev/)
* [KafkaJS v3](https://kafka.apache.org/) event streaming; real-time data capture
* [npm hook receiver v1](https://www.npmjs.com/package/npm-hook-receiver) to receive a package hook from the npm registry, verify its signature, and handle its payload.

## :floppy_disk: Setup

* `npm i` to install dependencies
* Create account with Confluent and create a project to get API key and secret
* Terminal 1: `node producer.js getting-started.properties` to produce data
* Terminal 2: `node consumer.js getting-started.properties` to consume data

## :wrench: Testing

* N/A

## :computer: Code Examples

* tba

```javascript
```

## :cool: Features

* tba

## :clipboard: Status, Testing & To-Do List

* Status: Work in progress, basic producer/consumer files work
* To-Do: Complete

## :clap: Inspiration

* [Confluent: Getting Started with Apache Kafka and Node.js](https://developer.confluent.io/get-started/nodejs/#create-topic)
* [What is Confluent | Jay Kreps (CEO, Confluent)](https://www.youtube.com/watch?v=VRVfx5Sf7Ug)

## :file_folder: License

* N/A

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
