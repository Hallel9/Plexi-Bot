module.exports = (Discord, client, message) => {
    const prefix = '?'
    if(message.author.bot) return
    if (!message.content.startsWith(prefix)) return
    const args = message.content.slice(prefix.length).split(/ +/)
    const cmd = args.shift().toLowerCase()
    const command = client.commands.get(cmd) || client.commands.find(command => command.aliases && command.aliases.includes(cmd))
    if(command) command.execute(client, message, args, Discord)
}