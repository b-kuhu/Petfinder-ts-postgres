import {Router} from 'express';
const router = Router();


import {AnimalController} from '../controller/animal.controller';
import {OwnerController} from '../controller/owner.controller';
import {ShelterController} from '../controller/shelter.controller';

//routes for animals
router.get('/animals', AnimalController.getAnimal);
router.get('/animals/:id', AnimalController.getAnimalById);
router.post('/animals', AnimalController.createAnimal);
router.put('/animals/:id', AnimalController.updateAnimal)
router.delete('/animals/:id', AnimalController.deleteAnimal);

//routes for owners
router.get('/owners',OwnerController.getOwners);
router.get('/owners/:id',OwnerController.getOwnerById);
router.post('/owners',OwnerController.createOwner);
router.put('/owners/:id',OwnerController.updateOwner);
router.delete('/owners/:id',OwnerController.deleteOwner);

//routes for shelter
router.get('/shelter',ShelterController.getShelter);
router.get('/shelter/:id',ShelterController.getShelterById);
router.post('/shelter',ShelterController.createShelter);
router.put('/shelter/:id',ShelterController.updateShelter);
router.delete('/shelter/:id',ShelterController.deleteShelter);

export default router;