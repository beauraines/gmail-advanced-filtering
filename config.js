

const queries = [
  {"filter":"label:pager","name":"Pager Alert","action":"pushoverAlert"},
  // {"filter":"label:Heather","name":"Heather Messages","action":"Heather"},
  {"filter":"from:(messages-noreply@fitbit.com) (Versa 3 battery level is low)","name":"Charge Fitbit","action":"chargeFitBit"},
  {"filter":"subject:(Your Aria battery level is low)","name":"Aria scale","action":"changeAriaBatteries"},
  {"filter":"label:sms (Costco Rx)  (is ready for pick up)","name":"Pick up prescription","action":"pickUpPrescription"},
  {"filter":"from:kcls.org  subject:(Materials on hold)","name":"Pick up library book","action":"pickupLibraryBook"},
  {"filter":"subject:(Courtesy Due Date Reminder from KCLS)","name":"Return or renew library books","action":"renewOrReturnLibraryBooks"},
  {"filter":"from:overdrive subject:'digital hold available to borrow'","name":"ebook ready for download","action":"libraryEbookDownload"}
]

const rtmTaskAddress = getProperty('RTM_EMAIL_ADDRESS');
const maxThreads = getProperty('MAX_THREADS');

const pushoverToken = getProperty('PUSHOVER_TOKEN');
const pushoverUser = getProperty('PUSHOVER_USER');

// **************** Scripts 

function getProperties() {
var scriptProperties = PropertiesService.getScriptProperties();
Logger.log(scriptProperties.getKeys());
console.log(scriptProperties.getProperties());
return scriptProperties.getProperties();
}

function getProperty(key) {
console.log("looking up property for key " + key);
var scriptProperties = PropertiesService.getScriptProperties();
if (scriptProperties.getKeys().includes(key)) {
  return scriptProperties.getProperty(key);
} else {
  throw 'Property not defined: ' + key;
}
}

function setProperty(key,value){
var scriptProperties = PropertiesService.getScriptProperties();
if (scriptProperties.getKeys().includes(key)) {
  scriptProperties.setProperty(key,value);
  console.log('Overwriting ' + key + ' to ' + value);
  return 'Overwriting ' + key + ' to ' + value
} else {
  scriptProperties.setProperty(key,value);
  console.log('Set ' + key + ' to ' + value);
  return 'Set ' + key + ' to ' + value

}

}

function clearProperty(key) {
var scriptProperties = PropertiesService.getScriptProperties();
 if (scriptProperties.getKeys().includes(key)) {
    scriptProperties.deleteProperty(key);
    return 'Property ' + key + 'deleted.'
} else {
  return 'Key not found: ' + key;
}
}