import { PartialUserResponse } from '../user/index';
import { AnnouncementItemCondition } from './types/index';
import { IItemResponse } from '../item/index';

export interface IAnnouncementResponse {
  id: string;
  user: PartialUserResponse;
  description: string;
  item: IItemResponse;
  condition: AnnouncementItemCondition;
  sellingPrice: string;
}
