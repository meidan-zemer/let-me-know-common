export declare type contactPointType = Readonly<{
    cpId: string;
    userId: string;
    ownerAlias: string;
    name: string;
    description: string;
    createdDate: number;
    modifiedDate: number;
}>;
export declare type messageType = Readonly<{
    createDate: number;
    from: string;
    content: string;
}>;
export declare type discussionType = Readonly<{
    connectorId: string;
    connectorAlias: string;
    createdDate: number;
    modifiedDate: number;
    title: string;
    numberOfMessages: number;
    users?: [string];
}>;
export declare type userType = Readonly<{
    id: string;
    lastLogin: number;
    createdDate: number;
}>;
export declare type userDiscussion = Readonly<{
    discussionId: string;
    unreadMessages: number;
}>;
export declare function getTimeDate(ts: number): string;
export declare const contactPointsCollectionName: string;
export declare const discussionsSubCollectionName: string;
export declare const messagesSubCollectionName: string;
export declare const usersCollectionName: string;
export declare const userDiscussionsCollectionName: string;
