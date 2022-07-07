---
title: คาดการณ์ Flutter Engage 2021
slug: flutter-engage-2021-prediction
date: '2021-02-20T13:17:55.000Z'
tags: Flutter
coverImage: /assets/blog/flutter-engage-2021-prediction/cover.jpeg
excerpt: อีกไม่นานแล้วสำหรับ Flutter Engage งานใหญ่ประจำปีของ Flutter ที่จะมาอัพเดตรวมถึงปล่อยของใหม่ ๆ ออกมามากมาย ตอนนี้ก็ถึงเวลามาคาดการณ์กันดีกว่าว่าภายในงานจะมีอะไรบ้าง
author:
  name: Pittawat Taveekitworachai
  picture: /assets/blog/authors/pittawat.jpg
ogImage:
  url: /assets/blog/flutter-engage-2021-prediction/cover.jpeg
---

อีกไม่นานแล้วสำหรับ Flutter Engage งานใหญ่ประจำปีของ Flutter ที่จะมาอัพเดตรวมถึงปล่อยของใหม่ ๆ ออกมามากมาย ซึ่งในปีนี้จะจัดขึ้นแบบ Virtual ในวันที่ 3 มีนาคม 2564 เวลา 9:30AM - 1:30PM PST หรือค่ำวันที่ 3 เข้าเช้าวันที่ 4 มีนาคม 2564 เวลา 00:30 - 04:30 ตามเวลาประเทศไทย (GMT+7) ซึ่งแน่นอนว่าอาจจะดึก/เช้าไปสักนิดสำหรับหลาย ๆ คน แต่ไม่ต้องเป็นกังวลไปเพราะว่ามีย้อนหลังให้นั่นเอง สำหรับใครที่สนใจก็สามารถลงทะเบียนเพื่อรับข่าวสารได้ที่ [Flutter Website](https://events.flutter.dev)

ตอนนี้ก็ถึงเวลามาคาดการณ์กันดีกว่าว่าภายในงานจะมีอะไรบ้าง

*Disclaimer: การคาดเดานี้เป็นเพียงความคิดเห็นส่วนตัวของผู้เขียนเท่านั้น ซึ่งอาจจะมีหรือไม่มีก็ได้*

![](https://images.unsplash.com/photo-1542744095-291d1f67b221?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MXwxMTc3M3wwfDF8c2VhcmNofDN8fHdlYnxlbnwwfHx8&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=2000)
## Flutter for Web Stable

หลังจากที่อยู่ในสถานะ Beta มาอย่างยาวนาน ก็คงจะถึงเวลาแล้วที่เราจะได้เห็น Flutter for Web (หรือชื่อเก่า Project Hummingbird) เข้าสู่สถานะ Stable กันสักที ซึ่งก็มีความเป็นไปได้สูงด้วย สัญญาณจาก [GitHub Issues](https://github.com/flutter/flutter/pull/76433) และแน่นอนว่าคงมาพร้อมกับตัวอย่าง Application ที่มีการใช้งานจริงแล้วบน Production โดยส่วนตัวขอเดาว่าหนึ่งในนั้นจะต้องมี [Rive 2](https://rive.app) ซึ่งเป็นโปรแกรมสำหรับใช้พัฒนา Animation ที่ทำงานได้อย่างแนบเนียนกับ Flutter โดยเร็ว ๆ พึ่งประกาศเวอร์ชัน 2 ออกมา โดยพัฒนาด้วย Flutter for Web ใหม่ทั้งหมด โดยมีทั้งประสิทธิภาพที่ดี และ UI ที่สวยงาม

![](https://images.unsplash.com/photo-1593642532400-2682810df593?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MXwxMTc3M3wxfDF8c2VhcmNofDF8fGRlc2t0b3B8ZW58MHx8fA&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=2000)
##  Flutter for Desktop Beta

ตามกันมาติด ๆ กับ Flutter for Desktop ที่ตอนนี้อยู่ในสถานะ Alpha จาก [GitHub Issues](https://github.com/flutter/flutter/pull/76433) ตัวเดียวกันทำให้เราสามารถคาดการณ์ได้ว่า Flutter for Desktop น่าจะขยับไปยัง Beta ในเร็ว ๆ นี้

![](https://images.unsplash.com/photo-1564900132589-61cd95f9bd84?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MXwxMTc3M3wwfDF8c2VhcmNofDR8fGRhcnR8ZW58MHx8fA&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=2000)
## Dart Sound Null-safety (NNBD - Non-Nullable By Default)

แน่นอนว่า Dart ภาษาสำหรับใช้ในการพัฒนา Flutter Application เองก็เตรียมปล่อยของใหม่ที่ค้างไว้นานแล้ว และควรจะ Release ในปีที่แล้วอย่าง Sound Null Safety ที่จะช่วยทั้งการทำโค้ดปลอดภัยยิ่งขึ้น เพราะจะไม่มีสามารถเป็น Null ได้หากเราไม่ประกาศไว้อย่างชัดเจนด้วยตัวเอง โดยเราสามารถสังเกตเห็นได้จากบทความที่ออกมาแนะนำถึงการเตรียมความพร้อมบน [Medium](https://medium.com/dartlang/preparing-the-dart-and-flutter-ecosystem-for-null-safety-e550ce72c010)

![Fireplace in the evening. In the swiss mountains](https://images.unsplash.com/photo-1556191325-0e553d4de1fb?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MXwxMTc3M3wwfDF8c2VhcmNofDM2fHxmaXJlfGVufDB8fHw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=2000)
## [FlutterFire](https://firebase.flutter.dev)

เราได้เห็นความพยายามมาสักพักใหญ่แล้วสำหรับ Plugin ในตระกูล Firebase บริการที่นักพัฒนาหลายคนชื่นชอบ ซึ่งทาง Flutter เองได้มีการจ้างนักพัฒนาภายนอกเพื่อเพิ่มทั้งฟีเจอร์ใหม่ ๆ และความเสถียรให้กับ Plugin มาสักพักใหญ่แล้ว โดยคาดว่าจะมีการประกาศถึง Roadmap ที่ชัดเจนมากยิ่งขึ้น พร้อมกับ Plugin ใหม่ ๆ ที่จะมา support บริการอื่น ๆ ของ Firebase ที่ยังคงขาดไป รวมถึงการสนับสนุน Plugin บน Web เพื่อตอบรับกับ Flutter for Web นั่นเอง

![](https://images.unsplash.com/photo-1590103514966-5e2a11c13e21?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MXwxMTc3M3wwfDF8c2VhcmNofDJ8fHJvYWRtYXB8ZW58MHx8fA&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=2000)
## Metrics & Roadmap

แน่นอนว่าตามสไตล์ Keynote ทั่วไปต้องมาพร้อมกับตัวเลขเจ๋ง ๆ ที่ชวนให้ตะลึงอยู่เสมอ เช่นจำนวนแอปที่ใช้ Flutter บน Store​, จำนวน Packages/Plugin บน [pub.dev](https://pub.dev) รวมถึงตัวเลขจาก Flutter Survey ด้วยเช่นกัน นอกจากนี้น่าจะกล่าวถึง Roadmap ของ Flutter ตลอดทั้งปีนี้ ที่พูดถึง Ecosystem ของ Flutter และการเพิ่มประสิทธิภาพต่าง ๆ

![Blue Jays.](https://images.unsplash.com/photo-1579273168832-1c6639363dad?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MXwxMTc3M3wwfDF8c2VhcmNofDh8fHR3b3xlbnwwfHx8&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=2000)
## Flutter 2.0.0

ด้วยปริมาณของฟีเจอร์ใหม่ ๆ รวมถึงการแก้ไขต่าง ๆ มากมาย หาก Flutter จะขยับจากเลขเวอร์ชัน 1 ที่อยู่มาอย่างยาวนานไปยัง 2 ก็ไม่ใช่เรื่องแปลกอะไร
![Danbo in a Basket of Coffee Candies](https://images.unsplash.com/photo-1576342334534-8a104dc1af24?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MXwxMTc3M3wwfDF8c2VhcmNofDc1fHxtYXNjb3R8ZW58MHx8fA&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=2000)
## Bonus: Mascot

สำหรับเจ้า Dash Mascot ของ Flutter เราได้เห็นแล้วว่าบนเว็บไซต์ของ Flutter Engage เองนั้น เจ้า Dash ดูน่ารักขึ้นอย่างผิดหูผิดตา รวมถึงมาในลุคและสไตล์อื่น ๆ อีกด้วย ก็ถือเป็นสีสันอีกหนึ่งอย่างที่อาจเกิดขึ้นได้นั่นเอง

---

ทั้งหมดนี้ก็เป็นเพียงการคาดการณ์เท่านั้น จะมีอะไรที่ถูกประกาศบ้าง อย่าลืมติดตาม Flutter Engage ในวันที่ 4 มีนาคมนี้ตามเวลาประเทศไทย!

---

## *📚 Hope you enjoy reading! 📚*

---
