// const subject = "Test message";
// const body = "This is a test that we suggest";

// const task = {
//   task:'Download e-book',
//   priority:1,
//   list:'personal',
//   startDate:'today',
//   dueDate:'2 days',
//   tags:[],
//   url:'https://link.overdrive.com/hold-page?websiteId=12',
//   note:message.getPlainBody()
// }

function addRememberTheMilkTaskByEmail(task) {

  let quickAddSubject = [];
  quickAddSubject.push(task.task);

  let priority=task.priority?'!'+task.priority:'';
  quickAddSubject.push(priority);

  let list=task.list?'#'+task.list:'Inbox';
  quickAddSubject.push(list);

  let startDate=task.startDate?'~'+task.startDate:'';
  quickAddSubject.push(startDate);

  let dueDate=task.dueDate?'^'+task.dueDate:'';
  quickAddSubject.push(dueDate);

  let tags = [];
  if (task.tags) {
    tags = task.tags;
  }
  tags.push('#gaf');  
  tags = tags.join(' ');
  quickAddSubject.push(tags);
  
  let estimate = task.estimate?'='+task.estimate:'';
  quickAddSubject.push(estimate);

  let url = task.url?task.url:'';
  quickAddSubject.push(url);

  Logger.log(quickAddSubject.join(" "));
  
  GmailApp.sendEmail(rtmTaskAddress,quickAddSubject.join(" "),task.note )
}

