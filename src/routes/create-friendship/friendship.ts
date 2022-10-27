export interface Friendship {
  id: number;
  userId1: number;
  userId2: number;
}

export type FriendshipUsersId = Pick<Friendship, 'userId1' | 'userId2'>;
