import productModel from "../models/productModel.js";
import data from "../../database/products.json"

productModel.importDataFromJSON(data);