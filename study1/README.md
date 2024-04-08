# Study1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## อธิบาย
1. เมื่อกด `send message to parent` จะไปเรียก `sendMessage()`
    ![alt text](image.png)
2. สร้าง `@Output() messageEvent`สำหรับส่งข้อมูลไปยัง parent component ผ่าน output binding , `sendMessage`เมื่อถูกเรียกใช้จะไปใช้งาน`EventEmitter`โดยการส่งข้อความเข้าไปยัง parent component ที่ `subscribe`
    ![alt text](image-1.png)
3. การสร้างตัวแปรเอาไว้แสดงค่าเมื่อมีการเรียกใช้ `receingMessage` เข้ามา
    ![alt text](image-2.png)
4. เมื่อมีการส่งข้อมูลมา `messageEvent` จะทำให้method `receingMessage` ที่อยู่ใน parent component ถูกเรียกใช้งาน และข้อมูลที่ส่งมาจะถูกส่งไปยัง method นี้เพื่อทำการประมวลผล
    ![alt text](image-4.png)