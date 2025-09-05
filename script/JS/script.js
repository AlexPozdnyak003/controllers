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
class Controllers {
    add(controller, container) {
        container.append(controller);
    }
    remove(controller, container) { }
}
class Button extends Controllers {
    title = '';
    classNames = [];
    ico = false;
    box = null;
    onClick;
    constructor(title, className, ico, box, onclick) {
        super();
        this.title = title;
        this.classNames = className;
        this.ico = ico;
        this.box = box;
        this.onClick = onclick;
        this.create();
    }
    create() {
        const button = document.createElement('button');
        button.textContent = this.title;
        button.className = this.classNames.toString() + ' custom-button';
        button.addEventListener('click', this.onClick);
        super.add(button, this.box);
    }
}
const box = document.querySelector('[data-elem=actions]');
const button1 = new Button('press', ['gggg tttt'], false, box, function () {
    console.log('500');
});
const button2 = new Button('press', ['gggg tttt'], false, box, function () {
    GetData();
});
async function GetData() {
    try {
        console.log('qqq');
        const a = await fetch('https://api.github.com/users');
        const data = await a.json();
        console.log('Данные GitHub users:', data);
    }
    catch (error) {
        console.log(error);
    }
}
//---- Паттерн MVC view module controllers
//# sourceMappingURL=script.js.map