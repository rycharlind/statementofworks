Statement of Works

Getting Started

To get you started you can simply clone the Statement of Works repository and install the dependencies:

Prerequisites

You need git to clone the Statement of Works repository. You can get git from http://git-scm.com/.

We also use a number of node.js tools to initialize and test Statement of Works. You must have node.js and its package manager (npm) installed. You can get them from http://nodejs.org/.

Clone Statement of Works

Clone the Statement of Works repository using [git][git]:

git clone https://github.com/rycharlind/statementofworks.git <your-project-name>
Go into the Web directory

cd web
Install Dependencies

npm install
Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start this server is:

npm run app
Now browse to the app at http://localhost:8080/index.html.

Testing

There are two kinds of tests in the Statement of Works application: Unit tests and end-to-end tests.

Running Unit Tests

The Statement of Works app comes preconfigured with unit tests. These are written in [Jasmine][jasmine], which we run with the [Karma Test Runner][karma]. We provide a Karma configuration file to run them.

the configuration is found at karma.conf.js
the unit tests are found next to the code they are testing and are named as ..._test.js.
The easiest way to run the unit tests is to use the supplied npm script:

npm test
This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and watch the source and test files for changes and then re-run the tests whenever any of them change. This is the recommended strategy; if your unit tests are being run every time you save a file then you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit. This is useful if you want to check that a particular version of the code is operating as expected. The project contains a predefined script to do this:

npm run test-watch