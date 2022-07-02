---
title: "Flutter: วิธีแก้ปัญหาใช้ built_value แล้วเจอ Deserializing failed due to Error: Bad State No element"
slug: flutter-built_value-deserializing-failed-due-to-bad-state-no-element
date: '2020-12-31T14:00:27.000Z'
tags: Flutter
coverImage: /assets/blog/flutter-built_value-deserializing-failed-due-to-bad-state-no-element/cover.jpeg
author:
  name: Pittawat Taveekitworachai
  picture: /assets/blog/authors/pittawat.jpg
ogImage:
  url: /assets/blog/flutter-built_value-deserializing-failed-due-to-bad-state-no-element/cover.jpeg
---

`built_value` Package ขวัญใจใครหลาย ๆ คน นี่เป็นหนึ่งใน Source Gen ที่ได้รับความนิยมมากที่สุด Package หนึ่งของชาว Flutter Developer อย่างไรก็ตามการทำงานกับมันอาจไม่ง่ายนัก และไม่ใช่ทุก Error Message ที่อ่านเข้าใจได้ง่าย

`Deserializing failed due to Error: Bad State No element` เป็นอีกหนึ่ง Error Message ที่บอกได้ไม่ค่อยชัดเจนนัก และทำให้ผู้เขียนเองเคยงมกับการแก้มาแล้วทั้งวัน! จริงแล้ว Error นี่เกิดขึ้นจากปัญหาเกี่ยวกับ Type ของ Fields ใน Class ครับ

โดย Class ของเราอาจจะมี Field ที่มีประเภทเป็น `dynamic` อยู่ โดยอาจไม่ได้เป็นการระบุไปโดยตรง แต่อาจระบุไว้เป็นแบบ Implicit เช่น `List`, `Map` ครับ ซึ่งเราแก้ไขได้โดยการระบุ  Type ที่ชัดเจนลงไป เช่น `List<String>`, `Map<String, String>` หรือหากไม่ต้องการใช้งาน Field นั้น ๆ ก็ลบทิ้งได้ครับ

---

## ****📚 Hope you enjoy reading! 📚****

---
