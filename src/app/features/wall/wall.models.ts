export interface Author {
    uuid: string;
    avatarUrl: string;
    fullName: string;
}

export interface Comment {
    author?: Author;
    message: string;
    createdAt: number;
    id?: string;
}

export interface Post {
    likes: string[];
    owner: Author;
    author: Author;
    content: string;
    comments: Comment[];
    createdAt: any;
    id: string;
}

export interface FriendRequest {
    uuid: string;
    avatarUrl?: string;
    fullName: string;
    request: Request;
}

interface Request {
    _id: string;
    uuid: string;
    confirmed: boolean;
    createdAt: string;
    confirmedAt?: string;
    rejectedAt?: any;
}