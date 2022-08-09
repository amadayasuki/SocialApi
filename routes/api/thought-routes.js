//Still need to edit

const router = require('express').Router();
const {
    
} = require('../../controllers/comment-controller');

// /api/thought
router
    .route('/')
    .get(getAllThoughts)
    .post(addThought);

// /api/thought/thoughtID
router
  .route('/:pizzaId/:commentId')
  .put(updateThought)
  .get(getThoughtById)
  .delete(removeThought);

// /api/thought/reactions
router
    .route('/:thoughtId')
    .post(addReaction);
    

// /api/thought/thoughtID/reaction/reactionId
router
.route('/:thoughtId')
.delete(removeReaction);

module.exports = router;
