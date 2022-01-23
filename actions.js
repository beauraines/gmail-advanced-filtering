function libraryEbookDownload(message) {
    const task = {
        task:'Download e-book',
        priority:1,
        list:'personal',
        startDate:'today',
        dueDate:'2 days',
        tags:[],
        url:'https://link.overdrive.com/hold-page?websiteId=12',
        note:message.getPlainBody()
      }
    addRememberTheMilkTaskByEmail(task);
}

function pickupLibraryBook(message) {
    const task = {
        task:'Pick up library book on hold',
        priority:1,
        list:'personal',
        startDate:'today',
        dueDate:'5 days',
        tags:[],
        location: 'Library',
        note:message.getPlainBody()
      }
    addRememberTheMilkTaskByEmail(task);
}

function renewOrReturnLibraryBooks(message) {
    const task = {
        task:'Renew or return library books',
        priority:1,
        list:'personal',
        startDate:'today',
        dueDate:'3 days',
        tags:['@computer'],
        location: 'Library',
        note:message.getPlainBody()
      }
    addRememberTheMilkTaskByEmail(task);
}

function pickUpPrescription(message) {
    const task = {
        task:'Pick up prescription',
        priority:1,
        list:'personal',
        startDate:'today',
        dueDate:'5 days',
        location: 'Costco',
        note: message.getPlainBody()
      }
    addRememberTheMilkTaskByEmail(task);
}

function chargeFitBit() {
    const task = {
        task:'Charge smartwatch',
        priority:1,
        list:'personal',
        startDate:'today',
        dueDate:'today'
      }
    addRememberTheMilkTaskByEmail(task);
}

function changeAriaBatteries() {
    const task = {
        task:'Replace Aria batteries',
        priority:2,
        list:'personal',
        startDate:'today',
        dueDate:'3 days'
      }
    addRememberTheMilkTaskByEmail(task);
}

function saveKindleNotes(message) {
    Logger.info('Saving Kindle Notes to Drive');
    // TODO - create the Kindle Notes folder if it does not exist
    let kindleNotesFolder = DriveApp.getFoldersByName('Kindle Notes')[0];
    let savedFiles = [];
    let attachments = message.getAttachments();
    for (const attachment of attachments) {
      if (attachment.getName().endsWith('.pdf')) {
        let file = DriveApp.createFile(attachment.copyBlob());
        // FIXME getting a mystery exception that just says try again later
        file = file.setName(attachment.getName()).moveTo(kindleNotesFolder);
        savedFiles.push(file.toString());
      }
    }
    console.log(savedFiles);
}