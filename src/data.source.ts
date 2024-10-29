import "reflect-metadata";
import { DataSource } from "typeorm";
import { Product } from "./entities/Product";

export const AppDataSource = new DataSource ({
    type: "sqlite", // Tipo  de base de datos
    database: "database,sqlite", // Nombre de base de datos
    synchronize: true, // Sincronizacion activa
    logging: false, // Sin inicio de sesion en la BD
    entities: [Product], // Se agregan las entidades creadas
    migrations: [],
    subscribers: []
});