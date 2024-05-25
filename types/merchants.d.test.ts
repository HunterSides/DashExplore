import { validate } from 'genaiscript';
import { Merchants, Pagination, Result } from './merchants';
import geojson from '../assets/data/merchants.geo.json';

describe('Merchants', () => {
    let merchants: Merchants;

    beforeEach(() => {
        const mockGeojson = {
            features: [
                {
                    properties: {
                        merchantId: '1',
                        name: 'Merchant 1',
                        country: 'Country 1',
                        source: 'Source 1',
                        sourceId: 'Source ID 1',
                        type: 'Type 1',
                        redeemType: 'Redeem Type 1',
                    },
                },
                {
                    properties: {
                        merchantId: '2',
                        name: 'Merchant 2',
                        country: 'Country 2',
                        source: 'Source 2',
                        sourceId: 'Source ID 2',
                        type: 'Type 2',
                        redeemType: 'Redeem Type 2',
                    },
                },
            ],
        };

        merchants = {
            pagination: {
                page: 1,
                pages: 2,
                perPage: 10,
                total: 20,
            },
            result: mockGeojson.features.map((feature) => {
                return {
                    paymentMethod: 'gift card',
                    merchantId: feature.properties.merchantId,
                    name: feature.properties.name,
                    country: feature.properties.country,
                    source: feature.properties.source,
                    sourceId: feature.properties.sourceId,
                    type: feature.properties.type,
                    redeemType: feature.properties.redeemType,
                };
            }),
        };
    });

    test('should validate a valid merchants object', () => {
        const validationResult = validate<Merchants>(merchants);
        expect(validationResult.valid).toBe(true);
        expect(validationResult.data).toEqual(merchants);
        expect(validationResult.errors).toHaveLength(0);
    });

    test('should invalidate a merchants object with missing required fields', () => {
        merchants.result[0].name = ''; // Make name field empty
        const validationResult = validate<Merchants>(merchants);
        expect(validationResult.valid).toBe(false);
        expect(validationResult.data).toBeUndefined();
        expect(validationResult.errors).toHaveLength(1);
        expect(validationResult.errors[0].message).toContain('name');
    });

    test('should validate a valid pagination object', () => {
        const pagination: Pagination = {
            page: 1,
            pages: 2,
            perPage: 10,
            total: 20,
        };
        const validationResult = validate<Pagination>(pagination);
        expect(validationResult.valid).toBe(true);
        expect(validationResult.data).toEqual(pagination);
        expect(validationResult.errors).toHaveLength(0);
    });

    test('should validate a valid result object', () => {
        const result: Result = {
            paymentMethod: 'gift card',
            merchantId: geojson.features[0].properties.merchantId,
            name: geojson.features[0].properties.name,
            country: geojson.features[0].properties.country,
            source: geojson.features[0].properties.source,
            sourceId: geojson.features[0].properties.sourceId,
            type: geojson.features[0].properties.type,
            redeemType: geojson.features[0].properties.redeemType,
        };
        const validationResult = validate<Result>(result);
        expect(validationResult.valid).toBe(true);
        expect(validationResult.data).toEqual(result);
        expect(validationResult.errors).toHaveLength(0);
    });
});
