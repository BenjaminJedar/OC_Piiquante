const express = require('express');
const router = express.Router();
const auth = require('../middleware/authorize');
const multer = require('../middleware/multer-config');
const sauceCtrl = require('../controllers/sauce');

//Route permettant d'afficher toutes les sauces
router.get('/', auth, sauceCtrl.getAllSauce);

//Route pour créer une sauce
router.post('/', auth, multer, sauceCtrl.createSauce);

//Route pour afficher une sauce en particulier
router.get('/:id', auth, sauceCtrl.getOneSauce);

//Route pour mofifier une sauce
router.put('/:id', auth, multer, sauceCtrl.modifySauce);

//Route pour supprimer une sauce
router.delete('/:id', auth, sauceCtrl.deleteSauce);

// Route pour la gestion les "likes/dislikes"
router.post('/:id/like', auth, sauceCtrl.likeSauce);

module.exports = router;