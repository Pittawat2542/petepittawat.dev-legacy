---
title: "Flutter: วิธีแก้ปัญหาใช้ built_value แล้วเจอ Deserializing failed due to '_InternalLinkedHashMap<String, dynamic>' is not subtype of type 'Iterable<dynamic>'"
slug: flutter-built_value-deserializing-failed-due-to-interal-linked-hashed-map
date: '2020-12-31T14:00:18.000Z'
tags: Flutter
coverImage: /assets/blog/flutter-built_value-deserializing-failed-due-to-interal-linked-hashed-map/cover.jpeg
excerpt: built_value Package ขวัญใจใครหลาย ๆ คน นี่เป็นหนึ่งใน Source Gen ที่ได้รับความนิยมมากที่สุด Package หนึ่งของชาว Flutter Developer อย่างไรก็ตามการทำงานกับมันอาจไม่ง่ายนัก และไม่ใช่ทุก Error Message ที่อ่านเข้าใจได้ง่าย
author:
  name: Pittawat Taveekitworachai
  picture: /assets/blog/authors/pittawat.jpg
ogImage:
  url: /assets/blog/flutter-built_value-deserializing-failed-due-to-interal-linked-hashed-map/cover.jpeg
---

`built_value` Package ขวัญใจใครหลาย ๆ คน นี่เป็นหนึ่งใน Source Gen ที่ได้รับความนิยมมากที่สุด Package หนึ่งของชาว Flutter Developer อย่างไรก็ตามการทำงานกับมันอาจไม่ง่ายนัก และไม่ใช่ทุก Error Message ที่อ่านเข้าใจได้ง่าย

`Deserializing failed due to '_InternalLinkedHashMap<String, dynamic>' is not subtype of type 'Iterable'` เป็นอีกหนึ่ง Error Message ที่บอกได้ไม่ค่อยชัดเจนนัก และทำให้ผู้เขียนเองเคยงมกับการแก้มาแล้วทั้งวัน! จริงแล้ว Error นี่เกิดขึ้นจากปัญหาเกี่ยวกับ Serializer ครับ

Serializer เป็นหนึ่งในสิ่งที่เราต้องกำหนด เพื่อบอกกับตัว `built_value` ว่าเราต้องการ Serialize/Deserialize อย่างไร ปัญหานี้อาจเป็นไปได้จากการระบุ Serializer ที่ใช้ใน `fromJson(String jsonString)` ผิดครับ

ซึ่งปัญหานี้สามารถแก้ไขได้อย่างง่ายดาย โดยการเปลี่ยน Serializer ใน Method `fromJson(String jsonString)` ให้เป็นตัวที่เราสร้างขึ้นมาเอง (โดยทั่วไปมักจะเป็นตัวที่มีการเพิ่ม Plugin Standard Json Plugin สำหรับการจัดการกับ JSON ไว้ หรืออักนัยหนึ่งคือการมีการเพิ่มโค้ด `addPlugin(StandardJsonPlugin())` ไว้

โดยตอนแรกอาจเป็นแบบนี้

      static MyModel fromJson(String jsonString) {
        return serializers.deserializeWith(
            MyModel.serializer, json.decode(jsonString));
      }

ให้แก้ไขเป็น

      static MyModel fromJson(String jsonString) {
        return mySerializers.deserializeWith(
            MyModel.serializer, json.decode(jsonString));
      }

หรือก็คือเปลี่ยนจาก `serializers` เป็น `mySerializers` นั่นเอง

---

## *📚 Hope you enjoy reading! 📚*

---
