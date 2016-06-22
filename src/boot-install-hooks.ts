/// <reference path="./c2/Events/KeyboardEventParameter.ts" />
/// <reference path="./c2/EventHandler.ts" />
/// <reference path="./common/Frida.ts" />

declare var global;
declare var rpc;

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
}

Interceptor.attach(ptr('0x008D99A0'), {
    onEnter: function (args) {
        let eventParamAddress = ptr(args[1]);

        let keyboardEventParam = new C2.Events.KeyboardEventParameter(
            Memory.readU8(eventParamAddress.add(0x00)),
            Memory.readU32(eventParamAddress.add(0x04)),
            Memory.readU8(eventParamAddress.add(0x10))
        );

        // console.log(JSON.stringify(keyboardEventParam));
        C2.Events.EventHandler.KeyboardEventCallback(keyboardEventParam);
    }
});



Interceptor.attach(ptr('0x00418E40'), {
    onEnter: function (args) {
        let pString01 = ptr(args[0]);
        let String01 = Memory.readCString(pString01);
        writeLog(`Parsing tag: "${String01}"`);
    }
})

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

declare var send;

Interceptor.attach(ptr('0x004144B0'), {
    onEnter: function (args) {
        let pFilename = ptr(args[0]);
        let filename = Memory.readAnsiString(pFilename);
        writeLog(`Loading Script File: "${filename}"`);
    }
})