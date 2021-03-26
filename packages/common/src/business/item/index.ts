import { ItemType, ItemCategory } from '../item/types/index';

export interface IItemResponse {
  id: string;
  isbn_ean_code: string;
  name: string;
  public_price: number;
  dimensions: string;
  weight: number;
  publisher: string;
  category: ItemCategory;
  type: ItemType;
}