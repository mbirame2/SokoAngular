export interface Product
{
    id:number;
    Titre:string;
    Description:string;
    Genre:string;
    Prix:number;
    Couleur:string;
    Confid:string;
    Condition:number;
    ImageName:string;
    article:{Prix:number,Genre:string};
    categorie:{name:string,id:number};
    sscategorie:{name:string,id:number};
    article_id:number;

}