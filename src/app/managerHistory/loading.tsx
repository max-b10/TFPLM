import { LoaderIcon } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <LoaderIcon className="animate-spin" />
    </div>
  );
}
