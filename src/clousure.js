const checkUsersValid = (goodUsers) => {
    return allUsersValid = (submittedUsers) => {
      return submittedUsers.every(user => {
          return goodUsers.some(sUser => {
              return user.id === sUser.id
        })
    })
  }
}
  module.exports = checkUsersValid