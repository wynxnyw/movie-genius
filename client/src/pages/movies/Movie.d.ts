export interface Movie {
    _id?: string;
    title: string;
    plot?: {
        summary?: string;
        description?: string;
    }
}