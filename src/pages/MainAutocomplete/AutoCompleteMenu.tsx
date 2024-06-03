// import * as Autocomplete from '../../../../components/Autocomplete/Autocomplete';
import * as Autocomplete from '../Autocomplete';
import { Flex, Text } from '@radix-ui/themes';
import { FieldValues, useController } from 'react-hook-form';
import { BaseAutocompleteProps } from './BaseAutocompleteProps';
import { TaskPriorityIcon } from '../../../../components/TaskPriorityIcon';
import { ISSUE_PRIORITIES } from '../../../../constraints/issue-priorities';

export const TaskPriorityAutocomplete = <TFIeldValues extends FieldValues>({
  name,
  control,
}: BaseAutocompleteProps<TFIeldValues>) => {
  const { field } = useController({
    name,
    control,
  });
  return (
    <Autocomplete.Root
      value={field.value}
      onValueChange={field.onChange as never}>
      <Autocomplete.Trigger
        variant='surface'
        size='2'
        render={(value) => {
          const priority = ISSUE_PRIORITIES.find(
            (priority) => priority.id.toString() === value
          );

          if (!priority) return '';

          return (
            <>
              <TaskPriorityIcon priority={priority.priority} />
              {priority.name}
            </>
          );
        }}
      />
      <Autocomplete.Content>
        <Autocomplete.Input placeholder='Change priority...' />
        <Autocomplete.List>
          {ISSUE_PRIORITIES.map((priority) => (
            <Autocomplete.Item
              key={priority.id}
              keywords={[priority.name]}
              value={priority.id.toString()}>
              <Flex
                gap='3'
                align='center'>
                <TaskPriorityIcon priority={priority.priority} />
                <Text>{priority.name}</Text>
              </Flex>
            </Autocomplete.Item>
          ))}
        </Autocomplete.List>
      </Autocomplete.Content>
    </Autocomplete.Root>
  );
};