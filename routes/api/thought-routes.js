//Still need to edit

const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    addReaction,
    removeReaction,
    updateThought,
    deleteThought,

} = require('../../controllers/thought-controller');

// /api/thought
router
    .route('/')
    .get(getAllThoughts)
    .post(addThought);

// /api/thought/thoughtID
router
  .route('/:thoughtId')
  .put(updateThought)
  .get(getThoughtById)
  .delete(deleteThought);

// /api/thought/reactions
router
    .route('/:thoughtId/reactions')
    .post(addReaction);
    

// /api/thought/thoughtID/reaction/reactionId
router
.route('/:thoughtId/reactions/:reactionId')
.delete(removeReaction);

module.exports = router;
