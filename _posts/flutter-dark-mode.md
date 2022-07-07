---
title: "Flutter: การทำให้ Application รองรับ Dark Mode"
slug: flutter-dark-mode
date: '2020-06-10T14:24:58.000Z'
tags: Flutter
coverImage: /assets/blog/flutter-dark-mode/cover.jpeg
excerpt: แน่นอนว่าเราควรเคารพการตั้งค่าของผู้ใช้งาน หากผู้ใช้งานตั้งค่าให้ OS เป็น Dark Mode แล้ว ทุกแอพก็ควรเคารพสิ่งนั้น แล้วเราจะสามารถทำแบบนั้นได้อย่างไรบ้างใน Flutter?
author:
  name: Pittawat Taveekitworachai
  picture: /assets/blog/authors/pittawat.jpg
ogImage:
  url: /assets/blog/flutter-dark-mode/cover.jpeg
---

แน่นอนว่าเราควรเคารพการตั้งค่าของผู้ใช้งาน หากผู้ใช้งานตั้งค่าให้ OS เป็น Dark Mode แล้ว ทุกแอพก็ควรเคารพสิ่งนั้น แล้วเราจะสามารถทำแบบนั้นได้อย่างไรบ้างใน Flutter?

    // ...
    MaterialApp(
    	// ...
    	darkTheme: ThemeData.dark()
        // ...
    );
    // ...

เพียงแค่เราส่งผ่าน `ThemeData` ที่เราต้องการ/ตั้งค่าไว้เข้าไปใน `darkTheme` ซึ่งเป็น attribute หนึ่งของ `MaterialApp` เท่านั้นเวทมนตร์ก็จะเกิดขึ้น!

---

## *📚 Hope you enjoy reading! 📚*

---
