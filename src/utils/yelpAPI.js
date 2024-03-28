const apiKey = "u6IpEL-Zr5B7nyQMcTrPHl-AVJOyz9gHR3oUG9cMfaqSxY10awDq4WbakW6MQHvDUF2a4sa75TfuboUuDViYEEjxnXTb7Nz5C-LfM9HZBFrJHIOr79LwebiAJgbdZXYx";
const location = "San Francisco";
const term = "restaurant";
const sortBy = "best_match";

const Yelp = {
    async getData(location, term, sortBy) {
        try {
            const response = await fetch(
                `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
                {
                    headers: {
                        Authorization: `Bearer ${apiKey}`
                    }
                });

            const data = await response.json().then(data => {
                return data;
            });
            return data;
        }
        catch (error) {
            console.error('Error fetching data:', error);
            // return []; // or handle the error as you see fit
        }

    }
};

export default Yelp;