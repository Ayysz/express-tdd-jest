const request = require('supertest');
const server = require('../server');
const servers = 'http://localhost:3000'; 
const req = request(servers);
const {faker} = require('@faker-js/faker');

describe('User API test', () => {
    const id = 3;
    it('menampilkan semua data user', async () => {
        const res = await req.get('/api/users')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('data')
    }),

    it('menambah data baru', async () => {
        const reqData = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password()
        }

        const res = await req.post('/api/users').send(reqData)
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('data')
    }),

    it('mencari data by id', async() => {
        const res = await req.get(`/api/users/${id}`)
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('data')
    }),

    it('menghapus data by id', async() => {
        const res = await req.delete(`/api/users/${id}`)
        expect(res.statusCode).toEqual(204)
    })
    // it('mengedit data nomor 3', async() => {

    // })
});