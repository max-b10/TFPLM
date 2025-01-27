import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/app/ui/molecules/Avatar/Avatar';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/ui/organisms/Card/Card';

interface IManagerProfileProps {
  name: string;
  src?: string;
}

const ManagerProfileCard: React.FC<IManagerProfileProps> = ({ name, src }) => {
  return (
    <Card className="flex h-full min-w-full flex-grow flex-col border border-primary">
      <CardHeader className="mb-4 flex flex-row items-start rounded-tl-lg rounded-tr-lg bg-muted/50 px-4 py-3">
        <div className="flex w-full justify-center">
          <CardTitle className="mb-2 flex items-center overflow-hidden whitespace-nowrap text-lg sm:text-sm md:text-lg">
            {name}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex w-full justify-center">
          <Avatar className="sm:h-30 sm:w-30 h-24 w-24 border border-secondary-foreground">
            <AvatarImage src={src} alt="Avatar" />
            <AvatarFallback className="flex justify-center bg-card text-3xl text-primary">
              ?
            </AvatarFallback>
          </Avatar>
        </div>
      </CardContent>
    </Card>
  );
};

export default ManagerProfileCard;
