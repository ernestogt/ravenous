const apiKey = "your api key";

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
