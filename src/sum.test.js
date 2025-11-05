import { sum } from "./sum";
// describe("Проверка суммы", () => {
//     it("Сумма", () => {
//         expect(sum(2, 3)).toEqual(5);
//         expect(sum(1000, 2000)).toEqual(3000);
//     });
// });
describe("Тесты для фукции Sum", () => {
    describe("Тесты на базовую арифметику:", () => {
        it("Положительные числа", () => {
            expect(sum(2, 3)).toEqual(5);
            expect(sum(23, 90)).toEqual(113);
            expect(sum(56, 1)).toEqual(57);
            expect(sum(61, 43)).toEqual(104);
            expect(sum(21, 17)).toEqual(38);
        });
        it("Отрицательные числа", () => {
            expect(sum(-7, -3)).toEqual(-10);
            expect(sum(-11, 11)).toEqual(0);
            expect(sum(-45, -2)).toEqual(-47);
        });
        it("Числа с плавающей точкой", () => {
            expect(sum(2.7, 1.7)).toEqual(4.4);
            expect(sum(27.8, 0.2)).toEqual(28.0);
            expect(sum(5.5, 8.2)).toEqual(13.7);
        });
    });
    describe("Крайний случай", () => {
        it("Обработка нулевых значений", () => {
            expect(sum(0, 0)).toEqual(0);
        });
        it("Коммутотивность", () => {
            const a = 7, b = 12;
            expect(sum(a, b)).toEqual(sum(b,a));
        });
    });
});
