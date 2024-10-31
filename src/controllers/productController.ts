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

 // Crear (POST) un producto
 export const createProduct = async(req: Request, res: Response) =>{
    try {
        const { name, description, price } = req.body; // Sacando los datos del Request
        const product = new Product();
        product.name = name;
        product.description = description;
        product.price = price;
        await  ProductRepository.save(product);
        res.status(201).json(product);
    } catch(error) {
        res.status(500).json({
            mesagge: "Error al crear el producto"
        });
    }
 };

 // Actualizar (PUT) un producto
 export const updateProduct = async(req: Request, res: Response) =>{
    try {
        const { name, description, price } = req.body;
        const product = await ProductRepository.findOneBy ({
            id: parseInt(req.params.id)
        });

        if (product) {
            product.name = name ?? product.name;
            product.description  = description ?? product.description;
            product.price = price ?? product.price;
            await ProductRepository.save(product);
            res.json(product);
        } else {
            res.status(404).json({
                message: "Producto no encontrado"
            });
        }   
    } catch(error) {
        res.status(500).json({
            mesagge: "Producto no encontrado."
        });
    }
}

 // Borrar (DELETE) un producto
 export const deleteProduct = async(req: Request, res: Response) => {
    try {

        const product = await ProductRepository.findOneBy ({
            id: parseInt(req.params.id)
        });

        if (product) {
            await ProductRepository.remove(product);
            res.json(product);
        } else {
            res.status(404).json({
                message: "Producto eliminado"
            });
        }

    } catch(error) {
        res.status(500).json({
           message: "Error al borrar."
        });
    }
 };
