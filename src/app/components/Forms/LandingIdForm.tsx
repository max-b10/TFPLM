'use client'
import { useForm } from 'react-hook-form';
import { SquareArrowOutUpRight } from 'lucide-react';
import { IFormData } from '@/app/types/FormData';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/ui/organisms/Card/Card';
import { Input } from '@/app/ui/molecules/Input/Input';
import { Button } from '@/app/ui/molecules/Button/Button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/app/ui/organisms/Form/Form';

interface IdFormProps {
  onSubmit: (data: IFormData) => void;
}

const LandingIdForm = ({ onSubmit }: IdFormProps) => {
  const form = useForm({
    defaultValues: {
      id: '',
    },
  });

  const handleSubmit = form.handleSubmit(onSubmit);

  const handleSpanClick = () => {
    form.setValue('id', '115660');
  };
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className='mb-5'>
        <CardTitle data-cy="landing-title" className="text-2xl">
          The FPL Manager
        </CardTitle>
        <CardDescription data-cy="landing-description">
          Enter your Fantasy Premier League id to analyse your manager history
          and more!
        </CardDescription>
        <a
          href="https://fpl.team/find-id/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex cursor-pointer items-center text-sm text-blue-500 "
        >
          <span className="cursor-pointer text-sm text-blue-500 underline ">
            How do I find my id?{' '}
          </span>
          <span>
            <SquareArrowOutUpRight className="ml-1 h-3 w-3" />
          </span>
        </a>
        <div className="flex">
          <span className="mr-1 text-sm text-muted-foreground">
            Or try mine:
          </span>
          <span
            className="cursor-pointer text-sm text-primary"
            onClick={handleSpanClick}
          >
            115660
          </span>
        </div>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={handleSubmit} className="mr-5 gap-x-4">
          <CardContent className="grid gap-4">
            <FormField
              control={form.control}
              name="id"
              rules={{
                required: 'ID is required',
                min: { value: 1, message: 'ID must be at least 1' },
                max: {
                  value: 10819231,
                  message: 'ID must be at most 10819231',
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      data-cy="input-id"
                      className="no-spinner"
                      type="number"
                      placeholder="e.g. 123456"
                      {...field}
                    />
                  </FormControl>
                  {error && (
                    <FormMessage data-cy="form-message">
                      {error.message}
                    </FormMessage>
                  )}
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
              <Button data-cy="submit-button" className="w-full" type="submit">
                Enter
              </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default LandingIdForm;