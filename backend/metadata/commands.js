module.exports = module.exports = {
    control: [
        'command',
        'takeoff',
        'streamon',
        'streamoff',
        'emergency',
        'land',
        'stop',
        'up',
        'down',
        'left',
        'right',
        'forward',
        'back',
        'cw',
        'ccw',
        'flip',
        'go'        
    ],
    set: [
        'speed',
        'rc'
    ],
    read: [
        'battery?',
        'speed?',
        'time?',
        'wifi?',
        'sdk?',
        'sn?'
    ],
    valueThresholds: {
        'up': { values: { min: 20, max: 500, default: 50 } },
        'down': { values: { min: 20, max: 500, default: 50 } },
        'left': { values: { min: 20, max: 500, default: 50 } },
        'right': { values: { min: 20, max: 500, default: 50 } },
        'forward': { values: { min: 20, max: 500, default: 50 } },
        'back': { values: { min: 20, max: 500, default: 50 } },
        'cw': { values: { min: 1, max: 360, default: 15 } },
        'ccw': { values: { min: 1, max: 360, default: 15 } },
        'flip': { values: { options: ['l', 'r', 'f', 'b'], default: 'f' } },
        'go': {
            'x': {
                values: { min: -500, max: 500 }
            },
            'y': {
                values: { min: -500, max: 500 }
            }, 
            'z': {
                values: { min: -500, max: 500 }
            },
            'speed' : {
                values: { min: 10, max: 100 }
            }
        },
        'curve' : {
            'x1': {
                values: { min: -500, max: 500 }
            },
            'y1': {
                values: { min: -500, max: 500 }
            }, 
            'z1': {
                values: { min: -500, max: 500 }
            },
            'x2': {
                values: { min: -500, max: 500 }
            },
            'y2': {
                values: { min: -500, max: 500 }
            }, 
            'z2': {
                values: { min: -500, max: 500 }
            },
            'speed' : {
                values: { min: 10, max: 100 }
            }
        },
        'jump': {
            'x': {
                values: { min: -500, max: 500 }
            },
            'y': {
                values: { min: -500, max: 500 }
            }, 
            'z': {
                values: { min: -500, max: 500 }
            },
            'speed' : {
                values: { min: 10, max: 100 }
            }
        },
        'speed':{
            'x' : {
                values : { min : -100, max : 100 }  
            }
        },
        'rc' : {
            'a': {
                values : { min : -100, max : 100 }  
            },
            'b': {
                values : { min : -100, max : 100 }  
            }, 
            'c': {
                values : { min : -100, max : 100 }  
            },
            'd' : {
                values : { min : -100, max : 100 }  
            }
        }
    }
}

//TODO

/*
command - go
command - curve
command - go - mission pad
command - curve - mission pad
command - jump

set - rc
set - wifi
set - mon
set - moff 
set - mdirection
set -ap ssid

*/