---
title: "Dart: Cascade Notation .. (จุดจุด) ที่ไม่ได้ให้เติมคำลงในช่องว่าง"
slug: dart-cascade-notation
date: '2020-12-20T02:04:10.000Z'
tags: Dart
coverImage: /assets/blog/dart-cascade-notation/cover.jpeg
author:
  name: Pittawat Taveekitworachai
  picture: /assets/blog/authors/pittawat.jpg
ogImage:
  url: /assets/blog/dart-cascade-notation/cover.jpeg
---

หลาย ๆ ครั้งที่เราพัฒนาโปรแกรมโดยใช้ภาษา Dart โดยเฉพาะเวลาใช้ Package ของคนอื่น หรือเวลาเราเปิด Tutorial เรามักจะได้เห็นสัญลักษณ์ `..` ตามด้วยชื่อของตัวแปรหรือฟังก์ชัน ว่าแต่ว่าเจ้า `..` หรือ Cascade Notation นี่มันมีไว้ทำอะไรกันนะ

## Cascade Notation

Cascade Notation เป็น Syntactic Sugar หรือ Syntax ที่จะมาช่วยให้เราสามารถเขียนโค้ดได้สนุกขึ้น สั้นขึ้น ดังนั้นเราจึงเรียกมันว่า Notation ไม่ใช่ Operator เพราะมันเป็นส่วนหนึ่งของ Syntax ของ Dart และในหลายกรณียังช่วยให้อ่านโค้ดได้ง่ายขึ้นอีกด้วย ก่อนจะไปทำความรู้จักกันให้ลึกขึ้นกับเข้า Notation ตัวนี้ว่ามันทำงานยังไง มาลองดูตัวอย่างเพื่อทำความเข้าใจกันดีกว่า

Original

    class Human {
    	double weight;
        double height;
        
        Human({this.weight, this.height});
        
        void sayHello() {
        	print("Hello");
        }
    }
    
    void main() {
    	final mike = Human(weight: 78.0, height: 183.0);
        mike.height = 176.5;
        mike.weight = 82.3;
        mike.sayHello();
    }

Modified using Cascade Notation

    class Human {
    	double weight;
        double height;
        
        Human({this.weight, this.height});
        
        void sayHello() {
        	print("Hello");
        }
    }
    
    void main() {
    	final mike = Human(weight: 78.0, height: 183.0);
        mike..height = 176.5
        	..weight = 82.3
            ..sayHello(); // print -> Hello
    }

จากตัวอย่างจะเห็นได้ว่าเราสามารถลดการเรียก `mike` ซ้ำ ๆ ลงได้ด้วยการใช้ Cascade Notation

โดยหลักการทำงานของเจ้า Cascade Notation นี้ก็คือ การที่มันจะ Return Reference ของ Instance นั้น ๆ หลังจากทำงานอะไรบางอย่างเสร็จเสมอ เช่น จากตัวอย่างโค้ดด้านบน เราเห็นได้ว่า `mike..height = 176.5` นั้นจะมีค่าเท่ากับการเรียก `mike.height = 176.5` แล้วคืนค่า `mike` ให้กับบรรทัดถัดไป นั่นหมายความว่า `..weight = 82.3` จะเท่ากับการเรียก `mike.weight = 82.3` นั่นเอง

สำหรับการใช้งานนั้นหลัก ๆ เรามันจะใช้ในการ Initiate ค่าของตัวแปรในตอนต้นเมื่อพึ่งสร้าง Object มาเปล่า ๆ ข้อควรระวังของการใช้ Cascade Notation ก็คือ เมื่อเราใช้กับ Function ที่มีการคืนค่า (Return type ไม่เป็น Void) นั้น ค่าที่ถูก Return จะถูกเพิกเฉย (Ignore) ดังนั้นหากเราต้องการค่าอะไรบางอย่างมันจะถูกโยนทิ้งไป

ศึกษาเพิ่มเติมเกี่ยวกับ Cascade Notation ได้ที่ [Official Guide](https://dart.dev/guides/language/language-tour#cascade-notation-)

---

## *******📚 Hope you enjoy reading! 📚*******

---
