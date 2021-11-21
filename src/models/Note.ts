export interface Note {
    id: string;
    title: string;
    content: string;
    tags?: string[];
    createdAt: string;
    lastModified: string;
}