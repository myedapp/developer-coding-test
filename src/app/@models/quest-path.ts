/**
 * Quest Path Model
 */
export class QuestPath {
  order: number;
  quest: Quest;
  mark: Mark;

  constructor(data: any) {
    if (data) {
      this.order = data.order;
      this.quest = data.quest;
      this.mark = data.mark;
    }
  }
}

/**
 * Quest Interface
 * @TODO: Should has it own model
 */
interface Quest {
  id: number;
  name: string;
  is_active?: boolean
}

/**
 * Mark Interface
 * @TODO: Should has it own model
 */
interface Mark {
  submitted: boolean;
  completion: number;
  mark: number;
}
