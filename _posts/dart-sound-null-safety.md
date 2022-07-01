---
title: "Dart: Sound Null Safety กำลังมาใน Dart 2.9!"
slug: dart-sound-null-safety
date: '2020-06-11T10:50:00.000Z'
tags: Dart
---

## Null safety มันดียังไง?

หลายครั้งที่เรามักจะมีปัญหาโดยมีสาเหตุมาจาก Null เพราะว่าตอนเขียนโปรแกรมเราไม่อาจรู้ได้เลยว่าตัวแปรที่ส่งมาจะเป็น Null หรือไม่ รู้ตัวอีกทีก็ตอน runtime ที่โปรแกรม Error ให้ผู้ใช้เห็นไปแล้ว Null safety จะมาเปลี่ยนแปลงสิ่งเหล่านั้นไป เพราะตั้งแต่ Dart 2.9 ไป การเขียนโค้ดแบบนี้

    const pi = 3.14;
    var x = 10;
    String str = 'This is string';

โดย Default จะเป็น Non-null ทั้งหมด หากเราต้องการบอกกับ Dart ว่าตัวแปรนั้น ๆ เป็น Null ได้ เราจะต้องเขียนแบบนี้

    const? pi = 3.14;
    var? x = 10;
    String? str = 'This is string';

คือการเพิ่มเครื่องหมายคำถาม (?)​ เข้าไปนั่นเอง

---

## นี่มันลอก Swift มาชัด ๆ : Soundness

Null safety ใน Dart นั้นเป็น Sound Null Safety เหมือนกับ Swift ความหมายก็ คือ เมื่อตัวแปรหนึ่ง ๆ เป็น Non-null แล้ว ในอนาคตมันไม่สามารถเป็น Null ได้อีก ถามว่าการที่เป็นแบบนี้ส่งผลดียังไง ข้อดีของการที่ Dart เป็น Sound Null Safety ก็คือ การที่ Dart สามารถ Optimize Native Code ที่แปลง (Compile) ออกมาให้เล็กลงได้ โดยเฉพาะ AOT Compiler ของ Dart (Ahead-of-Time Compiler) โดยทางทีม Dart ได้เคลมไว้ว่าจะเร็วขึ้นเกือบ 20% เลยทีเดียว เมื่อเทียบกับโค้ดปัจจุบัน

---

## ปัญหาของ Flow Analysis

อย่างไรก็ตาม ตัว Flow Analyzer ใน Dart Compiler นั้นก็ไม่ใช่ผู้วิเศษ เป็นเพียงผู้ชาย จึงไม่สามารถบอกได้ว่า Field (ตัวแปรใน Class) นั้นจะได้เป็น Null หรือไม่ รวมถึงในบางกรณีที่เรามั่นใจมาก ว่าหากตัวแปรนั้น Initilize แล้วจะไม่เป็น Null เราจะมีวิธีบอก Dart อย่างไรได้บ้าง ทางทีม Dart เองจึงได้สร้าง Keyword ใหม่ขึ้นมา นั่นคือคำว่า late นั่นเอง late เป็นการให้ความมั่นใจว่าตัวแปรนั้นจะไม่เป็น Null เด็ดขาด หากมมีใครมาอ่านค่าตัวแปรนั้น (เช่น การ Initilize ใน Constructor หากเราเขียนไว้)

ตัวอย่างโค้ด

    class Fish {
      late double weight;
      Fish(Scale s) {
        weight = s.compute();
      }
    }

---

## Backward Compatibility: Migrate ได้อย่างง่ายดาย

ซึ่งทางทีม Dart เองได้กล่าวไว้ว่ามันจะ Backward Compatible แน่นอน รวมทั้งตอนที่ปล่อย Stable release จะยังแถม Migration tool มาให้อีกด้วย เท่านั้นยังไม่พอ เพราะ Migration นี้ เป็น Opt-in นั่นหมายความว่าเราสามารถเลือกที่จะใช้งานเมื่อไรก็ได้นั่นเอง เช่น รอจนกว่า Package ทั้งหมดที่เรา Depends อยู่จะย้ายไปใช้ Null Safety ทั้งหมด

---

## ตอนนี้ยังเป็น Tech Preview อยู่นะ!

ตอนนี้ Null Safety ยังอยู่ในสถานะ Technical Preview ซึ่งปล่อยออกมาเพื่อรับ Feedback เท่านั้น ยังไม่เหมาะแก่การนำไปใช้งานจริง ยังคงต้องผ่าน Beta เพื่อให้ Package ต่าง ๆ ได้ปรับตัว และจะปล่อย Stable ออกมาในช่วงปลายปีนี้ แต่สำหรับใครที่อยากลอง มีให้ลองแล้ววันนี้ที่ [nullsafety.dartpad.dev](https://nullsafety.dartpad.dev/3d9c1769de7912c654bc5d132aff60ac)

---

## ********📚 Hope you enjoy reading! 📚********

---
