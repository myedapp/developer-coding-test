import {Quest} from './quest.model';
import {Mark} from './mark.model';

export interface UserQuest{
  order: number,
  quest: Quest,
  mark : Mark,
}
