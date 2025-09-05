interface User {
  name: string;
  email: string;
  age?: number;
}
// Class Test
class T_01 {
  name: string = '';
}

class T_02 extends T_01 {
  email: string = '';
}

class T_03 extends T_02 {
  getData(): void {
    console.log('qqqq', this.name);
    console.log('qqqq', this.email);
  }
}

class T_04 extends T_01 {
  email: string = '';
  constructor(name: string, email: string) {
    super();
    this.name = name;
    this.email = email;
  }
  getData(): void {
    console.log('qqqq2', this.name);
    console.log('qqqq3', this.email);
  }

  getData2(): User {
    return {
      name: this.name,
      email: this.email,
    };
  }
}

class T_05 extends T_04 {
  age: number = 0;
  constructor(name: string, email: string, age: number) {
    super(name, email);
    this.age = age;
  }
  // Перезатереть метод полностью
  /*getData(): void {
    console.log(this.name, this.email, this.age);
  }*/
  // Дернем текущий метод  обращение к классу родителя через Super
  getData(): void {
    super.getData2();
    console.log(this.age);
  }
  getData2(): User {
    return {
      name: super.getData2().name,
      email: super.getData2().email,
      age: this.age,
    };
  }
}
//Constructor

const obj1 = new T_05('alexPozdnyak', 'ya.pozdnyak@yandex.ru', 35);
console.log(obj1.getData2());
