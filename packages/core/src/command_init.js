export default function get_listener(command) {
    if (!command.trigger instanceof RegExp) {
        throw new Error('The command trigger must be a RegExp');
    }
    
    if (typeof command.handler !== "function") {
        throw new Error('The command handler must be a Function');
    }

    return (req, res) => {
        if (req.body.text?.match(command.trigger)) {
            res.json(command.handler(req))
        }
    }
}