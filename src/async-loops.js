function loadUsers(userIds, load, done) {
    var users = []
    var callback = (user)=>{
        users.push(user);
    }
    userIds.forEach(userId => { load(userId,callback); });
    done(users);
  }
  
  module.exports = loadUsers