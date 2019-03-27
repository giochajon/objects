class CityController {

    constructor() {

    }

    wichSphere() {
        return 0
    }

    getMostNorthern() {
        return 0
    }

    getMostSouthern() {
        return 0
    }

    getPopulation(arreglo) {
        const totPopulation = arreglo.reduce((acum, nextval) => ({ population: acum.population + nextval.population }));
        return (totPopulation.population)
    }

}