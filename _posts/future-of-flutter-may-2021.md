---
title: "Flutter: วิเคราะห์อนาคตของ Flutter 2.2+"
slug: future-of-flutter-may-2021
date: '2021-05-22T14:55:19.000Z'
tags: Flutter, Dart
---

Google I/O งานอัพเดตใหญ่ประจำปีจาก Google ที่จะมาเปิดตัวนวัตกรรมใหม่ ๆ สำหรับผู้ใช้ทั่วไป และนักพัฒนา และในปีนี้ (2021) เอง ก็มีอัพเดตเกี่ยวกับ Flutter ใหม่ ๆ ในหลายเรื่องเช่นเดียวกัน และนั่นถือว่าเป็นสิ่งที่น่าสนใจมาก ๆ สำหรับอนาคตของ Flutter

Flutter เป็น UI Toolkit บนภาษา Dart โดยตัว Flutter เองสามารถสร้าง UI ที่มีความสวยงาม และประสิทธิภาพดีได้ ซึ่งไม่เพียงแค่นั่น เพราะ Flutter ยังสามารถสร้างแอปพลิเคชันโดยมีเพียง 1 source code project แล้วสามารถ export ได้ไปยังหลายแพลตฟอร์ม​

---

## Flutter 2.2
![](__GHOST_URL__/content/images/2021/05/image.png)Source: https://medium.com/flutter/announcing-flutter-2-2-at-google-i-o-2021-92f0fcbd7ef9
ก้าวล่าสุดของ Flutter ถือว่าน่าสนใจมาก ซึ่งก้าวนี้เองของ Flutter 2.2 ไม่ได้มาแบบเพียว ๆ เพราะ Dart 2.13 เองก็มีฟีเจอร์ที่น่าสนใจและอาจเผยให้เราเห็นถึงทิศทางในอนาคตของ ecosystem นี้เช่นกัน

โดยในปัจจุบันสถานะของการสนับสนุนแพลตฟอร์มต่าง ๆ ดังนี้

