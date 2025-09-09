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

class Controllers {
  add(controller: any, container: any): void {
    container.append(controller);
  }
  remove(controller: any, container: any): void {}
}

class Button extends Controllers {
  title: string = '';
  classNames: string[] = [];
  ico: boolean = false;
  box: HTMLDivElement | null = null;
  onClick;

  constructor(
    title: string,
    className: string[],
    ico: boolean,
    box: HTMLDivElement | null,
    onclick
  ) {
    super();
    this.title = title;
    this.classNames = className;
    this.ico = ico;
    this.box = box;
    this.onClick = onclick;
    this.create();
  }

  create(): void {
    const button: HTMLButtonElement = document.createElement('button');
    button.textContent = this.title;
    button.className = this.classNames.toString() + ' custom-button';
    button.addEventListener('click', this.onClick);
    super.add(button, this.box);
  }
}

const box = document.querySelector('[data-elem=actions]') as HTMLDivElement;

const button1 = new Button('press', ['gggg tttt'], false, box, function () {
  console.log('500');
});

const button2 = new Button(
  'GetData Users',
  ['gggg tttt'],
  false,
  box,
  function () {
    GetData();
  }
);

async function GetData() {
  try {
    console.log('Грузим пользователей');
    const a = await fetch('https://api.github.com/users');
    const data = await a.json();
    console.log('Данные GitHub users:', data);
  } catch (error) {
    console.log(error);
  }
}
//---- Паттерн MVC view module controllers
//-- модульность в JS
