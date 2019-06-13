export interface Id {
    uuid: string;
    fullName: string;
}

export interface Note {
    createdAt: number;
    note: string;
    id?: string;
}

export interface Post {
    notes: Note[];
    createdAt: any;
    id: string[];
}
