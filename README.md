# express-legal
Express app that serves TOS and Privacy Policy

## Install

```
npm install --save express-legal
```

## Usage

```js
const express = require('express')
const legal = require('express-legal')
const app = express()

app.use('/', legal({
  companyName: 'Acme Inc.',
  domain: 'example.com',
  lastModified: 'July 23rd, 2016',
  contactUrl: '/contact-us',
  email: 'hello@example.com'
}))
```

Your app will now serve the following routes:

- `/privacy-policy`
- `/terms-of-service`