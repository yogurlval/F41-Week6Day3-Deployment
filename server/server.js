const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: '5d7c56eb285041b7bb5d138289a2f64a',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.get('/', (req,res)=>{
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'))
})

app.get('/castle', (req,res)=>{
    res.status(200).send('<h1> Welcome to the castle! </h1>')
})

app.get('/profile', (req,res)=>{
    res.status(200).sendFile(path.join(__dirname, '../public/profile.html'))
})

try {
    fakeFunction()
} catch (err){
    rollbar.error(error)
    console.error(err)
}

try {
    fakeFunction2()
} catch (err){
    rollbar.critical('very bad error happening')
    console.error(err)
}

try {
    fakeFunction3()
} catch (err){
    rollbar.warning('please look at this something is not right :(')
    console.error(err)
}


// app.post('/castle', fakeFunction = (req,res)=>{
//     res.status(200).send(res.data)
// })

app.listen(4000, console.log(`Server runnin on 4000!`))