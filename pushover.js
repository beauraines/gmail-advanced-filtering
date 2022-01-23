function sendPushoverMessage(message,priority = "0") {
    var data = {
      "token": pushoverToken,
      "user": pushoverUser,
      "title": message.getSubject(),
      "message": message.getPlainBody(),
      "priority" : priority,
      "sound": "bike"
    };

    Logger.log('Sending pager alert to PushOver',data.title);
    // var header = {"user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Mobile Safari/537.36"};
    var header;

    var options = {
      'method' : 'POST',
      'headers' : header,
      'payload': data
    };

    response = UrlFetchApp.fetch('https://api.pushover.net/1/messages.json', options);
}