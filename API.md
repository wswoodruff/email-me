# API Reference

## hpal commands

#### default
`hpal run email-me <to> <message>`

Run the default command to send a simple email

#### text
`hpal run email-me:text <carrier> <to> <message>`

Many phone carriers have an email address you can adapt to text a number on their network.
Supported carrier values:

- verizon
- tmobile
- at&t|att
- sprint
- fi|googleFi
- uscellular

## emailMeService

#### sendMail({ to, subject, text })

Same behavior as hpal default command

#### sendText({ carrier, number, text })

Same behavior as hpal text command
