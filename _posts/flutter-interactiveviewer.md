---
title: "Flutter: InteractiveViewer มาทำให้ Widget ของเรา Pan, Zoom กันเถอะ"
slug: flutter-interactiveviewer
date: '2020-11-07T06:11:02.000Z'
tags: Flutter
coverImage: /assets/blog/flutter-interactiveviewer/cover.jpeg
author:
  name: Pittawat Taveekitworachai
  picture: /assets/blog/authors/pittawat.jpg
ogImage:
  url: /assets/blog/flutter-interactiveviewer/cover.jpeg
---

หลายครั้งที่เรามี Content ที่มีขนาดใหญ่กว่าขนาดของหน้าจอหรือขนาดของ Parent Widget แต่เราก็ไม่อยากให้ผู้ใช้ของเราต้องสูญเสียข้อมูลที่อาจจะต้องการไป เช่น เรามีตารางขนาดใหญ่มาก จนตัวอักษรเล็กไปหมด แน่นอนว่าเราต้อง Zoom เพื่อให้เห็นได้ชัดเจนยิ่งขึ้น แต่นั่นก็จะทำให้ข้อมูลส่วนที่อยู่นอกหน้าจอหายไปด้วย จะดีกว่ามั้ยหากเราสามารถทำให้ผู้ใช้ของเรา Pan เลื่อนดูข้อมูลส่วนที่อยู่นอกหน้าจอได้ นั่นคือหน้าที่ของ `InteractiveViewer` นั่นเอง

---

## InteractiveViewer

`InteractiveViewer` เป็น Widget ที่จะอนุญาตให้ผู้ใช้สามารถโต้ตอบกับ Widget ของเราได้ ไม่ว่าจะเป็นการ Pan, Zoom หรืออื่น ๆ แล้วแต่เราจะ Implement สำหรับวิธีการใช้ก็ง่ายดายมาก เพียงแค่เอา `InteractiveViewer` ไป Wrap Widget ที่เราต้องการให้สามารถ Interact ได้เท่านั้นเอง

    // ...
    InteractiveViewer(
    	child: WigetWeWantToZoom(),
    ),
    // ...

ข้อควรระวังหนึ่งเมื่อใช้ `InteractiveViewer` ก็คือ Widget ตัวนี้นั้นอาจจะ Draw นอก Area ปกติของ Child Widget ได้ ซึ่งอาจทำให้ Child Widget ที่ต้องมีการ Interact ไม่ได้รับ User Input เช่น การ Touch เมื่อกดนอก Input Area ซึ่ง `InteractiveViewer` วาดเกินไว้ โดยเราสามารถแก้ไขปัญหานี้ได้ด้วยการ Wrap `InteractiveViewer` ไว้ใน `ClipRect` อีกชั้นนั่นเอง

---

ศึกษาเพิ่มเติมเกี่ยวกับ `InteractiveViwer` ได้ที่ [API Document](https://api.flutter.dev/flutter/widgets/InteractiveViewer-class.html)

---

## *****📚 Hope you enjoy reading! 📚*****

---
