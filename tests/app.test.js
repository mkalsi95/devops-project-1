const request = require('supertest')
const express = require('express')

const app = express()
app.get('/', (req, res) => res.send('Hello, DevOps!'))

describe('GET /', () => {
  it('responds with Hello, DevOps!', done => {
    request(app)
      .get('/')
      .expect('Hello, DevOps!')
      .expect(200, done)
  })
})
