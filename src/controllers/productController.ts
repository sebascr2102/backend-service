import { Request, Response } from "express";
import { AppDataSource } from "../data.source";
import { Product } from "../entities/Product";

const ProductRepository = AppDataSource.getRepository(Product);

// Obtener (Get) de todos los productos
export const getALLProducts = async(req: Request, res: Response) => {
    try {
        const products = await ProductRepository.find();
        res.json(products);
} catch(error) {
    res. status(500).json({ mesasge: "Error al botener los productos."});
    }
}

// Obtener (Get) un producto por ID
export const getProductByID = async(req: Request, res: Response) => {
 try {
     const product = await ProductRepository.findOneBy({
        id: parseInt(req.params.id)
    });

    if(product) {
        res.json(product);
    } else {
        res.status(404).json({ message: "Producto no encontrado."})
    }
 } catch(error) {
    res. status(500).json({ mesasge: "Error al botener los productos."})
   }

 }