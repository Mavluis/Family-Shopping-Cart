export interface Author {
    uuid: string;
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
