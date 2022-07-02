---
title: JIT Compiler VS AOT Compiler
slug: jit-compiler-vs-aot-compiler
date: '2020-06-30T12:38:13.000Z'
tags: Computer Science
coverImage: /assets/blog/jit-compiler-vs-aot-compiler/cover.jpeg
author:
  name: Pittawat Taveekitworachai
  picture: /assets/blog/authors/pittawat.jpg
ogImage:
  url: /assets/blog/jit-compiler-vs-aot-compiler/cover.jpeg
---

หลาย ๆ ครั้งที่เราเขียนโปรแกรมด้วยภาษาบางภาษา มักจะต้องการ Compiler เพื่อแปลงภาษานั้น ๆ ให้กลายเป็นอีกภาษาหนึ่ง เช่น TypeScript ที่จะถูก Compile ไปเป็น JavaScript หรือจาก Java ที่จะถูก Compile ไปเป็น Java Bytecode (ซึ่งถูกนำไปใช้รันใน JVM อีกที)

สองประเภทของ Compiler ที่มักจะมาปรากฎให้เราเห็นกัน ก็คือ JIT Compiler และ AOT Compiler นั่นเอง โดยบทความนี้จะพาไปดูกันว่ามันแตกต่างกันยังไง

---

## Terms

ก่อนจะไปดู Compiler แต่ละแบบกัน เราลองมาทำความรู้จักศัพท์กันก่อน

- Compiler = โปรแกรมที่ใช้ในการแปลงภาษาหนึ่งไปเป็นอีกภาษาหนึ่ง เช่น Java ซึ่งจะถูก Compile เป็น Java Bytecode เพื่อให้ Java Virtual Machine (JVM) เข้าใจและนำไป Interpret ได้
- Interpreter = โปรแกรมที่ใช้ในการรันภาษานั้น ๆ เช่น Python Interpreter ใช้ในการอ่านภาษา Python เพื่อไปทำงานตามที่กำหนดไว้ของภาษา
- Time = Time ใน JIT และ AOT หมายถึง Runtime หรือเวลาถูกโปรแกรมนั้น ๆ จะถูกนำไปรัน

---

## ทำไมเราต้อง Compile โปรแกรม?

จะเห็นได้ว่าจริง ๆ แล้ว ถ้าเราใช้ Interpreter เราก็อาจจะได้สามารถรันโปรแกรมได้เลย โดยไม่ต้องแปลงไปเป็นอีกภาษาก่อน แต่เหตุผลก็คือ ภาษาที่เราใช้เขียนกันนั้นส่วนใหญ่เป็น High-level Language ซึ่งถูก Optimized มาให้มนุษย์อ่านเข้าใจได้ง่าย แต่ไม่ได้ถูก Optimized มาให้คอมพิวเตอร์ทำงานได้เร็ว ด้วยเหตุนี้การ Compile โปรแกรมมักจะทำเพื่อแปลง High-level Language ไปเป็น Low-level Language เพื่อให้โปรแกรมทำงานได้เร็วขึ้น

---

## JIT

การ Compile แบบ **J**ust-**I**n-**T**ime เป็นการ Compile ทันทีเมื่อถูกร้องขอ/ถูกใช้ในส่วนนั้น โดยทั่วไปแล้ว JIT Compiler มักต้องทำงานร่วมกับ Interpreter เพื่อให้ภาษาที่ถูกแปลงในทันทีนั้น นำไปรันต่อได้ (ไม่งั้นแปลงมาแล้วไม่มีคนนำไปใช้)

---

## AOT

การ Compile แบบ **A**head-**O**f-**T**ime เป็นการ Compile ก่อนที่โปรแกรมจะถูกรัน โดยทั่วไปโปรแกรมที่ถูก Compile แบบ AOT จะเร็วกว่า JIT เมื่อถูกรัน เพราะ JIT นั้นจะถูกแบ่งเป็น 2 Stages ย่อย ๆ ตอนรัน คือ แปลงภาษา จากนั้น Feed ให้ Interpreter แต่กับ AOT แล้วเนื่องจากโค้ดถูกแปลงมาแล้วจึงนำไปรันได้เลย

---

## แต่?

จริง ๆ แล้ว AOT และ JIT นั้นไม่ใช่ 2 แนวทางที่แยกขาดจากกันโดยสิ้นเชิง ในปัจจุบันเราจะเห็นหลาย ๆ เทคโนโลยีที่นำทั้งสองแนวทางไปใช้ด้วยกัน เพื่อให้ได้ข้อดีจากทั้งสองวิธี เช่น Android เป็นต้นซึ่งใช้ทั้ง AOT และ JIT ในส่วนที่เหมาะสมนั่นเอง

เช่นเดียวกับ Compiler และ Interpreter ที่ปัจจุบันหลาย ๆ Language Engine มีทั้งนำไป Pack ไว้ด้วยกัน หรือบางครั้งก็นำไปใช้เป็น Mixed-mode เพื่อให้ได้ประโยชน์สูงที่สุด เพราะโดยปกติ Compiler มักจะต้องรอเวลา Compile ซึ่งในขณะที่ยัง Compile ไม่เสร็จจะใช้โปรแกรมไม่ได้ แต่ Mixed-mode จะสามารถสั่ง Compile แล้วสลับไปโหมด Interpreter เพื่อให้โปรแกรมรันได้เร็วขึ้น (แต่ไม่เร็วเท่าโปรแกรมที่ Compile เสร็จแล้ว) ระหว่างที่รอ Compiler compile อยู่ ซึ่งเมื่อ Compiler compile เสร็จ ก็สามารถสลับกลับมาเป็นโปรแกรมที่ถูก Compile เสร็จแล้วได้ทันที

---

## ****📚 Hope you enjoy reading! 📚****

---
