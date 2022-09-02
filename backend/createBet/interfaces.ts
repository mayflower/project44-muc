export interface User {
    userId?: string;
    nickname: string;
    mail: string;
}
export interface Bet {
    betId?: string;
    title: string;
    description: string;
    criteria: Array<{ criteriaTitle: string; criteriaDescription: string }>;
    expirationTime: string;
    creator: User;
    minimumWager: number;
    competitors: Array<User>;
}
