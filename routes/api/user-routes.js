const router = require('express').Router();
const {
 
} = require('../../controllers/');

// /api/user
router
  .route('/')
  .get()
  .post();

// /api/user/id
router
  .route('/:userId')
  .get(getuserById)
  .put(updateUser)
  .delete(deleteUser);

  // /api/user/id/friend/friendId
  router
  .route('/:userId')
  .get(getuserById)
  .put(updateUser)
  .delete(deleteUser);
module.exports = router;
