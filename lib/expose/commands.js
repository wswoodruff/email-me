'use strict';

module.exports = (server, options) => ({
    value: {
        default: {
            command: async (srv, args) => {

                const [address, message] = args;

                if (!address || !message) {
                    throw new Error('address and message are required');
                }

                const { emailService } = srv.services();
                await emailService.sendMail({ to: address, text: message });
            }
        },
        text: {
            command: async (srv, [carrier, number, message]) => {

                const { emailService } = srv.services();

                await emailService.sendText({ carrier, number, text: message });
            }
        }
    }
});
