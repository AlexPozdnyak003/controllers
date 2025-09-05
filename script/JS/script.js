"use strict";
// Class Test
class T_01 {
    name = '';
}
class T_02 extends T_01 {
    email = '';
}
class T_03 extends T_02 {
    getData() {
        console.log('qqqq', this.name);
        console.log('qqqq', this.email);
    }
}
class T_04 extends T_01 {
    email = '';
    constructor(name, email) {
        super();
        this.name = name;
        this.email = email;
    }
    getData() {
        console.log('qqqq2', this.name);
        console.log('qqqq3', this.email);
    }
    getData2() {
        return {
            name: this.name,
            email: this.email,
        };
    }
}
class T_05 extends T_04 {
    age = 0;
    constructor(name, email, age) {
        super(name, email);
        this.age = age;
    }
    // Перезатереть метод полностью
    /*getData(): void {
      console.log(this.name, this.email, this.age);
    }*/
    // Дернем текущий метод  обращение к классу родителя через Super
    getData() {
        super.getData2();
        console.log(this.age);
    }
    getData2() {
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
//# sourceMappingURL=script.js.map