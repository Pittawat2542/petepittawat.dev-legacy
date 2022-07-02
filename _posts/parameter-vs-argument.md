---
title: Parameter VS Argument มันต่างกันยังไงนะ !?
slug: parameter-vs-argument
date: '2020-05-27T14:36:46.000Z'
tags: Computer Science
coverImage: /assets/blog/parameter-vs-argument/cover.jpeg
author:
  name: Pittawat Taveekitworachai
  picture: /assets/blog/authors/pittawat.jpg
ogImage:
  url: /assets/blog/parameter-vs-argument/cover.jpeg
---

## TLDR;

Parameter = input ของ function ตอน**สร้าง** function

Argument = input ของ function ตอนเรานำ function ไป**ใช้**

---

หลาย ๆ คนเขียนโปรแกรมมาสักพักย่อมหนีไม่พ้นที่จะสร้าง function (method/procerdure ในภาษาอื่น ๆ แต่ในบทความนี้จะขอใช้คำว่า function) ขึ้นมาใช้งาน ทั้งเพื่อการลดความซ้ำซ้อนของโค้ดชุดเดิม ๆ เพื่อให้เราสามารถนำไป reuse ได้ง่ายยิ่งขึ้น หรือจะเพื่อการ encapsulate ซ่อน logic ในการทำงานก็ตาม แน่นอนละว่าหลายครั้งที่เราสร้าง function ขึ้นมา เราต้องการที่จะรับข้อมูลรับเข้า (input) อะไรบางอย่างเข้ามาใน function ด้วย เช่น

ตัวอย่าง function ในภาษา dart

    String _generateHelloMessage(String peopleName) {
        return 'Hello $peopleName';
    }

ซึ่งใน function ที่ได้มีการยกตัวอย่างไป เราต้องการที่จะสร้าง String ที่ประกอบไปด้วย ข้อความ "Hello" ขึ้นต้น ตามด้วยชื่อซึ่งเรารับเข้ามาเป็น input ของ function ผ่านตัวแปรที่ชื่อ peopleName ซึ่งต้องเป็น String นั่นเอง หรือเราอาจเรียกได้ว่า peopleName เป็น **Parameter **ของ function นี้

---

## Parameter คืออะไร?

Parameter คือคำเรียกตัวแปรที่เรารับเข้ามาเป็น input ของ function ตอนที่เรา**นิยาม function** หรือตอนที่เราสร้าง function ขึ้นมานั่นเอง (function declaration) ถ้าเป็นคำที่ทางการขึ้น เราอาจกล่าวได้ว่า parameter คือ input ของ function ใน function signature นั่นเอง

---

## Argument คืออะไร?

เชื่อว่าทุก ๆ น่าจะเดากันได้แล้วว่า Argument คืออะไร Argument คือ ตัวแปรที่เราส่งเข้าไปเป็น input ของ function ตอนที่นำไป function นั้น ๆ **ไปใช้งาน **เช่น

    String _generateHelloMessage(String peopleName) {
        return 'Hello $peopleName';
    }
    
    String bobName = 'Bob';
    print(_generateHelloMessage(bobName)); // Output: Hello Bob

ในทีนี้ ตัวแปร bobName จะเป็น Argument ของ function _generateHelloMessage หรือก็คือค่าที่แท้จริงที่เราส่งให้ function นำไปใช้งานนั่นเอง นอกจากนี้ Argument ยังมีอีกชื่อหนึ่งว่า Actual parameter หรือ Parameter ที่แท้จริง ด้วยนั่นเอง

---

## Summary

Parameter = input ของ function ตอน**สร้าง**

Argument = input ของ function ตอน**ใช้**

---

## **📚 Hope you enjoy reading! 📚**

---
