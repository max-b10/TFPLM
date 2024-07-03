import { TableCell, TableRow } from '@/app/ui/organisms/Table/Table';
import { ILeague } from '../../../../types/league/leagueData';

interface TableRowLeagueProps {
  league: ILeague;
  onRowClick: (league: ILeague) => void;
}

const TableRowLeague: React.FC<TableRowLeagueProps> = ({
  league,
  onRowClick,
}) => {
  return (
    <TableRow
      key={league.id}
      className="cursor-pointer bg-card"
      onClick={() => onRowClick(league)}
    >
      <TableCell className="pl-6">
        <div className="font-medium">{league.name}</div>
      </TableCell>
      <TableCell>
        <div className="font-medium">{league.entry_rank.toLocaleString()}</div>
      </TableCell>
      <TableCell>
        <div className="font-medium">{league.rank_count.toLocaleString()}</div>
      </TableCell>
    </TableRow>
  );
};

export default TableRowLeague;
