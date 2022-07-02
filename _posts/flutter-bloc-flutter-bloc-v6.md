---
title: "Flutter: bloc และ flutter_bloc v6 มาแล้ว!"
slug: flutter-bloc-flutter-bloc-v6
date: '2020-07-27T07:18:30.000Z'
tags: Flutter, News
coverImage: /assets/blog/flutter-bloc-flutter-bloc-v6/cover.jpeg
author:
  name: Pittawat Taveekitworachai
  picture: /assets/blog/authors/pittawat.jpg
ogImage:
  url: /assets/blog/flutter-bloc-flutter-bloc-v6/cover.jpeg
---

หลังจากที่ `bloc` v5 และ `flutter_bloc` v5 ได้ถูกปล่อยออกมาไม่นาน โดยมีการเปลี่ยนแปลงหลัก ๆ ในการนำ `cubit` มาเป็นพื้นฐานในการจัดการ State และสร้าง `bloc` on-top ขึ้นไปนั้น ไม่นานทางคุณ​ Felix Angelov ก็ได้ปล่อย `bloc` และ `flutter_bloc` v6 ออกมา โดยการเปลี่ยนแปลงหลัก ๆ จะเป็นการนำ `cubit` เข้ามาอยู่ภายใน `bloc` แทนที่จะเป็น Dependency ที่ `bloc` ไปเรียกใช้งาน นอกจากนี้ยังมีการปรับปรุงอื่น ๆ รวมถึงแก้ไขข้อผิดพลาด จะมีอะไรบ้างนั้นไปดูกันได้เลย

---

## cubit

อย่างที่ได้เกริ่นไว้ว่าในเวอร์ชันนี้ `bloc` ได้นำ `cubit` มารวมเป็นส่วนหนึ่งของ `bloc` ไปเรียบร้อย หากยังจำกันได้ `cubit` นั้นเป็นหนึ่งในวิธีที่ใช้ในการจัดการ State ที่คล้ายกับไอเดียของ BLoC นั่นคือพยายามแยก Logic ออกมาจาก UI เพื่อให้ UI มีความเรียบง่ายมากที่สุด 

โดยตัวกลาง (ซึ่งปกติมักเรียกว่า BLoC) จะเป็นตัวที่คอยพิจารณาว่าจาก Event ที่ถูกส่งเข้ามาจะเปลี่ยนไปเป็น State ไหน โดยหาก State นั้น ๆ ต้องมีการใช้ข้อมูลจากแหล่งอื่น ๆ ก็จะมีการจัดการให้เรียบร้อยด้วย 

โดยการใช้ `cubit` นั้นจะเรียบง่ายกว่า โดยไม่ต้องมี Event เข้ามาเกี่ยวข้อง แต่ใช้การอัพเดทต่าง ๆ ผ่านฟังก์ชันแทน ซึ่งน่าจะเหมาะสำหรับผู้ที่คุ้นเคยรูปแบบการจัดการ State แบบนี้จากภาษาอื่น ๆ

ซึ่งในเวอร์ชันนี้คุณ​ Felix ก็ได้นำ `cubit` เข้ามารวมเป็นส่วนหนึ่งของ `bloc` และได้ทำการ Discontinued `cubit` ไป

แน่นอนว่า `bloc` เดิมนั้นก็ยังคงมีให้เรียกใช้อยู่ โดยมีพื้นฐานมาจาก `cubit` แต่ใช้การจัดการสิ่งต่าง ๆ ผ่าน Event แทน

---

## Breaking Changes

สำหรับ Breaking Changes หลัก ๆ ก็จะได้แก่การที่เมื่อ Observer มา Subscribe ที่ Bloc แล้วในเวอร์ชันเก่านั้นจะได้รับ Current State เป็น State แรก แต่ในเวอร์ชันนี้จะไม่ได้แล้ว ต้องรอรับ State ตัวถัดไปแทน ซึ่งก็เป็นการปรับปรุงเพื่อให้สอดคล้องกับพฤติกรรมของ Stream ใน Dart มายิ่งขึ้น

นอกจากนี้ยังมี `onError` ใน `BlocObserver` ที่รับ `Cubit` เป็นพารามิเตอร์ตัวแรกของฟังก์ชัน และการที่เพิ่มความสามารถให้ `bloc` และ `cubit` สามารถ Emit Initial State ได้

สำหรับ `flutter_bloc` ในทุก ๆ Widget ที่มีการรับพารามิเตอร์ที่ชื่อ `bloc` ก็ได้เปลี่ยนไปใช้ชื่อ `cubit` แทน เพื่อให้มีความเหมาะสมมากยิ่งขึ้น อันได้แก่ Widget ต่อไปนี้ `BlocBuilder`, `BlocListener`, `BlocConsumer`

---

## การเปลี่ยนแปลงอื่น ๆ

สำหรับการเปลี่ยนแปลงอื่น ๆ ก็มีการเพิ่ม `onChange` ให้กับ `BlocObserver` รวมถึงการเพิ่มกฎต่าง ๆ ของ Linter และมีการเพิ่ม Annotation `@visibleForTesting` ให้กับ `emit` ใน `Cubit` สำหรับใช้ในการ Test รวมถึงการปรับปรุง Document ทั่วไป

---

## ****📚 Hope you enjoy reading! 📚****

---
