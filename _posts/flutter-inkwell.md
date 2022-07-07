---
title: "Flutter: เพิ่ม Feedback สไตล์ Material ให้กับ Widget ด้วย InkWell"
slug: flutter-inkwell
date: '2020-06-24T08:10:16.000Z'
tags: Flutter
coverImage: /assets/blog/flutter-inkwell/cover.jpeg
excerpt: ไม่ใช่ทุกปุ่มและการ์ดที่เตรียมมาให้เราใช้งานใน Flutter จะตอบโจทย์การออกแบบได้ทั้งหมด Flutter เองก็ตระหนักถึงความต้องการนี้ดี จึงมี Widget ที่ชื่อว่า GestureDetector มาให้เพื่อมอบ Flexbility ให้มากที่สุดเท่าที่เป็นไปได้กับ Developer ในการรังสรรค์ UI อันสวยงามขึ้นมา แต่อย่างไรก็ตาม GestureDetector แม้ว่าจะมาพร้อมกับความสามารถสารพัด แต่ก็ไม่ตอบโจทย์เสมอไป
author:
  name: Pittawat Taveekitworachai
  picture: /assets/blog/authors/pittawat.jpg
ogImage:
  url: /assets/blog/flutter-inkwell/cover.jpeg
---

ไม่ใช่ทุกปุ่มและการ์ดที่เตรียมมาให้เราใช้งานใน Flutter จะตอบโจทย์การออกแบบได้ทั้งหมด Flutter เองก็ตระหนักถึงความต้องการนี้ดี จึงมี Widget ที่ชื่อว่า `GestureDetector` มาให้เพื่อมอบ Flexbility ให้มากที่สุดเท่าที่เป็นไปได้กับ Developer ในการรังสรรค์ UI อันสวยงามขึ้นมา แต่อย่างไรก็ตาม `GestureDetector` แม้ว่าจะมาพร้อมกับความสามารถสารพัด แต่ก็ไม่ตอบโจทย์เสมอไป เพราะตัว `GestureDetector` เองนั้นสามารถตรวจจับ Gesture ได้เท่านั้น แต่ไม่มี Feedback animation ตอบกลับไปยังผู้ใช้งาน หากเราต้องการ `GestureDetector` ที่มี Feedback เป็น Splash สวย ๆ ตาม Material Design แล้ว ทาง Flutter ก็ได้เตรียม Widget มาไว้ให้เช่นกันในชื่อ InkWell

อย่างไรก็ตาม `InkWell` เป็นหนึ่งใน Widget ที่ถือเป็นยาขมสำหรับใครหลาย ๆ คน เพราะเมื่อเรานำไปใช้งานแล้วกลับไม่มี Effect อะไรเกิดขึ้นมา วันนี้เราจะมาดูกันว่าการใช้งาน `InkWell` ที่ถูกต้องควรใช้อย่างไร

---

## InkWell

