/*
Solution of assignment 4:

Expected output:

Hello pravin
Good Bye Jay
Hello Sanjana
Hello raj
Good Bye Jagdish
Hello akash
Hello harshal
Good Bye jayshri
Hello Pratik
Hello Asmita
Good Bye Janaki
*/

(function() {
    var names = ["pravin", "jay","Sanjana", "raj", "jagdish", "akash", "harshal", "jayshri", "pratik", "Asmta", "janaki"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
