describe('Test faker js', () => {
    it('Apakah datanya faker sesuai dengan apa yg diharapkan', () => {
        const {faker} = require('@faker-js/faker');

        const data = [];

        for (let i = 0; i < 4; i++){
            const req = {
                title: faker.commerce.productName(),
                link: faker.internet.url(),
                userId: faker.helpers.arrayElement([1,2,3]),
                createdAt: new Date(),
                updatedAt: new Date()
            };
            data.push(req);
        }

        expect(data.length).toBe(4);
    });
});