const validateValues = require('./validateValues')

describe('validateValues', () => {
	test('Валидация значения', () => {
		expect(validateValues(50)).toBe(true)
	})
	test('Меньше корректного', () => {
		expect(validateValues(-1)).toBe(false)
	})
	test('Больше корректного', () => {
		expect(validateValues(101)).toBe(false)
	})
	test('Нижнее пограничное', () => {
		expect(validateValues(0)).toBe(true)
	})
	test('Верхнее пограничное', () => {
		expect(validateValues(100)).toBe(true)
	})
})
