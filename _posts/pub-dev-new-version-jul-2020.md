---
title: pub.dev เวอร์ชันใหม่มาแล้ว!
slug: pub-dev-new-version-jul-2020
date: '2020-07-16T13:07:33.000Z'
tags: Flutter, Dart, News
coverImage: /assets/blog/pub-dev-new-version-jul-2020/cover.jpeg
author:
  name: Pittawat Taveekitworachai
  picture: /assets/blog/authors/pittawat.jpg
ogImage:
  url: /assets/blog/pub-dev-new-version-jul-2020/cover.jpeg
---

[pub.dev](https://pub.dev) เว็บไซต์คู่ใจนักพัฒนาที่ใช้ภาษา Dart และ Framework อย่าง Flutter สำหรับใช้ในการค้นหา Package/Plugin ต่าง ๆ เพื่อนำมาใช้งานใน Application ของเรา โดยที่ไม่ต้องเขียนโค้ดเองทั้งหมด ในวันนี้ได้มีการอัพเดทเวอร์ชันใหม่ของเว็บไซต์ ซึ่งไม่เพียงแค่รูปลักษณ์ที่เปลี่ยนไปเท่านั้น แต่ยังมีฟีเจอร์อำนวยความสะดวกใหม่ ๆ เพิ่มขึ้นด้วย!
![](__GHOST_URL__/content/images/2020/07/image.png)หน้าแรกของ pub.devcc
---

## New Metric	

โดยในเว็บไซต์เวอร์ชันใหม่นี้ก็ได้ถูกพัฒนาขึ้นมาเพื่อตอบโจทย์ปัญหาซึ่งค่อนข้างคล้ายกับ [npmjs.com](https://www.npmjs.com) นั่นก็คือการที่มี Package ที่ทำสิ่งเดียวกันให้เลือกมากเกินไป ซึ่งค่อนข้างต่างจากช่วงแรก ๆ ของ pub.dev ที่ยังมี Package ไม่ตอบโจทย์ครบในทุกมิติมากนัก โดยในเวอร์ชันใหม่นี้ ก็ได้ปรับปรุงการแสดงผล Metric ให้ตอบโจทย์การเลือกใช้งาน Package ที่ดีที่สุดใน Use case นั้น ๆ
![](__GHOST_URL__/content/images/2020/07/image-7.png)ตัวอย่างคะแนนจาก Package url_launcher ซึ่งได้คะแนนเต็ม 110 และเป็น Flutter Favorites
โดย Metric หลักทั้งสามอย่าง ได้แก่ Likes, Pub Points และ Popularity มีความหมายดังนี้

- Likes - จำนวน Likes ที่ให้โดยนักพัฒนาที่ใช้งาน Package ซึ่งบอกได้คร่าว ๆ ว่านักพัฒนาชื่นชอบ Package นี้มากแค่ไหน
- Pub Points - คะแนนซึ่งถูกคำนวณออกมาโดยระบบของ Pub เอง ซึ่งเกณฑ์โดยหลัก ๆ จะเกี่ยวข้องกับคุณภาพของโค้ดของ Package นั้น ๆ เช่น ใช้งาน API Endpoints ที่ปลอดภัย,​ ใช้ Syntax ที่มีความสม่ำเสมอ,​ ดูแล และอัพเดท Package บ่อยแค่ไหน, มี Documentation และตัวอย่างที่ดีหรือไม่ จะเห็นได้ว่าหนึ่งเกณฑ์ที่ถูกเพิ่มเข้ามาก็คือเรื่องของการสนับสนุนหลาย Platforms ซึ่งตรงจุดนี้เองที่ Flutter พยายามผลักดันมากขึ้นในเรื่องการของการสนับสนุนทุก Platforms เช่นเดียวกับตัว Flutter
- Popularity - ความนิยมของ Package นั้น ๆ ในช่วง 60 วันย้อนหลัง โดยถูก Normalized ให้กลายเป็นค่าจาก 100% (นิยมมาก) ถึง 0% (ไม่มีใครใช้) โดยในอนาคตอาจมีการปรับตรงนี้ให้แสดงผลเป็นจำนวนจริง ๆ (Actual download count) แทนเปอร์เซ็นต์ที่ถูก Normalized

---

## Design

นอกเหนือไปจากการปรับปรุงระบบคะแนน และเพิ่มฟีเจอร์ต่าง ๆ เพื่อความสะดวกสบายของนักพัฒนาแล้ว ทางทีมพัฒนา pub.dev ยังได้มีการปรับปรุง Design ใหม่อีกด้วย เพื่อให้สอดคล้องกับ [dart.dev](http://dart.dev) และ [dartpad.dev](https://dartpad.dev) มากยิ่งขึ้น รวมไปถึงการนำ Material Design เข้ามาใช้มากขึ้น เช่น การใช้ Card และ Chip 

ซึ่งไม่เพียงแต่ Design ที่สวยงาม และสอดคล้องมากยิ่งขึ้นเท่านั้น ในรอบนี้ยังได้มีการแบ่งหมวดหมู่ที่ดียิ่งขึ้น ดังจะเห็นได้จากหน้าแรก ที่มีการแนะนำ Package ที่เป็น
![](__GHOST_URL__/content/images/2020/07/image-1.png)
- Flutter Favorites - Package คุณภาพสูงที่ถูกคัดเลือกมาโดยคณะกรรมการ

![](__GHOST_URL__/content/images/2020/07/image-2.png)
- Most Popular Pakacges - Package ที่มีการดาวน์โหลดสูงสุดในช่วง 60 วันที่ผ่านมา

![](__GHOST_URL__/content/images/2020/07/image-3.png)
- Top Flutter Packages - Package ที่เพิ่มความสามารถใหม่ ๆ ให้กับ Flutter

![](__GHOST_URL__/content/images/2020/07/image-4.png)
- Top Dart Packages - Package ที่เพิ่มความสามารถใหม่ ๆ ให้กับ Dart

สำหรับหน้าอื่น ๆ เองก็มีการปรับปรุงให้สวยงามยิ่งขึ้น โดยเฉพาะในส่วนของ Type ซึ่งมีการนำ Type Scale มาใช้เพื่อให้ตัวอักษรภายในเว็บไซต์มี Consistency มากยิ่งขึ้น
![](__GHOST_URL__/content/images/2020/07/image-5.png)หน้าผลลัพธ์การค้นหา![](__GHOST_URL__/content/images/2020/07/image-6.png)หน้าแสดงรายละเอียดข้อมูล Package
---

สำหรับคนที่สนใจรายละเอียดแบบเต็ม ๆ ก็สามารถติดตามได้ทาง [บทความต้นฉบับ](https://medium.com/dartlang/pub-dev-redesign-747406dcb486)

---

## *📚 Hope you enjoy reading! 📚*

---
