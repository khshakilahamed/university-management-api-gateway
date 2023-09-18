import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { AcademicFacultyService } from './academicFaculty.service';

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.insertIntoDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.getAllFromDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getDataById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.getDataById(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOneIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.updateOneIntoDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.deleteFromDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AcademicFacultyController = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
  updateOneIntoDB,
  deleteFromDB
};
