import {Router} from 'express';
const router = Router();


import { getAnimal, getAnimalById, createAnimal, updateAnimal, deleteAnimal } from '../controllers/animal-controllers';
import {getOwners,getOwnerById,createOwner,updateOwner,deleteOwner} from '../controllers/owner-controllers';

//routes for animals
router.get('/animals', getAnimal);
router.get('/animals/:id', getAnimalById);
router.post('/animals', createAnimal);
router.put('/animals/:id', updateAnimal)
router.delete('/animals/:id', deleteAnimal);

//routes for owners
router.get('/owners',getOwners);
router.get('/owners/:id',getOwnerById);
router.post('/owners',createOwner);
router.put('/owners/:id',updateOwner);
router.delete('/owners/:id',deleteOwner);

export default router;