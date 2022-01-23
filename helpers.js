/* Makes a hash table of "name" -> label */
function labelsToArray(labels) {
  let table = [];
  for (const label of labels) {
    table[label.getName()] = label;
  }
  return table;
}

/* Cache of user labels, indexed by name string */
let userLabels = [];
function getLabels() {
  userLabels = labelsToArray(GmailApp.getUserLabels());
  if (userLabels.indexOf('gaf') <0  ){
    GmailApp.createLabel("gaf");
  }
}
