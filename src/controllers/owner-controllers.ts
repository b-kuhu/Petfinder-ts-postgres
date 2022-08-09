import { Request, Response } from 'express';
const client = require('../database');
import { QueryResult } from 'pg';


export const getOwners = async(req:Request,res:Response): Promise<Response> =>{
    try {
        const response: QueryResult = await
        client.query('SELECT * FROM owners');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
}
export const getOwnerById = async(req:Request,res:Response): Promise<Response> =>{
        const id = parseInt(req.params.id);
        const response:QueryResult = await
        client.query('SELECT * FROM owners WHERE owner_id = $1',[id]);
        return res.json(response.rows);    
    
}

export const createOwner = async(req:Request,res:Response)=>{
    const {owner_name,contact,address} = req.body;
    const response = await client.query('INSERT INTO owners (owner_name, contact, address) VALUES ($1, $2, $3)', [owner_name,contact,address]);
    res.json({
        message: 'Owner Added successfully',
        body: {
            owners: { owner_name, contact,address}
        }
    })
}

export const updateOwner = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const {  owner_name,contact,address} = req.body;

    const response = await client.query('UPDATE owners SET owner_name = $1, contact = $2 , address= $3 WHERE owner_id = $4', [
       owner_name,
        contact,
        address,id
    ]);
    res.json('Updated Successfully');
};

export const deleteOwner = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    await client.query('DELETE FROM owners where owner_id = $1', [
        id
    ]);
    res.json(`Owner ${id} deleted Successfully`);
};

