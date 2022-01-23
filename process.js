function processInbox() {
  getProperties();
  getLabels()
  for (query of queries) {
    processQuery(query);
  }
}


function processQuery(query) {
  Logger.log('Processing query.name');
  Logger.log('    ' + query.filter + ' in:inbox -label:gaf');
  let threads = GmailApp.search(query.filter + ' in:inbox -label:gaf',0,maxThreads)
  if (threads.length < 1) {
    Logger.log('    ' + "No threads to process for " +  query.name);
    return;
  } else {
    Logger.log('    ' + "Processing " + threads.length + " threads with for "  + query.name);
  }

  let i = 1;
  for (thread of threads) {
    Logger.log("Processing thread " + i);
    messages = thread.getMessages();
    for (message of messages) {
      switch(query.action){
        case 'pushoverAlert':
          sendPushoverMessage(message,"1")
          break;
        case 'libraryEbookDownload':
          libraryEbookDownload(message); 
          break;
        case 'chargeFitBit':
          chargeFitBit(message);
          break;
        case 'changeAriaBatteries':
          changeAriaBatteries(message);
          break;
        case 'pickUpPrescription':
          pickUpPrescription(message);
          break;
        case 'pickupLibraryBook':
          pickupLibraryBook(message);
          break;
        case 'renewOrReturnLibraryBooks':
          renewOrReturnLibraryBooks(message);
          break;
        case 'saveKindleNotes':
          saveKindleNotes(message);
          break;
        default:
          Logger.error("Action not defined for " + query.name)
      }
    }
    i++
    thread.addLabel(userLabels['gaf']);
  }


}


