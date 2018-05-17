# Experiment: Classifying Events titles with Brain.JS

This is an experiment to train a neural network to classify event titles as
either "birthday" or "wedding" and then using the network to predict other given
inputs.

This repo contains a small sample dataset. If you would like to try this, I
would recommend adding extra or your own custom data to `sample.json`.

## Setup

This project uses Server.JS as an API to the Brain.JS network running in a
forked process.

### Installation

* clone this project
* run `yarn install` or `npm install`

### Running the Server

* run `node server.js`
* wait for the log message `Network has been trained`

### Making requests

Make requests against the server with GET input parameter. The server will be
running on port 8080, so you may use cURL to make requests (or use your
browser).

Example:

```bash
curl http://localhost:8080\?input\=29th

{"answer": "birthday"}
```
