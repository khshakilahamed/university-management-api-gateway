import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { RoomService } from './room.service';

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.insertIntoDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.getAllFromDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.getByIdFromDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.updateIntoDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.deleteFromDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const RoomController = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB
};
