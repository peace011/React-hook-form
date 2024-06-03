import {
    DotsHorizontalIcon,
    ExclamationTriangleIcon,
  } from '@radix-ui/react-icons';
  import { TaskPriorityEnum } from '../constraints/task-priority.enum';
  
  export type TaskPriorityIconProps = Omit<
    React.ComponentPropsWithoutRef<'svg'>,
    'children'
  > & {
    priority: TaskPriorityEnum;
  };
  
  export const TaskPriorityIcon = ({
    priority,
    ...svgProps
  }: TaskPriorityIconProps) => {
    if (priority === TaskPriorityEnum.NoPriority)
      return <DotsHorizontalIcon {...svgProps} />;
    else if (priority === TaskPriorityEnum.Urgent)
      return <ExclamationTriangleIcon {...svgProps} />;
    else if (priority === TaskPriorityEnum.High)
      return (
        <svg
          width='15'
          height='15'
          viewBox='0 0 18 18'
          fill='currentcolor'
          xmlns='http://www.w3.org/2000/svg'
          {...svgProps}>
          <path d='M2.8125 7.5H1.875C1.35723 7.5 0.9375 7.91973 0.9375 8.4375V12.1875C0.9375 12.7053 1.35723 13.125 1.875 13.125H2.8125C3.33027 13.125 3.75 12.7053 3.75 12.1875V8.4375C3.75 7.91973 3.33027 7.5 2.8125 7.5Z' />
          <path d='M7.5 4.6875H6.5625C6.04473 4.6875 5.625 5.10723 5.625 5.625V12.1875C5.625 12.7053 6.04473 13.125 6.5625 13.125H7.5C8.01777 13.125 8.4375 12.7053 8.4375 12.1875V5.625C8.4375 5.10723 8.01777 4.6875 7.5 4.6875Z' />
          <path d='M12.1875 1.875H11.25C10.7322 1.875 10.3125 2.29473 10.3125 2.8125V12.1875C10.3125 12.7053 10.7322 13.125 11.25 13.125H12.1875C12.7053 13.125 13.125 12.7053 13.125 12.1875V2.8125C13.125 2.29473 12.7053 1.875 12.1875 1.875Z' />
        </svg>
      );
    else if (priority === TaskPriorityEnum.Medium)
      return (
        <svg
          width='15'
          height='15'
          viewBox='0 0 18 18'
          fill='currentcolor'
          xmlns='http://www.w3.org/2000/svg'
          {...svgProps}>
          <path d='M2.8125 7.5H1.875C1.35723 7.5 0.9375 7.91973 0.9375 8.4375V12.1875C0.9375 12.7053 1.35723 13.125 1.875 13.125H2.8125C3.33027 13.125 3.75 12.7053 3.75 12.1875V8.4375C3.75 7.91973 3.33027 7.5 2.8125 7.5Z' />
          <path d='M7.5 4.6875H6.5625C6.04473 4.6875 5.625 5.10723 5.625 5.625V12.1875C5.625 12.7053 6.04473 13.125 6.5625 13.125H7.5C8.01777 13.125 8.4375 12.7053 8.4375 12.1875V5.625C8.4375 5.10723 8.01777 4.6875 7.5 4.6875Z' />
          <path
            opacity='0.2'
            d='M12.1875 1.875H11.25C10.7322 1.875 10.3125 2.29473 10.3125 2.8125V12.1875C10.3125 12.7053 10.7322 13.125 11.25 13.125H12.1875C12.7053 13.125 13.125 12.7053 13.125 12.1875V2.8125C13.125 2.29473 12.7053 1.875 12.1875 1.875Z'
          />
        </svg>
      );
  
    return (
      <svg
        width='15'
        height='15'
        viewBox='0 0 18 18'
        fill='currentcolor'
        xmlns='http://www.w3.org/2000/svg'>
        <path d='M2.8125 8.375H1.875C1.35723 8.375 0.9375 8.79473 0.9375 9.3125V13.0625C0.9375 13.5803 1.35723 14 1.875 14H2.8125C3.33027 14 3.75 13.5803 3.75 13.0625V9.3125C3.75 8.79473 3.33027 8.375 2.8125 8.375Z' />
        <path
          opacity='0.2'
          d='M7.5 5.5625H6.5625C6.04473 5.5625 5.625 5.98223 5.625 6.5V13.0625C5.625 13.5803 6.04473 14 6.5625 14H7.5C8.01777 14 8.4375 13.5803 8.4375 13.0625V6.5C8.4375 5.98223 8.01777 5.5625 7.5 5.5625Z'
        />
        <path
          opacity='0.2'
          d='M12.1875 2.75H11.25C10.7322 2.75 10.3125 3.16973 10.3125 3.6875V13.0625C10.3125 13.5803 10.7322 14 11.25 14H12.1875C12.7053 14 13.125 13.5803 13.125 13.0625V3.6875C13.125 3.16973 12.7053 2.75 12.1875 2.75Z'
        />
      </svg>
    );
  };