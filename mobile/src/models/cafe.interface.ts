export interface Cafe {
    description: string | null,
    id: number,
    image: string | null,
    latitude: string,
    longitude: string,
    name: string,
    work_hours: string | null,
    distance?: number,
    distanceString?: string
}

export interface FilteredCafes {
    data: Array<Cafe>,
    height: number,
    value: string
}