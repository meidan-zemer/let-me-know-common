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
}>;
export declare function getTimeDate(ts: number): string;
export declare const contactPointsCollectionName: string;
export declare const discussionsSubCollectionName: string;
export declare const messagesSubCollectionName: string;
