import moment from 'moment';

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
    numberOfMessages:number;
    users?:[string]
}>;

export type userType = Readonly<{
    id:string;
    lastLogin:number;
    createdDate:number;
    loginType:"google" | "email"
}>;

export type userDiscussion = Readonly<{
    discussionId:string;
    unreadMessages:number;
}>;

export function getTimeDate(ts: number): string {
    const now = moment();
    const momentTs = moment(ts);
    if (moment.duration(now.diff(momentTs)) < moment.duration(60 * 60 * 24 * 1000)) {
        return momentTs.fromNow();
    }
    return momentTs.format('MMMM Do YYYY H:m');
}


export const contactPointsCollectionName: string = 'contactPoints';
export const discussionsSubCollectionName: string = 'contactPointDiscussions';
export const messagesSubCollectionName: string = 'contactPointDiscussionMessages';
export const usersCollectionName:string ='users';
export const userDiscussionsCollectionName:string ='userDiscussions';