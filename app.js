const express   = require('express')
const nunjucks  = require('nunjucks')
const app       = express()

//Static fies Setup
app.use('/static-files', express.static('static'))



//Template Engine Setup
app.set('view engine', 'njk')
nunjucks.configure('views', {
    express: app
})



//Routes
app.get('/about', (req, res, next) => {
        res.render('about') 
})

app.get('/contact', (req, res, next) => {
    res.render('contact') 
})

app.get('/services', (req, res, next) => {
    res.render('services') 
})

app.use((req, res, next) => {
    res.render('index')
})






// Setup Port to listen on
app.listen(3000)