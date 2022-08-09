const router = require('express').Router();
const {

} = require('../../controllers/comment-controller');

// /api/thought
router

// /api/thought/thoughtID
router
  .route('/:pizzaId/:commentId')
  .put(addReply)
  .delete(removeComment);


router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;
