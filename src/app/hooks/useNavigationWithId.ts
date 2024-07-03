import { setId } from '@/lib/id/idSlice';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { IFormData } from '../types/FormData';

export const useNavigationWithId = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (data: IFormData) => {
    dispatch(setId(data.id));
    router.push('/dashboard');
  };

  return handleSubmit;
};
