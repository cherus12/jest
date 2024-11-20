const mapArrToStrings = require('./mapArrToStrings')

describe('validateValues', () => {
	test('Корректное значения', () => {
		expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3'])
	})
	test('Не корректное значения', () => {
		expect(mapArrToStrings([1, 2, 3])).toEqual([1, '2', '3'])
	})
	test('Солянка', () => {
		expect(mapArrToStrings([1, 2, 3, null, undefined, 'asasd'])).toEqual([
			'1',
			'2',
			'3',
		])
	})
	test('Пустой массив', () => {
		expect(mapArrToStrings([])).toEqual([])
	})
	test('Пустой массив', () => {
		expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3, 4])
	})
})
