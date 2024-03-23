//Реализовать класс, описывающий простой маркер. В классе
//должны быть следующие компоненты:
//■ поле, которое хранит цвет маркера;
//■ поле, которое хранит количество чернил в маркере (в процентах);
//■ метод для печати (метод принимает строку и выводит
//текст соответствующим цветом; текст выводится до тех
//пор, пока в маркере есть чернила; один не пробельный
//символ – это 0,5% чернил в маркере).
//Реализовать класс, описывающий заправляющийся маркер,
//унаследовав его от простого маркера и добавив метод для заправки
//маркера.
//Продемонстрировать работу написанных методов.

// class Marker {
//   constructor(color, inkLevel) {
//     this.color = color;
//     this.inkLevel = inkLevel;
//   }

//   print(text) {
//     let printedText = "";
//     for (let i = 0; i < text.length; i++) {
//       if (text[i] !== " " && this.inkLevel >= 0.5) {
//         printedText += text[i];
//         this.inkLevel -= 0.5;
//       } else if (text[i] === " ") {
//         printedText += " ";
//       }
//     }
//     console.log("%c" + printedText, `color: ${this.color}`);
//   }

//   refill(inkAmount) {
//     if (inkAmount > 0) {
//       this.inkLevel += inkAmount;
//       console.log(
//         `Marker has been refilled. Current ink level: ${this.inkLevel}%`
//       );
//     } else {
//       console.log("Invalid ink amount for refill.");
//     }
//   }
// }

// const marker = new Marker("red", 50);
// marker.print("Hello, world! This is a test text.");
// marker.refill(30);
// marker.print("This is another text to print after refill.");

//Реализуйте класс ExtendedDate, унаследовав его от стандартного класса Date и добавив следующие возможности:
//■ метод для вывода даты (числа и месяца) текстом;
//■ метод для проверки – это прошедшая дата или будущая
//(если прошедшая, то метод возвращает false; если будущая или текущая, то true);
//■ метод для проверки – високосный год или нет;
//■ метод, возвращающий следующую дату.
//Создайте объект класса ExtendedDate и выведите на экран
//результаты работы новых методов.

// class ExtendedDate extends Date {
//   constructor(...args) {
//     super(...args);
//   }

//   formatDateText() {
//     const month = [
//       "января",
//       "февраля",
//       "марта",
//       "апреля",
//       "мая",
//       "июня",
//       "июля",
//       "августа",
//       "сентября",
//       "октября",
//       "ноября",
//       "декабря",
//     ];
//     return `${this.getDate()} ${month[this.getMonth]}`;
//   }

//   isFuture() {
//     const currentDate = new Date();
//     return this.getTime() >= currentDate.getTime();
//   }

//   isLeapYear() {
//     const year = this.getFullYear();
//     return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
//   }

//   getNextDate() {
//     const nextDate = new Date(this.getTime());
//     nextDate.setDate(this.getDate() + 1);
//     return nextDate;
//   }
// }

// const currentDate = new ExtendedDate();

// console.log(currentDate.formatDateText());

// console.log(currentDate.isFuture());

// console.log(currentDate.isLeapYear());

// console.log(currentDate.getNextDate());
