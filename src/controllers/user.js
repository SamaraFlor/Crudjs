const Router = require('express');
const router = Router();
const listUsers = require('../services/user');
const createUsers = require('../services/user');
const deleteUser = require('../services/user');
const updateUser = require('../services/user');

router.get('/', async (req, res) =>{
   const userList = await listUsers();
   res.send('GET USERS');
});

router.post('/',async (req, res) =>{
    const user = await createUsers(req.body);
    res.status(200).send(user);
 });

 router.delete('/:userId',  async (req, res) =>{
   await deleteUser(req.params.userId);
   res.send();
 });

 router.put('/:userId',  async (req, res) =>{
   await updateUser(req.params.userId, req.body);
   res.send();
 });

module.exports = router ;