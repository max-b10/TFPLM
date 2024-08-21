import { TableCell, TableRow } from '@/app/ui/organisms/Table/Table';
import { ITeamEntry } from '../../../../types/league/leagueData';
import { useRouter } from 'next/navigation';

interface TableRowMemberProps {
  fplId: number;
  member: ITeamEntry;
}

const TableRowMember: React.FC<TableRowMemberProps> = ({ member, fplId }) => {
  const router = useRouter();
  const managerId = member.entry;
  const handleRowClick = () => {
    if (fplId !== managerId) {
      router.push(`/managerCompareDetails/${managerId}`);
    } else {
      return;
    }
  };
  return (
    <TableRow
      onClick={handleRowClick}
      key={member.id}
      className="cursor-pointer bg-card"
    >
      <TableCell className="pl-6 sm:table-cell">
        <div className="grid gap-1">
          <p className="text-sm font-medium leading-none">
            {member.entry_name}
          </p>
          <p className="text-sm text-muted-foreground">{member.player_name}</p>
        </div>
      </TableCell>
      <TableCell className="sm:table-cell">
        <div className="grid gap-1">
          <p className="text-sm">{member.total}</p>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default TableRowMember;
