import { Router } from "express";
import {
    getALLProducts,
    getProductByID,
    createProduct,
    updateProduct,
    deleteProduct

} from "../controllers/productController";

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Products
 *  description: CRUD relacionado con los Productos
 */

/**
 * @swagger
 * /api/products:
 *    get:
 *      summary: obtener todos los productos
 *      tags: [Products]
 *      responses:
 *        200:
 *          description: Lista de productos
 */
router.get("/", getALLProducts); // Trae todos los productos
/**
 * @swagger
 * /api/products/{id}:
 *    get:
 *      summary: Obtener un producto por ID
 *      tags: [Products]
 *      parameters: 
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: integer
 *          description: ID del producto
 *      responses:
 *        200:
 *          description: Detalles del producto
 *        404:
 *          description: Producto no encontrado
 */
router.get("/:id", getProductByID); // Trae un solo producto
/**
 * @swagger
 * /api/products:
 *    post:
 *      summary: Crear un nuevo producto
 *      tags: [Products]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - name
 *                - description
 *                - price
 *              properties:
 *                name:
 *                  type: string
 *                description:
 *                  type: string
 *                price:
 *                  type: number
 *      responses:
 *        201:
 *          description: Producto creado
 *        500:
 *          description: Error en el servidors
 */
router.post("/", createProduct); // Crear un producto
router.put("/:id", updateProduct); // Actualizar un producto
router.delete("/:id", deleteProduct); // Borrar un producto

export default router;
