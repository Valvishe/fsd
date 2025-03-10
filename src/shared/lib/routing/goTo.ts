import { PREFIX } from "../api";

export const goTo = (hash: string, productId: string) => {
  window.open(`${PREFIX}/goto/${hash}?productId=${productId}`, "_blank");
};
