const PlaceService = require('../../src/services/PlaceService');

jest.mock('PlaceRepository', () => {
    return {
        GetAll: jest.fn().mockImplementation(() => {
            return 'dasdas';
        })
    }
});


test("KEK", async () => {
    expect(await PlaceService.GetAll()).toBe('111')
});