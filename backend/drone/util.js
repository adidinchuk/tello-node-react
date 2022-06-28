
const cv2 = require('opencv4nodejs');
const commandSchema = require('../metadata/commands');
const PERMITTED_COMMANDS = commandSchema.control.concat(commandSchema.read).concat(commandSchema.set);
module.exports = {
    parseStateData: (message) => {
        return message.split(';').map(attr => attr.split(':')).reduce((data, [key, value]) => {
            (value != undefined) ? data[key] = value : void (0);
            return data;
        }, {})
    },
    handleError: (err) => {
        if (err) {
            console.log('ERROR');
            console.log(err);
        }
    },
    drawBlueRect: (image, rect, opts = { thickness: 2 }) => {
        image.drawRectangle(
            rect,
            new cv2.Vec(52, 84, 209),
            opts.thickness,
            cv2.LINE_8
        )
    },
    buildDroneCommand(command, data, schema) {

        if (!PERMITTED_COMMANDS.includes(command))
            throw new Error('Command REJECTED as it is not on the approved list.');

        constructedCommand = command;

        if (data == null)
            return constructedCommand;

        if (command in schema.valueThresholds)
            constructedCommand += ' ' + processSubCommand(data, schema.valueThresholds[command]);

        function processSubCommand(commandComponenet, commandSchema) {
            resultString = '';
            if (commandSchema.hasOwnProperty('values')) 
                if (commandComponenet >= commandSchema.values.min && commandComponenet <= commandSchema.values.max)
                    resultString = commandComponenet;
                else{
                    console.log(data);
                    throw new Error('Provided command value is outside the allowed threshold.');
                }
                    
             else 
                for (var element of Object.keys(commandSchema))
                    resultString += ' ' + processSubCommand(commandComponenet[element], commandSchema[element])
            return resultString;
        }
        return constructedCommand;
    }
}