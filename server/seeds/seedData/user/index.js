const { User } = require('../../../models')

const users = [
  { fname: 'Bryan', lname: 'Beard', email: 'beardbryan@gmail.com', phone: '(949) 677-3691' },
  { fname: 'Greg', lname: 'Beard', email: 'beardy@cox.net', phone: '(949) 683-3691' }
]

const insertUser = async ({ fname, lname, email, phone }) => {
  try {
    await User.query().del()
    await User.query().insert({ fname, lname, email, phone })
  } catch (err) {
    // console.error(err);
  }
}

const promises = users.map(insertUser)

exports.seed = async (knex) => Promise.all(promises)
