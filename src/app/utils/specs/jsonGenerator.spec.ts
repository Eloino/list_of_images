import { generateJson, generateRandomString } from '../jsonGenerator';

describe('generateJson', () => {
    it('generateJson', () => {
        const gJsonLength = generateJson(10, 500, 500).length;
        expect(gJsonLength).toEqual(10);
    });
});

describe('generateRandomString', () => {
    it('generateRandomString', () => {
        const textLength = generateRandomString(10).length;
        expect(textLength).toEqual(10);
    });
});
