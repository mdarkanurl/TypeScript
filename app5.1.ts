type Coordinate = [number, number]; // It's called Aliases and it store type

function compareCoords(p1: Coordinate, p2: Coordinate): Coordinate {
    return [p1[0], p2[1]];
}

const coordsVar: [number, number][] = []