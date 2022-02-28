export interface ITvMazeData {
    name: string,
    language: string,
    genres: [string],
    status: string,
    runtime: number,
    schedule: {
        time: string,
        days: [string]
    },
    network: {
        name: string
    },
    image: {
        medium: string
    },
    summary: string
}