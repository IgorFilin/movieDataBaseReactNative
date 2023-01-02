export interface SearchTitleContentType  {
    Search:Array<SearchTitleOneFilmType>
}
export interface SearchTitleOneFilmType {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}