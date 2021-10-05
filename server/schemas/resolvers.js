const resolvers = {
    Query: {
        helloWorld: () => {
            return 'Hello World!';
        }
    }
};

module.exports = resolvers;