import {StrapiItem} from 'src/strapi/StrapiItem';

export type AccompagnementContent = {
  titre: string;
  description: string;
  image: StrapiItem;
  button: {titre: string; href: string};
};

export type Temoignage = {
  id: number;
  auteur: string;
  description: string;
  contenu: string;
  image: StrapiItem;
};

export type AccueilData = {
  titre: string;
  couverture?: StrapiItem;
  accompagnement: {
    titre: string;
    description: string;
    contenu: AccompagnementContent[];
  };
  temoignages: {
    titre: string;
    description: string;
    contenu: Temoignage[];
  } | null;
  informations: {
    titre: string;
    description: string;
  };
  newsletter: {
    titre: string;
    description: string;
  };
};

// Types associés aux pages actualités et collectivités

export type ArticleData = {
  titre: string;
  couverture: StrapiItem;
  dateCreation: Date;
  dateEdition: Date;
  contenu: SectionArticleData[];
  prevId: number | null;
  nextId: number | null;
};

export type CollectiviteData = {
  logos?: StrapiItem[];
  description?: string;
  contenu: SectionCollectiviteData[];
};

export type SectionArticleData = {
  type: 'paragraphe' | 'image' | 'gallerie' | 'video' | 'info';
  data:
    | ParagrapheCustomArticleData
    | ImageArticleData
    | GallerieArticleData
    | string;
};

export type SectionCollectiviteData = {
  type:
    | 'performance'
    | 'citation'
    | 'actionsCAE'
    | 'paragraphe'
    | 'image'
    | 'gallerie'
    | 'video'
    | 'info';
  data:
    | ParagrapheArticleData
    | ParagrapheArticleData[]
    | ParagrapheCustomArticleData
    | ImageArticleData
    | GallerieArticleData
    | string;
};

export type ParagrapheArticleData = {
  titre?: string;
  texte?: string;
  image?: StrapiItem;
  legendeVisible?: boolean;
};

export type ParagrapheCustomArticleData = ParagrapheArticleData & {
  alignementImage?: string;
};

export type ImageArticleData = {
  data: StrapiItem;
  legendeVisible?: boolean;
};

export type GallerieArticleData = {
  data: StrapiItem[];
  colonnes: number;
  legende?: string;
  legendeVisible?: boolean;
};

export type CitationCollectiviteData = {
  texte: string;
  auteur: string;
  description?: string;
};

export type ContenuArticleFetchedData = (
  | ParagrapheCustomFetchedData
  | ImageFetchedData
  | GallerieFetchedData
  | VideoFetchedData
  | InfoFetchedData
)[];

export type ContenuCollectiviteFetchedData = (
  | CitationFetchedData
  | ActionsCaeFetchedData
  | ParagrapheFetchedData
  | ParagrapheCustomFetchedData
  | ImageFetchedData
  | GallerieFetchedData
  | VideoFetchedData
  | InfoFetchedData
)[];

export type CitationFetchedData = {
  __component: string;
  Texte: string;
  Auteur: string;
  Description: string;
};

export type ActionsCaeFetchedData = {
  __component: string;
  PlanificationTerritoriale: {
    Texte: string;
    Image: {data: StrapiItem};
    LegendeVisible: boolean;
  };
  PatrimoineCollectivite: {
    Texte: string;
    Image: {data: StrapiItem};
    LegendeVisible: boolean;
  };
  ApprovisionnementEnergie: {
    Texte: string;
    Image: {data: StrapiItem};
    LegendeVisible: boolean;
  };
  Mobilite: {
    Texte: string;
    Image: {data: StrapiItem};
    LegendeVisible: boolean;
  };
  OrganisationInterne: {
    Texte: string;
    Image: {data: StrapiItem};
    LegendeVisible: boolean;
  };
  CommunicationCooperation: {
    Texte: string;
    Image: {data: StrapiItem};
    LegendeVisible: boolean;
  };
};

export type ParagrapheFetchedData = {
  __component: string;
  Titre: string;
  Texte: string;
  Image: {data: StrapiItem};
  LegendeVisible: boolean;
};

export type ParagrapheCustomFetchedData = ParagrapheFetchedData & {
  AlignementImage: string;
};

export type ImageFetchedData = {
  __component: string;
  Image: {data: StrapiItem};
  LegendeVisible: boolean;
};

export type GallerieFetchedData = {
  __component: string;
  Gallerie: {data: StrapiItem[]};
  NombreColonnes: number;
  Legende: string;
  LegendeVisible: boolean;
};

export type VideoFetchedData = {
  __component: string;
  URL: string;
};

export type InfoFetchedData = {
  __component: string;
  Texte: string;
};

export type EtoilesLabel = 0 | 1 | 2 | 3 | 4 | 5;
