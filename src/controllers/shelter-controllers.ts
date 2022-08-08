import { Request, Response } from 'express';
import { pool } from '../database';
import { QueryResult } from 'pg';

export const getShelter = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await
            pool.query('SELECT * FROM shelter');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
};

export const getShelterById = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const response: QueryResult = await pool.query('SELECT * FROM shelter WHERE id = $1', [id]);
    return res.json(response.rows);
};

export const createShelter = async (req: Request, res: Response) => {
    const {animal_id,room_no,date_of_arrival,date_of_adoption,adopted_by_id} = req.body;
    const response = await pool.query('INSERT INTO shelter (animal_id,room_no,date_of_arrival,date_of_adoption,adopted_by_id) VALUES ($1, $2,$3,$4,$5)', [animal_id,room_no,date_of_arrival,date_of_adoption,adopted_by_id]);
    res.json({
        message: 'Animal Added successfully',
        body: {
            Animals: { animal_id,room_no,date_of_arrival,date_of_adoption,adopted_by_id}
        }
    })
};

export const updateShelter = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { date_of_adoption,adopted_by_id } = req.body;

    const response = await pool.query('UPDATE shelter SET date_of_adoption = $1, adopted_by_id = $2 WHERE id = $3', [
        date_of_adoption,adopted_by_id,id
    ]);
    res.json('Updated Successfully');
};

export const deleteShelter = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM shelter where id = $1', [
        id
    ]);
    res.json(`User ${id} deleted Successfully`);
};

