import { StrapiMedia } from "./course";

// ---------- Types ----------

export interface StrapiRawRegistrationStep {
    id: number;
    title: string;
    description: string;
    icon: StrapiMedia;
}

export interface StrapiRawStudentReview {
    id: number;
    name: string;
    quote: string;
    date: string;
    avatar: StrapiMedia;
}

export interface StrapiRawProgramAttributes {
    documentId: string;
    title: string;
    slug: string;
    heroDescription: string;
    heroImage: StrapiMedia[];
    steps: StrapiRawRegistrationStep[];
    review: StrapiRawStudentReview[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface StrapiRawProgram {
    id: number;
    documentId: string;
    title: string;
    slug: string;
    heroDescription: string;
    heroImage: StrapiMedia[];
    steps: StrapiRawRegistrationStep[];
    review: StrapiRawStudentReview[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface RegistrationStep {
    id: number;
    title: string;
    description: string;
    iconUrls: string[];
}

export interface StudentReview {
    id: number;
    name: string;
    quote: string;
    date: string;
    avatarUrl: string | null;
}

export interface Program {
    id: number;
    documentId: string;
    title: string;
    slug: string;
    url: string;
    heroDescription: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    heroImage: {
        original: string;
        thumbnail: string;
        medium: string;
        small: string;
    }[];

    steps: {
        id: number;
        title: string;
        description: string;
        icon?: React.ReactNode;

    }[];
    review: {
        id: number;
        name: string;
        quote: string;
        date: string;
        avatar: string | null;
    }[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    localizations?: any[];
}

