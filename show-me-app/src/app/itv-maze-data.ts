export interface ITvMazeData {
    name: string,
    language: string,
    genres: [],
    status: string,
    runtime: number,
    schedule: {
        time: string,
        days: []
    },
    rating: {
        average: number
    },
    network: {
        name: string
    },
    image: {
        medium: string
    },
    summary: string
}