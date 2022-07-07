---
title: "Flutter: App Size Tool ส่องให้เห็นกันไปเลยว่าอะไรทำให้แอปเราบวม"
slug: flutter-app-sizing-tool
date: '2020-10-10T10:17:36.000Z'
tags: Flutter
coverImage: /assets/blog/flutter-app-sizing-tool/cover.jpeg
excerpt: แม้ว่าในปัจจุบัน Smartphone จะมาพร้อมขนาดของพื้นที่เก็บข้อมูลที่เพิ่มมากขึ้นในทุกปี โดยในปัจจุบัน Smartphone ส่วนใหญ่จะมาพร้อมความจุ 64 - 128GB (2020) อย่างไรก็ตามสิ่งที่นักพัฒนาแอปพลิเคชันต้องคำนึงไว้เสมอก็คือพื้นที่นั้นไม่ได้มีไว้ให้แอปของเราทั้งหมด
author:
  name: Pittawat Taveekitworachai
  picture: /assets/blog/authors/pittawat.jpg
ogImage:
  url: /assets/blog/flutter-app-sizing-tool/cover.jpeg
---

แม้ว่าในปัจจุบัน Smartphone จะมาพร้อมขนาดของพื้นที่เก็บข้อมูลที่เพิ่มมากขึ้นในทุกปี โดยในปัจจุบัน Smartphone ส่วนใหญ่จะมาพร้อมความจุ 64 - 128GB (2020) อย่างไรก็ตามสิ่งที่นักพัฒนาแอปพลิเคชันต้องคำนึงไว้เสมอก็คือพื้นที่นั้นไม่ได้มีไว้ให้แอปของเราทั้งหมด พื้นที่นั้นควรจะให้ผู้ใช้ได้เก็บความทรงจำต่าง ๆ ในรูปแบบของรูปภาพและวิดีโอ รวมถึงเอกสารสำคัญต่าง ๆ ที่มีผลต่อการใช้ชีวิตของผู้คนเหล่านั้น

นี่จึงเป็นเหตุผลว่าทำไมขนาดของแอปพลิเคชันถึงมีความสำคัญ ซึ่ง Flutter เองก็ได้ให้ความสำคัญกับเรื่องนี้มาโดยตลอด ไม่ว่าจะเป็นการเพิ่ม Tree-shaking เข้ามา โดยเริ่มจากไอคอนก่อน เพื่อให้แอปของเรานั้นตอน Build ใน Release Mode มีเพียงแค่ไอคอนที่จำเป็นต้องใช้เท่านั้น ผู้ใช้จะได้ไม่ต้องโหลดไปมากเกินความจำเป็น

ใน Flutter 1.22 เอง Flutter ก็ได้คำนึงถึงเรื่องนี้ และได้มีการออกเครื่องมือตัวใหม่นั่นก็คือ App Size Tool สำหรับการส่องว่าโค้ดส่วนไหนส่งผลต่อขนาดสุดท้ายของแอปไปเท่าไรบ้าง โดยเครื่องมือตัวนี้ก็อยู่ใน DevTools ในแท็บ Analysis นั่นเอง

ซึ่ง App Size Tool ก็จะบอกข้อมูลเกี่ยวกับขนาด ซึ่งประกอบไปด้วย Dart Code, Native Code และส่วนประกอบที่ไม่ใช่ Code ที่รวมอยู่ภายในแอปของเรา เช่น Assets ต่าง ๆ และ Fonts โดย Dart code นั้นจะเป็นขนาดของผลลัพธ์สุดท้ายหลังจากที่เรา Compile แอปของเราใน Release/Profile Mode ซึ่ง Dart จะใช้การ Compile แบบ AOT แทน JIT ซึ่งมีการทำ Tree-shaking ลดโค้ดในส่วนที่ไม่จำเป็นออกไปให้ได้มากที่สุดแล้วนั่นเอง

## ใช้ยังไง?

ถ้า DevTools เชื่อมต่อกับแอปที่กำลังรันอยู่ เราสามารถไปที่แท็บ App Size ได้เลย

![Screenshot of app size tab](https://flutter.dev/assets/tools/devtools/app_size_tab-79a10a06025b87fdfc18f936185ca97746ba42c60d7661cc6498a80bf4605a35.png)

แต่ถ้า DevTools ไม่ได้เชื่อมต่อกับแอปที่กำลังรันอยู่ เราก็สามารถเข้าถึงได้จากหน้าแรกของ DevTools ได้เช่นกัน

![Screenshot of app size access on landing page](https://flutter.dev/assets/tools/devtools/app_size_access_landing_page-5f8e6299be5829643f5be8649d42869a1cab7152ece1b54d9de5ffebb75ebb22.png)

## แท็บ Analysis

ในแท็บนี้จะช่วยให้เราสามารถวิเคราะห์ขนาดของ Snapshot ที่เรากำลังสนใจอยู่ได้ โดยแสดงข้อมูลออกมาในรูปแบบของลำดับชั้นทั้งเป็น Treemap และตารางซึ่งสามารถดูข้อมูลเพิ่มเติม เช่น ทำไมโค้ดส่วนนี้ถึงรวมอยู่ในแอปที่คอมไพล์แล้วได้อีกด้วย โดยใช้ Dominator Tree และ Call Graph

## แท็บ Diff

ในแท็บ Diff เราจะสามารถที่จะเปรียบเทียบขนาดของสองไฟล์ได้ในเวลาเดียวกันซึ่งสองไฟล์นั้นจะมาจากสองเวอร์ชันที่แตกต่างกันของแอป โดยมีข้อมูลแสดงในรูปแบบของ Treemap และตารางเช่นเดิม

![Screenshot of app size diff](https://flutter.dev/assets/tools/devtools/app_size_diff-4fee2ce4ac69edb5761df30b49d1cc059bd4b68a7682c47e002d5ce90f68b68e.png)

สำหรับข้อมูลเพิ่มเติมเกี่ยวกับ App Size Tool สามารถดูได้ที่ [https://flutter.dev/docs/development/tools/devtools/app-size](https://flutter.dev/docs/development/tools/devtools/app-size)

และสำหรับข้อมูลเพิ่มเติมเกี่ยวกับขนาดของแอปที่คอมไพล์แล้วสามารถดูได้ที่ [https://flutter.dev/docs/perf/app-size#breaking-down-the-size](https://flutter.dev/docs/perf/app-size#breaking-down-the-size)

---

## *📚 Hope you enjoy reading! 📚*

---
