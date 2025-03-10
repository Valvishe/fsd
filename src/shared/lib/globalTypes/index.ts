export type LikeState = "likes" | "dislikes" | undefined;

export type RateButtonResponse = "setLike" | "setDislike" | "removeLike" | "removeDislike";

export enum RateButtonStateEnum {
  LIKED = "liked",
  DISLIKED = "disliked",
}

declare global {
  export type Nullable<T> = T | null;

  export type ElementType<T> = T extends (infer U)[] ? U : never;
}

export {};