`InkWell` มีความคล้ายกับ `GestureDetector` อยู่ค่อนข้างมาก แต่ดีกว่าตรงที่มาพร้อมกับ Effect สวย ๆ ที่เป็น Feedback ให้ผู้ใช้ตาม Material Design อย่างไรก็ตาม `InkWell` ก็มาพร้อมกับข้อจำกัดที่ตัว Effect จะถูก Clip ไปตามรูปทรงของสี่เหลี่ยมเท่านั้น หากเราอยากได้ Effect ที่ Flexible มากยิ่งขึ้นก็ต้องใช้ [InkResponse](https://api.flutter.dev/flutter/material/InkResponse-class.html) แทน

`InkWell` เป็นหนึ่งใน Widget ที่ใช้ยากหากไม่เข้าใจมัน เพราะเอาไป Wrap `Text` ก็จะได้ `FlatButton` สวย ๆ มา แต่เมื่อเอาไป Wrap `Container` ที่มีพื้นหลังเมื่อไรกลับหายไปในทันใด สาเหตุหนึ่งเป็นเพราะตัว [Material](https://api.flutter.dev/flutter/material/Material-class.html) (ชื่อ Widget จริง ๆ เป็น Widget ที่เป็นพื้นฐานของ Widget หลาย ๆ ตัวในตระกูล Material Widget ด้วย) ที่ถูกใช้ในการวาด Effect ถูกซ้อนอยู่ใต้สี/รูปของพื้นหลังนั่นเอง เราสามารถ Workaround ได้ด้วยการมี `Material` มา Wrap `InkWell` อีกครั้งก่อนและให้ `Container` อยู่ข้างนอกสุด โดย `Material` ที่เรานำมา Wrap เราสามารถตั้ง `type` ให้เป็น `MaterialType.transparency` ได้ เพื่อไม่ให้มีผลกับการแสดงผลของ Widget ที่เราตั้งใจไว้ และเป็นพื้นที่สำหรับวาด Effect เท่านั้น ตามตัวอย่าง

    import 'package:flutter/material.dart';
    
    void main() {
      runApp(
        MaterialApp(
          home: MyWidget(),
        ),
      );
    }
    
    class MyWidget extends StatelessWidget {
      @override
      Widget build(BuildContext context) {
        return Scaffold(
          body: Center(
            child: Container(
              width: 64,
              height: 64,
              color: Colors.blueAccent,
              child: Material(
                type: MaterialType.transparency,
                child: InkWell(
                  onTap: () {
                    print('Tapped!');
                  },
                ),
              ),
            ),
          ),
        );
      }
    }

---

## RoundedRectangle

แต่ปัญหายังไม่หมดเพียงเท่านั้นเพราะหากเรานำ `InkWell` ไปใช้กับ `Container` ที่มีการตั้ง `borderRadius` ไว้ `InkWell` มันจะไม่ได้โดน Clip ไปด้วย วิธีแก้คือให้เราใส่ `borderRadius` ให้กับ InkWell ด้วย ดังนี้

    import 'package:flutter/material.dart';
    
    void main() {
      runApp(
        MaterialApp(
          home: MyWidget(),
        ),
      );
    }
    
    class MyWidget extends StatelessWidget {
      @override
      Widget build(BuildContext context) {
        return Scaffold(
          body: Center(
            child: Container(
              decoration: BoxDecoration(
                borderRadius: BorderRadius.all(Radius.circular(16)),
                color: Colors.blueAccent,
              ),
              width: 64,
              height: 64,
              child: Material(
                type: MaterialType.transparency,
                child: InkWell(
                  borderRadius: BorderRadius.all(Radius.circular(16)),
                  onTap: () {
                    print('Tapped!');
                  },
                ),
              ),
            ),
          ),
        );
      }
    }

---

## Circle

แล้วหากเราต้องการใช้ `InkWell` กับรูปทรงแปลก ๆ ละ? เช่น Path ที่เราวาดเอง? Widget ที่จะมาช่วยเราในครั้งนี้ก็คือ Widget ตระกูล Clip นั่นเอง หากเรานำ Clip ไป Wrap ไว้ที่ `Material` เราจะสามารถจำกัดตัว Effect ให้ถูก Clip ตามที่เราต้องการได้ เช่นหาก Widget ที่เป็น Parent ของ `Material` เป็นวงกลม เราสามารถใช้ `ClipOval` ในการจัดการได้ ตามตัวอย่างนี้

    import 'package:flutter/material.dart';
    
    void main() {
      runApp(
        MaterialApp(
          home: MyWidget(),
        ),
      );
    }
    
    class MyWidget extends StatelessWidget {
      @override
      Widget build(BuildContext context) {
        return Scaffold(
          body: Center(
            child: Container(
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: Colors.blueAccent,
              ),
              width: 64,
              height: 64,
              child: ClipOval(
                child: Material(
                  type: MaterialType.transparency,
                  child: InkWell(
                    onTap: () {
                      print('Tapped!');
                    },
                  ),
                ),
              ),
            ),
          ),
        );
      }
    }

ซึ่งไอเดียเดียวกันนี่ สามารถประยุกต์ใช้กับรูปทรงอื่น ๆ ได้ ตามที่เราต้องการ หากเป็นรูปทรงแปลก ๆ `ClipPath` จะเป็นตัวช่วยเราได้อย่างดีนั่นเอง

---

## *📚 Hope you enjoy reading! 📚*

---
