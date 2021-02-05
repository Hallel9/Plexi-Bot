const fs = require('fs')
module.exports = (client, Discord) => {
    const load_dir = (dirs) => {
        const event_files = fs.readdirSync(`./events/${dirs}`).filter(file => file.endsWith('.js'))

        for(const file of event_files) {
            const event = require(`../events/${dirs}/${file}`)
            const eventname = file.split(".")[0]
            client.on(eventname, event.bind(null, Discord, client))
        }
    }

    ['client', 'guild'].forEach(e => load_dir(e))
}