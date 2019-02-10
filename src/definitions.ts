export type contactPointType = Readonly<{
  cpId: string;
  userId: string;
  ownerAlias: string;
  name: string;
  description: string;
  createdDate: number;
  modifiedDate: number;
}>;

export type messageType = Readonly<{
  createDate: number;
  from: string;
  content: string;
}>;

export type discussionType = Readonly<{
  connectorId: string;
  connectorAlias: string;
  createdDate: number;
  modifiedDate: number;
  title: string;
}>;
