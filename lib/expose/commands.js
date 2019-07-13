'use strict';

module.exports = (server, options) => ({
    value: {
        default: {
            command: async (srv, args) => {

                const [address, message] = args;

                if (!address || !message) {
                    throw new Error('address and message are required');
                }

                const { emailMeService } = srv.services();
                await emailMeService.sendMail({ to: address, text: message });
            }
        },
        text: {
            command: async (srv, [carrier, number, message]) => {

                const { emailMeService } = srv.services();

                await emailMeService.sendText({ carrier, number, text: message });
            }
        }
    }
});
