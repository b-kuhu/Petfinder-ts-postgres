import { Request, Response } from 'express';
const client = require('../database');
import { QueryResult } from 'pg';

export namespace ShelterController{
export const getShelter = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await
        client.query('SELECT * FROM shelter');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
};

export const getShelterById = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const response: QueryResult = await client.query('SELECT * FROM shelter WHERE id = $1', [id]);
    return res.json(response.rows);
};

export const createShelter = async (req: Request, res: Response) => {
    const {animal_id,room_no,date_of_arrival,date_of_adoption,adopted_by_id} = req.body;
    const response = await client.query('INSERT INTO shelter (animal_id,room_no,date_of_arrival,date_of_adoption,adopted_by_id) VALUES ($1, $2,$3,$4,$5)', [animal_id,room_no,date_of_arrival,date_of_adoption,adopted_by_id]);
    res.json({
        message: 'Details Added successfully',
        body: {
            shelter: { animal_id,room_no,date_of_arrival,date_of_adoption,adopted_by_id}
        }
    })
};

export const updateShelter = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { date_of_adoption,adopted_by_id } = req.body;

    const response = await client.query('UPDATE shelter SET date_of_adoption = $1, adopted_by_id = $2 WHERE id = $3', [
        date_of_adoption,adopted_by_id,id
    ]);
    res.json('Updated Successfully');
};

export const deleteShelter = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    await client.query('DELETE FROM shelter where id = $1', [
        id
    ]);
    res.json(`User ${id} deleted Successfully`);
};

}