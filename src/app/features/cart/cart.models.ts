export interface Author {
    uuid: string;
    fullName: string;
    id: Products;
}

export interface Note {
    createdAt: number;
    note: string;
    id?: string;
    products: any;
}

export interface Post {
    notes: Note[];
    createdAt: any;
    id: Products;
}

export interface Products {
    beer: boolean;
    biscuits: boolean;
    cereals: boolean;
    chips: boolean;
    fruit: boolean;
    milk: boolean;
    potatoes: boolean;
    tomatobrick: boolean;
    water: boolean;
    yogourt: boolean;
    butter: boolean;
    coldcuts: boolean;
    eggs: boolean;
    eggplant: boolean;
    macaroni: boolean;
    mushrooms: boolean;
    olives: boolean;
    sausages: boolean;
    spaghetti: boolean;
    squash: boolean;
    apples: boolean;
    celery: boolean;
    cleaningsupplies: boolean;
    melon: boolean;
    onions: boolean;
    parchmentpaper: boolean;
    pears: boolean;
    pizza: boolean;
    strawberries: boolean;
    zucchini: boolean;
    bananas: boolean;
    bottledwater: boolean;
    cherry: boolean;
    coffee: boolean;
    deodorant: boolean;
    glasscleaner: boolean;
    orangejuice: boolean;
    redwine: boolean;
    toiletpaper: boolean;
    watermelon: boolean;
    notes: string;
}
