'use strict';

const Schmervice = require('schmervice');
const Nodemailer = require('nodemailer');

module.exports = class EmailMeService extends Schmervice.Service {

    constructor(server, options) {

        super(server, options);

        this.transporter = Nodemailer.createTransport(options.email.nodemailer);
    }

    async sendMail({ to, subject, text }) {

        const from = this.options.email.from;

        return await this.transporter.sendMail({ to, from, subject, text });
    }

    async sendText({ carrier, number, text }) {

        let emailTo;

        switch (carrier) {

            case 'verizon':
                emailTo = `${number}@vtext.com`;
                break;

            case 'tmobile':
                emailTo = `${number}@tmomail.net`;
                break;

            case 'at&t':
            case 'att':
                emailTo = `${number}@txt.att.net`;
                break;

            case 'sprint':
                emailTo = `${number}@messaging.sprintpcs.com`;
                break;

            case 'fi':
            case 'googleFi':
                emailTo = `${number}@msg.fi.google.com`;
                break;

            case 'uscellular':
                emailTo = `${number}@email.uscc.net`;
                break;

            default:
                throw new Error('Unsupported carrier');
        }

        return await this.sendMail({ to: emailTo, text });
    }
};
