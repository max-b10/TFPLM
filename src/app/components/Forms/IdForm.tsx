import { IFormData } from '@/app/types/FormData';
import { Button } from '@/app/ui/molecules/Button/Button';
import { Input } from '@/app/ui/molecules/Input/Input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from '@/app/ui/organisms/Form/Form';
import { RootState } from '@/lib/store';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

interface IdFormProps {
  onSubmit: (data: IFormData) => void;
}

const IdForm = ({ onSubmit }: IdFormProps) => {
  const fplIdString = useSelector((state: RootState) => state.id.value);
  const form = useForm({
    defaultValues: {
      id: '',
    },
  });

  const handleSubmit = form.handleSubmit(onSubmit);

  return (
    <Form {...form}>
      <form className="flex w-full justify-end" onSubmit={handleSubmit}>
        <FormField
          control={form.control}
          name="id"
          rules={{
            required: 'Enter Id',
            min: { value: 1, message: 'ID must be at least 1' },
            max: {
              value: 10819231,
              message: 'ID must be at most 10819231',
            },
          }}
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center">
                <FormControl>
                  <Input
                    type="number"
                    className="no-spinner w-full md:w-40"
                    placeholder={fplIdString}
                    {...field}
                  />
                </FormControl>
              </div>
            </FormItem>
          )}
        />

        <Button className="ml-2 md:w-24" type="submit">
          Change Id
        </Button>
      </form>
    </Form>
  );
};

export default IdForm;
