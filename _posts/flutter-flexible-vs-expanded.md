---
title: "Flutter: Flexible vs Expanded"
slug: flutter-flexible-vs-expanded
date: '2020-07-03T09:15:38.000Z'
tags: Flutter
coverImage: /assets/blog/flutter-flexible-vs-expanded/cover.jpeg
excerpt: บางครั้งเราต้องการให้ Widget ของเรา Take space ที่เหลือทั้งหมดของ Column/Row นั้น ๆ หรือ เราอาจต้องการให้ Widget แต่ละส่วนใน​ Column/Row ใช้ Space เท่า ๆ กัน แน่นอนว่า Widget 2 ตัว ที่มักถูกใช้รับมือกับสถานการณ์แบบนี้ คงหนีไม่พ้น Flexible และ Expanded แล้วทั้งสองตัวนี้ต่างกันอย่างไร?
author:
  name: Pittawat Taveekitworachai
  picture: /assets/blog/authors/pittawat.jpg
ogImage:
  url: /assets/blog/flutter-flexible-vs-expanded/cover.jpeg
---

บางครั้งเราต้องการให้ Widget ของเรา Take space ที่เหลือทั้งหมดของ `Column`/`Row` นั้น ๆ หรือ เราอาจต้องการให้ Widget แต่ละส่วนใน​ `Column`/`Row` ใช้ Space เท่า ๆ กัน แน่นอนว่า Widget 2 ตัว ที่มักถูกใช้รับมือกับสถานการณ์แบบนี้ คงหนีไม่พ้น `Flexible` และ `Expanded` แล้วทั้งสองตัวนี้ต่างกันอย่างไร?

---

## Flexible

`Flexible` ใช้สำหรับทำให้ Child Widget ขยายจนเต็มพื้นที่ว่างที่เหลืออยู่ตามแกนหลัก (Main Axis เช่น `Row` จะเป็นแนวนอน หากเป็น `Column` จะเป็นแนวตั้ง) แต่ไม่บังคับ นั่นคือเราอาจตั้งให้ Child ตัวนั้นมีค่าของ `width`/`height` ไว้ก็ได้ โดย Properties ที่สำคัญของ `Flexible` คือ `fit` ซึ่งใช้สำหรับบอกว่าจะให้ Child Widget จัดการกับพื้นที่อย่างไร โดย `fit` ต้องการค่าประเภท `FlexFit` ซึ่งมีอยู่ด้วยกัน 2 แบบ คือ `FlexFit.loose` และ `FlexFit.tight` ซึ่งโดย Default จะเป็น `FlexFit.loose` ซึ่งไม่บังคับว่า Child Widget ต้องใช้ Space ทั้งหมด โดยอาจมีขนาดใดก็ได้ที่ใหญ่ที่สุดเท่ากับที่ว่างที่เหลือ หรือเล็กกว่านั้น ในขณะที่ `FlexFit.tight` จะบังคับให้ Child Widget ใช้พื้นที่ทั้งหมดที่เหลืออยู่ 

นอกจากนี้ `Flexible` ยังมีประโยชน์ในกรณีที่เราต้องการแบ่งพื้นที่ออกเป็นอัตราส่วนต่าง ๆ ได้ด้วย ด้วย Property `flex` ซึ่งมีค่า Default เป็น `1` เราสามารถตั้งให้เป็นเลขต่าง ๆ เพื่อให้เกิดการคำนวณตามอัตราส่วนได้อีกด้วย เมื่อใช้คู่กับ `Flexible` ตัวอื่น

โดยการคำนวณพื้นที่ของ `flex` จะหาพื้นที่ทั้งหมดที่ใช้ได้มาลบกับพื้นที่ของ Widget ที่ **Inflexible** (Widget ที่มีขนาดแบบ Static เช่น การกำหนด `width`/`height` โดยตรง) จากนั้นจะนำมาหารตามอัตราส่วน เช่น หากมี `Flexible` 2 อัน อันแรกกำหนด `flex: 1` อันที่ 2 กำหนด `flex: 2` และมี `Container` อีกหนึ่งอันที่กำหนด `width: 50` อยู่ใน `Row` เดียวกัน สมมติว่าเรามีพื้นที่งหมดที่เป็นไปได้เท่ากับ **350** ตามแนวนอน

การคำนวณจะเริ่มจากการนำ 350 มาตั้ง ลบด้วยขนาดตามแกนหลัก ซึ่งในที่นี้ คือ แนวนอน (`width`) ของ Inflexible Widget มาลบ ซึ่งเรามีหนึ่งอันคือ `Container` ที่มี `width: 50` ทำให้เราเหลือพื้นที่ที่จะนำมาหารเท่ากับ 300 จากนั้น เราจะไปดูว่า `flex` รวมกันเท่ากับเท่าไร ซึ่งเรามี `flex: 1` และ `flex: 2` รวมกันเท่ากับ 3 เราจึงนำ 300 / 3 = 100 นั่นแปลว่า 1 ส่วนของพื้นที่เท่ากับ 100 เราจะให้พื้นที่ตามอัตราส่วนของแต่ละ Widget โดย `Flexible` ที่มี `flex: 1` จะได้ width เท่ากับ 100 ส่วน `Flexible` ที่มี `flex: 2` จะได้ width เท่ากับ 200 นั่นเอง

---

## Expanded

แล้ว `Expanded` ละ คือ อะไร คำตอบ คือ มันคือ `Flexible` ที่มี `fit: FlexFit.tight` นั่นเอง นั่หมายความว่า `Expanded` ทำได้ทุกอย่างเหมือน `Flexible` แต่บังคับให้ Child Widget ต้องใช้พื้นที่ที่ว่างทั้งหมดนั่นเอง

---

## *📚 Hope you enjoy reading! 📚*

---
