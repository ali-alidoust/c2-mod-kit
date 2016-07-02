import { KeyboardEventParameter } from './c2/Events/KeyboardEventParameter';
import { EventHandler } from './c2/EventHandler';

var f = new global.File('./c2-mod-kit.log', 'wt');

function timestamp() {
    // Create a date object with the current time
    var now = new Date();

    // Create an array with the current month, day and time
    var date = [now.getFullYear(), now.getMonth() + 1, now.getDate()];

    // Create an array with the current hour, minute and second
    var time = [now.getHours(), now.getMinutes(), now.getSeconds()];

    // Determine AM or PM suffix based on the hour
    var suffix = (time[0] < 12) ? "AM" : "PM";

    // Convert hour from military time
    time[0] = (time[0] < 12) ? time[0] : time[0] - 12;

    // If hour is 0, set it to 12
    time[0] = time[0] || 12;

    // If seconds and minutes are less than 10, add a zero
    var temp = [];
    for (var i = 0; i < 3; i++) {
        if (time[i] < 10) {
            temp[i] = "0" + time[i];
        } else {
            temp[i] = time[i];
        }
    }
    time = temp;

    // Return the formatted string
    return date.join("/") + " " + time.join(":") + " " + suffix;
}

function writeLog(line) {
    f.write(`[${timestamp()}] ${line}\n`);
    f.flush();
}

Interceptor.attach(ptr('0x008D99A0'), {
    onEnter: function (args) {
        let eventParamAddress = ptr(args[1]);

        let keyboardEventParam = new KeyboardEventParameter(
            Memory.readU8(eventParamAddress.add(0x00)),
            Memory.readU32(eventParamAddress.add(0x04)),
            Memory.readU8(eventParamAddress.add(0x10))
        );

        // console.log(JSON.stringify(keyboardEventParam));
        EventHandler.KeyboardEventCallback(keyboardEventParam);
    }
});



// Interceptor.attach(ptr('0x00418E40'), {
//     onEnter: function (args) {
//         let pString01 = ptr(args[0]);
//         let String01 = Memory.readCString(pString01);
//         writeLog(`Tag parsed: "${String01}"`);
//     }
// })

// Interceptor.attach(ptr('0x00907C00'), {
//     onEnter: function (args) {
//         let pString01 = ptr(args[0]);
//         let pString02 = ptr(args[1]);
//         let String01 = Memory.readCString(pString01);
//         let String02 = Memory.readCString(pString02);  
//         if (String01.toLowerCase() == String02.toLowerCase()) {
//             writeLog(`Matched string: "${String01}"`);
//         }
//     }
// })

// Interceptor.attach(ptr('0x00916110'), {
//     onEnter: function (args) {
//         let pString01 = ptr(args[0]);
//         let String01 = Memory.readCString(pString01);  
//         // if (String01.toLowerCase() == String02.toLowerCase()) {
//         console.log(`Opening Bitmap: "${String01}"`);
//         // }
//     }
// })

Interceptor.attach(ptr('0x004144B0'), {
    onEnter: function (args) {
        let pFilename = ptr(args[0]);
        let filename = Memory.readAnsiString(pFilename);
        writeLog(`Loading Script File: "${filename}"`);
    }
});

Interceptor.attach(ptr('0x004165A0'), {
    onEnter: function (args) {
        let pError = ptr(args[0]);
        let error = Memory.readAnsiString(pError);
        error = error.replace(/\r?\n$/gm, '');
        writeLog(`Error While Executing Script: "${error}"`);
    }
});

Interceptor.attach(ptr('0x008F74DE'), {
    onEnter: function (args) {
        this.pResult = ptr(args[0]);
    },
    onLeave: function (retval) {
        let result = Memory.readAnsiString(this.pResult);
        // error = error.replace(/\r?\n$/gm, '');
        writeLog(`Result by sprintf: "${result}"`);
    }
});

Interceptor.attach(ptr('0x00418E40'), {
    onEnter: function (args) {
        this.pTagName = ptr(args[0]);
    },
    onLeave: function (retval) {
        if (ptr(retval).isNull()) {
            let tagName = Memory.readAnsiString(this.pTagName);
            writeLog(`Tag not found: "${tagName}"`);
        }
    }
});