*อัพเดต ณ วันที่ 22 พฤษภาคม 2564*
PlatformSupport LevelAndroidStableiOSStableWebStableWindowsBetaLinuxBetamacOSBetaWindows (UWP)AlphaTizenAnnouncedEmbedded LinuxAnnounced[

Supported platforms

The platforms that Flutter supports by platform version.

![](https://flutter.dev/images/favicon.png)Flutter Logo

![](https://flutter.dev/images/flutter-logo-sharing.png)
](https://flutter.dev/docs/development/tools/sdk/release-notes/supported-platforms)[

What’s new in Flutter 2.2

Flutter 2.2 focuses on polish and optimization, including iOS performance improvements, Android deferred components, updated service workers and more!

![](https://miro.medium.com/fit/c/152/152/1*sHhtYhaCe2Uc3IU0IgKwIQ.png)FlutterChris Sells

![](https://miro.medium.com/max/1200/0*fS4WbRPwmo_FQgDo)
](https://medium.com/flutter/whats-new-in-flutter-2-2-fd00c65e2039)[

Samsung porting Flutter to Galaxy Watch and Tizen devices - 9to5Google

Samsung is working to make it possible to create apps for Galaxy Watch, Smart TVs, and more Tizen devices with Google’s Flutter SDK.

![](https://9to5google.com/wp-content/themes/9to5-2015/images/favicons/9to5google/icon-192x192.png)9to5GoogleKyle Bradshaw

![](https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2021/05/flutter-tizen.png?resize&#x3D;1200%2C628&amp;quality&#x3D;82&amp;strip&#x3D;all&amp;ssl&#x3D;1)
](https://9to5google.com/2021/05/18/samsung-tizen-flutter-sdk-galaxy-watch/)
จากตารางนี้จะเห็นได้ว่า Flutter เองพยายามทำตัวเองให้กลายเป็น universal toolkit ที่สามารถเขียนแอปแล้วนำโค้ดวนใหญ่มา reuse ได้อย่างง่ายดายใน platform อื่น ๆ ซึ่งเรายังคงต้องยอมรับว่าแพลตฟอร์มต่าง ๆ เองก็มี idiom ของตัวเองที่แตกต่างกัน การใช้ UI & UX และ features set แบบเดียวกันกับทุกแพลตฟอร์มย่อมไม่ใช่ความคิดที่ดีอย่างแน่นอน โดยความพยายามล่าสุดของ Flutter ในเรื่องนี้ก็การพยายามนำเสนอสิ่งที่เรียกว่า Platform Adaptive ไม่ใช่การพยายามทำตัว responsive แบบเดียวกับการแก้ปัญหาของเว็บ เพราะไม่เพียงแค่คิดถึง UI & UX เท่านั้น โดยผู้ที่สนใจสามารถศึกษาเพิ่มเติมได้จาก

อีกหนึ่งเรื่องที่ Flutter เองพยายามนำเสนอเป็นจุดแข็งของตัวเองคือเรื่องของ ecosystem สำหรับนักพัฒนา ซึ่ง Flutter พยายามบอกเราว่าสิ่งต่าง ๆ ใน Flutter ที่จำเป็นสำหรับนักพัฒนา เช่น plugin ที่ integrate เข้ากับ IDE ต่าง ๆ หรือจะเป็น DevTool เองก็เติบโตตาม Flutter ไปเช่นกัน ซึ่งต้องยอมรับว่าด้วยความที่เป็น open source แทบทุกอย่างทั้งตัวภาษา Dart, Flutter, DevTools, Community นั่นทำให้ปัญหาต่าง ๆ ถูกพบและแก้ไขได้อย่างรวดเร็ว รวมไปถึงที่ทีม internal ของ Google ที่ดูแล Flutter เองก็คอยรับฟังข้อเสนอแนะต่าง ๆ จากชุมชนนักพัฒนา เช่น เรื่องของ iOS Jank ที่กำลังจะถูกแก้ไขใน Stable update ถัดไปเร็ว ๆ นี้ (หนึ่งในปัญหาที่ hold นักพัฒนาหลาย ๆ คนออกจากการนำ Flutter ไปใช้ระดับ production โดยลักษณะของปัญหา คือ animation ภายในแอปที่สร้างจาก Flutter บน iOS ไม่ว่าจะใช้ hardware ที่ใหม่ขนาดไหนก็จะกระตุกเสมอเมื่อรันเป็นครั้งแรก)
![Handshake](https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwxMTc3M3wwfDF8c2VhcmNofDJ8fGFncmVlfGVufDB8fHx8MTYyMTY5NTE5Nw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=2000)Photo by [Chris Liverani](https://unsplash.com/@chrisliverani?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit) / [Unsplash](https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit)
อีกหนึ่งเรื่องที่กำลังจะเกิดขึ้นแน่ ๆ ก็คือการที่ Flutter ในอนาคตจะต้องสนับสนุนการ export ไปยังแพลตฟอร์มอื่น ๆ อีกมากมายแน่นอน โดยเฉพาะพวก smart device เช่น Wear, watchOS, tvOS รวมไปถึงความสามารถอื่น ๆ ที่ native app ทำได้แต่ Flutter ยังทำไม่ได้ ซึ่งแม้ว่าจะปัจจุบันเราจะได้การพยายาม cover ในส่วนนี้จาก Flutter ในสองรูปแบบ คือ การที่สามารถ integrate Flutter เข้าไปยัง native app ที่มีอยู่แล้วได้ในระดับหนึ่ง และการที่มี plugin ที่สามารถสนับสนุนได้แทบทุกแพลต์ฟอร์มบน pub.dev สำหรับ common use case ซึ่งถ้าหากหา plugin ที่ต้องการไม่เจอก็สามารถ plugin ใช้เองได้เช่นกัน ซึ่งการพยายามเขียนติดต่อกับ native API ก็สามารถทำได้ไม่ยากนัก หากมีความรู้เกี่ยวกับ native platform นั้น ๆ อยู่แล้ว

---

## Dart 2.13
![](__GHOST_URL__/content/images/2021/05/image-1.png)Source: https://medium.com/dartlang/announcing-dart-2-13-c6d547b57067
มาถึงฝั่ง Dart เอง ในเวอร์ชัน 2.13 ก็ได้มีการผลักดัน Forigen Function Interface (FFI) ที่ทำให้สามารถติดต่อกับโค้ดภาษา C ได้แบบง่าย ๆ ไม่ซับซ้อน (เพราะมาพร้อม code generation ถ้ามี header file อยู่แล้ว)​ ซึ่งตรงนี้ทำให้ libraries ต่าง ๆ ที่เขียนในภาษา C หรือ ภาษาอื่น ๆ ที่สามารถ compile ออกมาเป็น C ได้ (เช่น Go, Rust) สามารถใช้ประโยชน์ได้อย่างเต็มที่ในโลกของ Dart นั่นหมายความว่า libraries ต่าง ๆ ที่มีอยู่แล้วและเขียนไว้ให้ desktop OS ใช้ ซึ่งมักจะอยู่ในภาษา C ก็สามารถต่อกับ Dart แให้เรียกใช้ โดยที่ฝั่ง Dart อาจจะเขียน API มาครอบอีกชั้นแล้วทำเป็น plugin ได้เช่นกัน

นอกจากนี้ตัวภาษา Dart เองในปัจจุบันเริ่มมีฟีเจอร์หลาย ๆ อย่างเช่นเดียวกับ modern programming languages อื่น ๆ เช่นเดียวกัน ไม่ว่าจะเป็น sound null-safety, typedef ซึ่งทำให้การเขียนโค้ดเป็นระเบียบ ดูแลรักษาได้ง่ายและสนุกมากขึ้น

---
![Rancho Santa Fe views](https://images.unsplash.com/photo-1499793134087-005f63eebec1?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwxMTc3M3wwfDF8c2VhcmNofDE2fHxwb2ludGluZ3xlbnwwfHx8fDE2MjE2OTUxMzI&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=2000)Photo by [Austin Neill](https://unsplash.com/@arstyy?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit) / [Unsplash](https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit)
ต้องบอกว่าจุดนี้เองถือว่าเป็นจุดที่น่าสนใจมาก ๆ ว่าตัว Flutter เองจะเติบโตไปในทิศทางใดกันแน่

---

## ******************************************************************************************************************************************📚 Hope you enjoy reading! 📚******************************************************************************************************************************************

---
