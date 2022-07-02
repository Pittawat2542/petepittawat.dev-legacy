---
title: "Flutter: วิธีแก้ปัญหาใช้ built_value แล้วเจอ Unknown type on deserialization. Need either specifiedType or discriminator field."
slug: flutter-built_value-unknown-type-on-deserialization-need-either-specifiedtype-or-discriminator-field
date: '2020-09-05T11:38:45.000Z'
tags: Flutter
coverImage: /assets/blog/flutter-built_value-unknown-type-on-deserialization-need-either-specifiedtype-or-discriminator-field/cover.jpeg
author:
  name: Pittawat Taveekitworachai
  picture: /assets/blog/authors/pittawat.jpg
ogImage:
  url: /assets/blog/flutter-built_value-unknown-type-on-deserialization-need-either-specifiedtype-or-discriminator-field/cover.jpeg
---

`built_value` Package ขวัญใจใครหลาย ๆ คน นี่เป็นหนึ่งใน Source Gen ที่ได้รับความนิยมมากที่สุด Package หนึ่งของชาว Flutter Developer อย่างไรก็ตามการทำงานกับมันอาจไม่ง่ายนัก และไม่ใช่ทุก Error Message ที่อ่านเข้าใจได้ง่าย

`Unknown type on deserialization. Need either specifiedType or discriminator field.` เป็นอีกหนึ่ง Error Message ที่บอกได้ไม่ค่อยชัดเจนนัก และทำให้ผู้เขียนเองเคยงมกับการแก้มาแล้วทั้งวัน! จริง ๆ แล้ว Error นี่เกิดขึ้นจากปัญหาเกี่ยวกับ Serializer ครับ

Serializer เป็นหนึ่งในสิ่งที่เราต้องกำหนด เพื่อบอกกับตัว `built_value` ว่าเราต้องการ Serialize/Deserialize อย่างไร ปัญหานี้อาจเป็นไปได้ 1 ใน 3 กรณีต่อไปนี้

1) ลืมสร้าง Serailizer ในไฟล์หลักของ Class ที่เชื่อมกับไฟล์ที่ต้องการ Generate

โดยเราต้องมีโค้ดต่อไปนี้ใน Class นั้นด้วย

    static Serializer<MyClass> get serializer => _$myClassSerializer;

2) Serailizer ที่ใช้สำหรับ Method `toJson` หรือ `fromJson` ยังไม่ถูกสร้างขึ้น กรณีนี้อาจจะเกิดจากการลืม Import ไฟล์เข้ามา นี่คือโค้ดในส่วนนี้

    String toJson() {
    	return json.encode(ourSerializers.serializeWith(MyClass.serializer, 		this));
      }
    
    static MyClass fromJson(String jsonString) {
    	return ourSerializers.deserializeWith(
    		MyClass.serializer, json.decode(jsonString));
      }

ตรง `ourSerializers` นี่เองที่อาจก่อให้เกิดปัญหานี้ขึ้นได้

3) ลืมระบุใน Serailizer ว่า Class ของเราต้องการการ Serilize ด้วย โดยโค้ดในส่วนนี้จะอยู่กับ Serializer ที่เราสร้างขึ้นเอง

    @SerializersFor([
    	MyClass,
    ])

---

## ****📚 Hope you enjoy reading! 📚****

---
