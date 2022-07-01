---
title: "Flutter: Package กับ Plugin ต่างกันยังไงนะ?"
slug: flutter-package-vs-plugin
date: '2020-06-14T08:56:11.000Z'
tags: Flutter
---

โลกของการพัฒนาซอฟต์แวร์ในปัจจุบัน เราแทบจะไม่เห็นโปรแกรมไหนที่ไม่พึ่งพา Public dependencies ในการพัฒนาอีกแล้ว อย่างน้อย ๆ พวก Utility ต่าง ๆ ในโปรแกรมที่เรามักจะใช้ประจำอย่างเช่น lodash Package ชื่อดังของ Node.js ที่แม้เราจะไม่ได้ใช้โดยตรงแต่หลาย ๆ Package ที่เราใช้ก็อาจจะนำมาใช้เช่นกัน

Dart เองก็พยายามสร้าง Ecosystem ที่ดีขึ้นมา นั่นทำให้เรามี [pub.dev](https://pub.dev) เว็บไซต์รวบรวม Package และ Plugin ต่าง ๆ ของทั้ง Dart และ Flutter ไว้ แล้ว Package กับ Plugin มันต่างกันยังไงละ?

---

## TLDR;

Package = collection ของ code

Plugin = package ที่มีการใช้ Platform Channels

---

## Package

Package คือ กลุ่มของโค้ดที่ถูก Provide ให้ Developer คนอื่น ๆ สามารถ Depend และนำไปใช้ในโปรเจคของตนเองได้ ซึ่งในโลกของ Flutter นั่น Package ก็อาจจะเป็นได้ทั้ง Collection ของ Utility และ Collection ของ Widget เช่น Provider package สำหรับใช้ในการ Manage State ใน Application

---

## Platform Channel

ก่อนอื่นเราต้องมารู้จัก Platform Channel กันก่อน Platform Channel เป็นหนึ่งในความสามารถของ Flutter ที่ทำให้เราสามารถติดต่อกับ Native API ได้โดยการเขียนโค้ดที่ฝั่ง Native (Android, iOS) โดยตรง โดยหลักการทำงาน คือ การส่งข้อความจาก Flutter ไป ซึ่งฝั่ง Native เมื่อได้รับข้อความก็จะดำเนินการตามเหมาะสม เช่น การเรียกใช้ Function/Method ต่าง ๆ ซึ่งถูกเขียนไว้เป็น Native code หลักจากดำเนินการเสร็จสิ้น เราก็อาจส่งข้อความบางอย่างกลับไปทาง Channel หา Flutter ได้นั่นเอง

---

## Plugin

Plugin คือ Package ที่มีการใช้ Platform Channel นั่นเอง หรืออีกนัยหนึ่ง Plugin คือ Package ที่มีการใช้งาน Native Code บางอย่าง แต่ถึงจะมีการใช้งาน Native Code โดยทั่วไปแล้ว Plugin มันจะ Provide API ที่เข้าใจและใช้งานได้ง่าย ให้เราสามารถใช้ผ่าน Dart/Flutter ได้อย่างไม่ต้องกังวลเลย เช่น `shared_preferences`

---

## Summary

Package = Collection ของโค้ดที่จำเพาะต่อปัญหาบางอย่าง และไม่มีการใช้งาน Platform Channels ใน Package

Plugin = Package ที่มีการใช้งาน Platform Channels ทำให้สามารถมอบความสามารถบางอย่างที่จำเพาะต่อ Native API ของ Platform นั้น ๆ ได้

---

## ****************📚 Hope you enjoy reading! 📚****************

---

## Author's Note

ส่วนตัวมองว่าในฐานะ User ของ Package/Plugin เราอาจจะไม่จำเป็นต้องสนใจตรงจุดนี้ ก็ได้ แต่ถ้าหากเราอยู่ในฐาน Provider ของ Package/Plugin ตรงจุดนี้อาจจะสำคัญมากยิ่งขึ้น เพื่อให้ทุกคนในทีมเข้าใจตรงกันถึงสิ่งที่ตรงการสื่อสาร
