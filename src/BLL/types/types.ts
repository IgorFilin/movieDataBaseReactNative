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

export interface SearchFilmByIdType {
    Title: string
    Year: string
    Rated: string
    Released: string
    Runtime: string
    Genre: string
    Director: string
    Writer: string
    Actors: string
    Plot: string
    Language: string
    Country: string
    Awards: string
    Poster: string
    Ratings: Array<{Source: string, Value: string}>
    Metascore: string
    imdbRating: string
    imdbVotes: string
    imdbID: string
    Type: string
    DVD: string
    BoxOffice: string
    Production: string
    Website: string
    Response: string

}