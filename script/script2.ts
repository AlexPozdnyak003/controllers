// ----------------utility types--------------------
//1. Partial<Type> Делает все поля в объекте необязательными
interface Car {
  model: string;
  price: number;
  dvigatel: string;
  nal: boolean;
}

const audi: Partial<Car> = {
  model: 'Audi A7',
};

console.log(audi);

//2.Required <Type> Делает все поля в объекте обязательные

interface Car2 {
  model?: string;
  price?: number;
  nal?: boolean;
}

const BMW: Required<Car2> = {
  model: 'BMW X6',
  price: 7000000,
  nal: true,
};

console.log(BMW);

//3. Readonly <Type>  Все поля только для чтения

interface Car3 {
  model: string;
  price: number;
  dvigatel?: string;
  nal: boolean;
}

const toyota: Readonly<Car3> = {
  model: 'Toyota Camry',
  price: 3000000,
  nal: true,
};

//4.Pick <Type,Keys>   Возьмем те поля, которые нам реально нужны (одно или несколько через union)
//Создадим новый тип с полями, которые нам нужны
type type1 = Pick<Car3, 'model' | 'price'>;
const Mazda: type1 = {
  model: 'Mazda 6',
  price: 2000000,
};

console.log(Mazda);

//5. Omit <Type,Keys> Отбросим те поля, которые нам не нужны
//Создадим новый тип с полями, которые нам нужны
type typeCar = Omit<Car3, 'price' | 'nal'>;
const MazdaCx5: typeCar = {
  model: 'MazdaCx5',
  dvigatel: 'V6',
};
console.log(MazdaCx5);
