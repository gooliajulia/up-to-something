// var express = require('express');
import express from 'express';
var router = express.Router();
import nodemailer from 'nodemailer';
// var cors = require('cors');
import cors from 'cors';
// const creds = require('./config');
import creds from './config.js';

const transport = {
    // host: 'imap.gmail.com',
    // port: 993,
    service: 'gmail',
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});

router.post('/send', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n ${message} `

    var mail = {
        from: name,
        to: 'juliadwyer93@gmail.com',
        subject: 'New Message from Portfolio Contact Form',
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(3002);
