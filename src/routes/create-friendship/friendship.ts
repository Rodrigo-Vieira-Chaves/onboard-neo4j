export interface CreateFriendship {
  id: number;
  userId1: number;
  userId2: number;
}

export type FriendshipCreation = Pick<CreateFriendship, 'userId1' | 'userId2'>;
