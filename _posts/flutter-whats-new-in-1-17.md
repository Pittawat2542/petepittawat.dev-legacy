---
title: "Flutter: มีอะไรใหม่บ้างในเวอร์ชัน 1.17"
slug: flutter-whats-new-in-1-17
date: '2020-05-22T13:25:25.000Z'
tags: Flutter, News
---

Flutter 1.17 ถือได้ว่าเป็น major stable version แรกของ Flutter ที่ทำการปล่อยออกมาในปีนี้ (2020) และเป็นเวอร์ชันแรกที่เปลี่ยนมาใช้[การนับเลขเวอร์ชันแบบใหม่](https://medium.com/flutter/flutter-spring-2020-update-f723d898d7af)อีกด้วย 

## Bug Fixes

ซึ่งแน่นอนว่าในเวอร์ชันนี้ก็ได้มีการแก้ไขข้อผิดพลาดต่าง ๆ ตามปกติ โดยปิด issue ไปได้มากถึง 6,339 issues นับตั้งแต่เวอร์ชัน 1.12 ซึ่งเป็นเวอร์ชันก่อนหน้า โดยเฉพาะการแก้ไขเกี่ยวกับ Accessibility และ Internationalization

## Performance and Size Improvements

นอกจากนี้ ในเวอร์ชันนี้ เพียงแค่คุณอัพเกรดเวอร์ชันของ Flutter ของคุณมาเป็น 1.17 คุณก็จะได้รับประสิทธิภาพที่ดีขึ้นแบบฟรี ๆ ซึ่งหลัก ๆ จะเป็นการลดการใช้งาน CPU/GPU และ Memory ลงนั่นเอง ซึ่งยังไม่ได้หมดเพียงเท่านี้ เพราะเวอร์ชันนี้ยังลดขนาด Bundle ของแอพพลิเคชันลงอีกด้วย สำหรับ iOS ก็มีการเปลี่ยนแปลงโดยการเพิ่มการเข้าถึง Metal ซึ่งเป็น API ของ iOS แอพพลิเคชันที่ใช้ในการเข้าถึง GPU โดยตรง และทำให้อุปกรณ์ทั้งหมดที่สนับสนุน API นี้ได้รับประโยชน์ไปเต็ม ๆ

## New Widget: NavigationRail

Navigation rail ถือเป็น beta component ของ Material Design โดยมีหน้าที่หลัก ๆ เป็น Navigation Pane สำหรับผู้ใช้งาน โดยแตกต่างกับ Navigation bar ปกติที่อยู่ทางด้านข้างแทนที่จะเป็นด้านบนหรือด้านล่าง โดยสามารถศึกษาเพิ่มเติมเกี่ยวกับ Navigation rail ได้ที่ [material.io](http://material.io/components/navigation-rail)

สำหรับ Widget อื่น ๆ ก็มีการปรับปรุงเพิ่มเติมให้สอดคล้องกับ Material Guideline ซึ่งมีการอัพเดทเช่นกัน สามารถอ่านเพิ่มเติมไปที่ [บทความต้นฉบับ](https://medium.com/flutter/announcing-flutter-1-17-4182d8af7f8e)

## Text Scale

เนื่องจาก Material Design ได้มีการอัพเดท Guideline เกี่ยวกับ Text Scale ซึ่งหลัก ๆ จะเป็นการปรับปรุงชื่อเรียกสเกลต่าง ๆ ให้มีความเหมาะสมมากยิ่งขึ้น โดยสามารถตรวจสอบเพิ่มเติมได้ที่ [บทความต้นฉบับ](https://medium.com/flutter/announcing-flutter-1-17-4182d8af7f8e)

---

สำหรับผู้ที่สนใจสามารถอัพเดทเวอร์ชันของ Flutter ผ่าน Terminal ได้ด้วยคำสั่ง

    flutter upgrade

---

สามารถอ่านรายละเอียดเต็ม ๆ ได้ที่ [บทความต้นฉบับ](https://medium.com/flutter/announcing-flutter-1-17-4182d8af7f8e) โดยทีม Flutter บน Medium
