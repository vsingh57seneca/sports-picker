import { Game } from "@/types/Game";
import axios from "axios";
import { useEffect, useState } from "react";

export function useGame(sport: string, gameUrl: string) {
  const [game, setGame] = useState<Game>();

  const fetchGame = async () => {
    const response = await axios.get(
      `/api/foxsports/game?sport=${sport}&gameUrl=${gameUrl}`
    );
    const data = response.data;

    if (data) {
      setGame(data);
    }
  };

  useEffect(() => {
    fetchGame();
  }, []);

  return { game };
}
