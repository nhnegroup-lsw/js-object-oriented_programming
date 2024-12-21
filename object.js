var memberObject = {
    manager:'egoing',
    developer:'graphittie',
    designer:'leezche'
}

console.log('memberObject.designer', memberObject.designer);
console.log("memberObject['designer']", memberObject['designer']);

delete memberObject.manager;
console.log('after delete memberObject.manager', memberObject.manager);

