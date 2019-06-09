'use strict';

const Schmervice = require('schmervice');
const Nodemailer = require('nodemailer');

module.exports = class EmailService extends Schmervice.Service {

    constructor(server, options) {

        super(server, options);

        this.transporter = Nodemailer.createTransport(options.email.nodemailer);
    }

    async sendMail({ to, subject, text }) {

        const from = this.options.email.from;

        return await this.transporter.sendMail({ to, from, subject, text });
    }
};
