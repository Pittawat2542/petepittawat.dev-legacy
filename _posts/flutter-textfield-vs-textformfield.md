---
title: "Flutter: TextField vs TextFormField ใช้ตัวไหนดีนะ?"
slug: flutter-textfield-vs-textformfield
date: '2020-06-20T12:54:25.000Z'
tags: Flutter
coverImage: /assets/blog/flutter-textfield-vs-textformfield/cover.jpeg
author:
  name: Pittawat Taveekitworachai
  picture: /assets/blog/authors/pittawat.jpg
ogImage:
  url: /assets/blog/flutter-textfield-vs-textformfield/cover.jpeg
---

`TextField` ถือเป็นหนึ่งใน Element ที่สำคัญในการพัฒนา Application ของเรา เพราะเป็นวิธีที่ผู้ใช้งานจะสามารถเพิ่มข้อมูลบางอย่างเข้ามาใน Application เราได้ ใน Flutter เองก็มี Widget ที่สนับสนุนเกี่ยวกับการสร้าง Form อย่างมากมาย รวมไปถึงยังสนับสนุนการเขียนโค้ดได้หลากหลายรูปแบบแล้วแต่ความถนัดของนักพัฒนาคนนั้น ๆ

อย่างไรก็ตามหลาย ๆ คนที่อยากจะรับข้อความสั้น ๆ จากผู้ใช้งาน อาจจะรู้สึกสับสนว่าจะใช้ Widget ใน Flutter เนื่องจาก มีทั้ง `TextFormField` และ `TextField` ให้เลือกใช้งาน ในบทความนี้เราจะมาหาคำตอบกัน

---

## TLDR;

`TextField` = Text Field ตามหลัก Material

`TextFormField` = `TextField` ที่ถูก Wrap ไว้ใน `FormField`

---

## TextField

`TextField` เป็น Widget สำหรับแสดงผลช่องรับข้อมูลนำเข้าที่มีรูปแบบเป็นข้อความสั้น ๆ หรือตัวเลขให้ผู้ใช้งานได้กรอกตามหลักของ Material Design (เพราะฉะนั้นถ้าจะใช้ `TextField` ต้องมี Ancestor Widget อย่างน้อยหนึ่งตัวที่ Inherit มาจาก `Material` แต่โดยทั่วไปเรามักจะไม่ค่อยเจอปัญหานี้กันหากพัฒนา Application ด้วย `Material` อยู่แล้ว ยกเว้นกรณีที่มีการ Custom Widget ขึ้นมาเอง หรือใช้ Cupertino (iOS Style Widget)) โดยที่เจ้า Widget ตัวนี้ก็มาพร้อมความสามารถที่เราสามารถแปะ Controller เข้าไปได้ ซึ่งเมื่อมี Controller จะทำให้เรามี Flexibility มากขึ้นในการ Observe ค่า หรือกำหนด Initial Value ต่าง ๆ อย่างไรก็ตามหากใช้งาน Controller (`TextEditingController`) เมื่อใช้งานเสร็จสิ้นก็อย่าลืม dispose เพื่อคืน Resource ด้วย

ตัวอย่างโค้ด

    import 'package:flutter/material.dart';
    
    void main() => runApp(MyApp());
    
    class MyApp extends StatelessWidget {
    
      @override
      Widget build(BuildContext context) {
        return MaterialApp(
          title: 'Sample',
          home: HomePage(),
        );
      }
    }
    
    class HomePage extends StatefulWidget {
      @override
      _HomePageState createState() => _HomePageState();
    }
    
    class _HomePageState extends State<HomePage> {
      TextEditingController _controller;
    
      void initState() {
        super.initState();
        _controller = TextEditingController();
      }
    
      void dispose() {
        _controller.dispose();
        super.dispose();
      }
    
      Widget build(BuildContext context) {
        return Scaffold(
          body: Center(
            child: TextField(
              controller: _controller,
              onSubmitted: (value) {
                print(value);
              },
            ),
          ),
        );
      }
    }

---

## TextFormField

โดยทั่วไปแล้ว Input Field ต่าง ๆ ใน Flutter เรามักไม่ใช้งานกันเดี่ยว ๆ เนื่องจากเราต้องการทำ Validation ของ Field นั้น ๆ ด้วย รวมไปถึงบางครั้งเอาต้องการที่จะได้ค่าของ Input ทุก Field ที่เกี่ยวข้องกัน เพื่อทำอะไรบางอย่าง ทำให้เรามักจะ Wrap Widgets ทั้งหมดที่เป็น Input และเกี่ยวข้องกันไว้ใน `Form` ซึ่งเป็น Widget ที่จะมาช่วยเราจัดการในส่วนนี้ ซึ่ง `Form` จะกำหนดไว้ว่า Widget ที่เป็น Input และจะใช้งานกับ `Form` ต้องถูก Wrap ไว้ใน `FormField` ซึ่งตัว `FormField` เองนั้น จริง ๆ แล้วสามารถใช้งานเดี่ยว ๆ ไม่ต้องใช้กับ `Form` ก็ได้ โดย `FormField` จะเพิ่มในส่วนของ Validation มาให้เราทำงานได้ง่ายยิ่งขึ้น และลด Boilerplate Code ในกรณีที่เราต้องจัดการ Validation เองทั้งหมด

ข้อสังเกตนี้เองที่ `TextField` มักถูกใช้คู่กับ `FormField` บ่อย ๆ ทำให้ทาง Flutter จับ Pack มาด้วยกันเป็น Widget ใหม่ที่ชื่อว่า `TextFormField` นั่นเอง

ตัวอย่างโค้ด

    import 'package:flutter/material.dart';
    
    void main() => runApp(MyApp());
    
    class MyApp extends StatelessWidget {
      @override
      Widget build(BuildContext context) {
        return MaterialApp(
          title: 'Sample',
          home: Scaffold(
            body: HomePage(),
          ),
        );
      }
    }
    
    class HomePage extends StatefulWidget {
      @override
      HomePageState createState() {
        return HomePageState();
      }
    }
    
    class HomePageState extends State<HomePage> {
      final _formKey = GlobalKey<FormState>();
    
      @override
      Widget build(BuildContext context) {
        return Form(
          key: _formKey,
          child: Column(
            children: [
              TextFormField(
                validator: (value) =>
                    value.isEmpty ? 'Input cannot be empty!' : null,
              ),
              MaterialButton(
                color: Colors.blue,
                onPressed: () {
                  if (_formKey.currentState.validate()) {
                    print('Form Complete');
                  }
                },
                child: Text('Submit'),
              ),
            ],
          ),
        );
      }
    }

---

## Summary

หากต้องการทำ Input ที่เป็น UI เฉย ๆ หรือมีแค่ `TextField` เดี่ยว ๆ ไม่ต้องการทำ Validation อะไร สามารถใช้ **TextField** ได้เลย แต่หากต้องการใช้งานคู่กับ Form หรือ `FormField` ควรใช้ **TextFormField**

---

## ****************************************************************📚 Hope you enjoy reading! 📚****************************************************************

---
