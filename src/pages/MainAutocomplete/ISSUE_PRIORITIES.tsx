import { TaskPriorityEnum } from './task-priority.enum';

type IssuePriority = {
  id: number;
  name: string;
  priority: TaskPriorityEnum;
};

export const ISSUE_PRIORITIES: IssuePriority[] = [
  {
    id: 0,
    name: 'No Priority',
    priority: TaskPriorityEnum.NoPriority,
  },

  {
    id: 1,
    name: 'Urgent',
    priority: TaskPriorityEnum.Urgent,
  },
  {
    id: 2,
    name: 'High',
    priority: TaskPriorityEnum.High,
  },
  {
    id: 3,
    name: 'Medium',
    priority: TaskPriorityEnum.Medium,
  },
  {
    id: 4,
    name: 'Low',
    priority: TaskPriorityEnum.Low,
  },
];