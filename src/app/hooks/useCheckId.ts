import { RootState } from '@/lib/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from "next/navigation";

export const useCheckId = () => {
    const router = useRouter()

  const fplIdString = useSelector((state: RootState) => state.id.value);
  const fplId = Number(fplIdString);
  console.log('fplidstring:' + fplIdString)

  useEffect(() => {
    if (fplId === 0 || isNaN(fplId)) {
        router.push('/landing');

    }
  }, [fplId, router]);
};
