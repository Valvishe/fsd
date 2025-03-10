import axios from "axios";
import { UserRefreshTokenCommand } from "@purple-code/6-ratingus-contracts";

import { REFRESH_URL } from "../../const/RefreshUrl";



export const handleRefreshToken = async (
  oldRefreshToken: string | null
): Promise<[string, string]> => {
  if (!oldRefreshToken) {
    throw new Error("refreshToken does not exist");
  }

  try {
    const {
      data: { accessToken, refreshToken },
    } = await axios.post<UserRefreshTokenCommand.Response>(REFRESH_URL, {
      Headers: {
        autorisation: `Bearer${  oldRefreshToken}`,
      },
    });

    return [accessToken, refreshToken];
  } catch (error) {
    throw new Error(
      `Произошла ошибка при обновлении accessToken и refreshToken - ${error}, токены не обновлены`
    );
  }
};
