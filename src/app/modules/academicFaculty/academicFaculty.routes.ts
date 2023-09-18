import express from 'express';
import { AcademicFacultyController } from './academicFaculty.controller';

const router = express.Router();

router.get('/', AcademicFacultyController.getAllFromDB);

router.get('/:id', AcademicFacultyController.getDataById);

router.post('/create-faculty', AcademicFacultyController.insertIntoDB);

router.patch('/:id', AcademicFacultyController.updateOneIntoDB);
router.delete('/:id', AcademicFacultyController.deleteFromDB);

export const academicFacultyRoutes = router;
