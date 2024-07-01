import clubMapping from '@/app/constants/clubMapping';
import { useGeneralData } from '../useGeneralData';
import { IPlayer } from '@/app/types/general/player';

export const usePlayerData = () => {
  const { generalData } = useGeneralData();

  const getPlayer = (element: number) => {
    return generalData?.elements.find((el: IPlayer) => el.id === element);
  };

  const getPlayerData = (element: number) => {
    const player = getPlayer(element);
    if (!player) {
      return {
        name: 'Loading...',
        club: '',
        price: 'Loading...',
        ownership: 'Loading...',
        totalPoints: 'Loading...',
        image: 'Loading...',
      };
    }

    const team = clubMapping.find((team) => team.id === player.team);
    const club = team ? team.name : 'Unknown';
    const name = `${player.first_name} ${player.second_name}`;
    const price = `${player.now_cost / 10.0}`;
    const ownership = `${player.selected_by_percent}`;
    const totalPoints = `${player.total_points}`;
    const image =
      `https://resources.premierleague.com/premierleague/photos/players/250x250/p${player.photo}`.replace(
        '.jpg',
        '.png'
      );

    return { name, club, price, ownership, totalPoints, image };
  };

  return {
    getPlayerData,
  };
};
