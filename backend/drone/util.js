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
    }
}