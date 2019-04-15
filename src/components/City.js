class City {

    constructor(name, latitude, longitude, population) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = parseInt(population);
    }

    show() {
        const result = JSON.stringify(this);
        return result
    }

    movedIn(people) {
        this.population += people
    }

    movedOut(people) {
        this.population -= people
    }

    howBig(population) {
        const x = population
        switch (true) {
            case (x < 100):
                return "Hamlet";
                // eslint-disable-next-line 
                break;
            case (x < 1000):
                return "Village";
                // eslint-disable-next-line 
                break;
            case (x < 20000):
                return "Town";
                // eslint-disable-next-line 
                break;
            case (x < 100000):
                return "Large Town";
                // eslint-disable-next-line 
                break;
            default:
                return "City";
                // eslint-disable-next-line 
                break;
        }
    }

}

export default City