/** BookCardProps */
export interface BookCardProps {
    bookCard: BookCardModel;
    onShelfChange: (book: BookCardModel, newShelf: string) => void;
}

/** BookCardModel */
export interface BookCardModel {

    /** id */
    id: string;

    /** shelf */
    shelf: string;

    /** title */
    title: string;

    /** authors */
    authors: string[];

    /** imageLinks */
    imageLinks: ImgLinksModel;
}

/** ImgLinksModel */
export interface ImgLinksModel {

    /** thumbnail */
    thumbnail: string

    /** smallThumbnail */
    smallThumbnail: string
}

/** ShelvesModel */
export interface ShelvesModel {

    /** shelfName */
    shelfName: string;

    /** shelfDisplayName */
    shelfDisplayName: string;
}