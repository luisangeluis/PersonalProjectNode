import { Optional } from "sequelize";
import { AllowNull, Column, DataType, Default, Model, PrimaryKey, Table } from "sequelize-typescript";

interface ProductAttributes {
   id: number;
   title: string;
   description: string;
   price: string;
}

interface ProductCreationAttributes extends Optional<ProductAttributes, "id"> { }

@Table
export default class Product extends Model<ProductAttributes, ProductCreationAttributes> {
   @PrimaryKey
   @Column
   id!: number;

   @AllowNull(false)
   @Column(DataType.STRING(150))
   title!:string;

   @AllowNull(false)
   @Column(DataType.TEXT)
   description!: string;

   @AllowNull(false)
   @Column(DataType.DECIMAL)
   price!:number;

}