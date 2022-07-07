---
title: "Flutter: จดจำตำแหน่งการ Scroll ใน ListView ด้วย PageStorageKey"
slug: flutter-save-scroll-position-listview
date: '2020-05-27T15:06:45.000Z'
tags: Flutter
coverImage: /assets/blog/flutter-save-scroll-position-listview/cover.jpeg
excerpt: หลาย ๆ คนคงเคยใช้แอพพลิเคชันที่จดจำตำแหน่งที่เรา scroll ไว้ เมื่อเราเปลี่ยนแท็บและกลับมาที่แท็บเดิม เช่น Facebook เป็นต้น ในบทความนี้จะพาไปดูกันว่าเราจะทำแบบนั้นได้อย่างไรบ้างใน Flutter ของเรา
author:
  name: Pittawat Taveekitworachai
  picture: /assets/blog/authors/pittawat.jpg
ogImage:
  url: /assets/blog/flutter-save-scroll-position-listview/cover.jpeg
---

หลาย ๆ คนคงเคยใช้แอพพลิเคชันที่จดจำตำแหน่งที่เรา scroll ไว้ เมื่อเราเปลี่ยนแท็บและกลับมาที่แท็บเดิม เช่น Facebook เป็นต้น

![](https://images.unsplash.com/photo-1584824388178-1defc3484ce3?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=2000&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ)

ในบทความนี้จะพาไปดูกันว่าเราจะทำแบบนั้นได้อย่างไรบ้างใน Flutter ของเรา

---

## ความลับอยู่กับ Key!

ใน Flutter แทบทุก Widget จะมี Attribute หนึ่งที่เราสามารถส่งเข้าไปเมื่อเราต้องการสร้าง Widget ได้ นั่นก็คือ Key แล้วมันสำคัญยังไงละ! โดยคร่าว Key นั้นจะทำให้ Widget นั้น ๆ Unique ซึ่งเรื่องนี้เกี่ยวข้องกับการที่ Flutter เก็บ tree ที่ใช้ในการ track state และ position ของ widget ต่าง ๆ ใน tree ซึ่ง tree เหล่านี้จะถูกนำไปใช้ในการ render UI แต่นั่นจะเป็นเรื่องที่กล่าวถึงต่อไปในบทความอื่น ๆ ในทีนี่เราจะสร้าง Key ขึ้นมาหนึ่งตัวเพื่อทำให้ ListView นั้น ๆ สามารถเก็บตำแหน่งของการ scroll ได้ว่าผู้ใช้ของเรา scroll ไปไกลเท่าใดแล้ว โดย key ตัวนี้จะเป็นประเภท PageStorageKey นั่นเอง อ่านเพิ่มเติมเกี่ยวกับ Key ได้ที่ [Flutter: 🔑 Key สำคัญยังไงกันนะ](/blog/flutter-key/)

---

## ListView + PageStorageKey

โดยเราก็สามารถใช้งานได้อย่างตรงไปตรงมาดังนี้

    // ...
    
    var data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    
    // ...
    
    @override
    Widget build(BuildContext context) {
        return ListView.builder(
            key: PageStorageKey('key must be unique for each list view'),
            itemCount: data.length,
            itemBuilder: (ctx, index) => Padding(
            	padding: const EdgeInsets.symmetric(
                	vertical: 32.0,
                ),
                child: ListTile(
            		title: Text(data[index]),
                ),
            ),
        );
    }
    
    // ...

อย่างไรก็ตามข้อควรระวัง คือ PageStorageKey ที่เราจะส่งให้ ListView แต่ละตัวนั้นจะต้องมี  `key` ที่ unqiue อีกสิ่งหนึ่ง คือ หากเราใช้งาน ListView ที่สร้าง ExpansionTile เราจะต้องสร้าง PageStorageKey ที่ unique ให้กับ ExpansionTile แยกออกมาในแต่ละตัวด้วยเช่นกัน เพื่อให้ ExpansionTile สามารถจดจำได้ว่าตัวเองกำลังเปิดหรือปิดอยู่

    // ...
    
    var data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    
    // ...
    
    @override
    Widget build(BuildContext context) {
        return ListView.builder(
            key: PageStorageKey('key must be unique for each list view'),
            itemCount: data.length,
            itemBuilder: (ctx, index) => Padding(
            	padding: const EdgeInsets.symmetric(
                	vertical: 32.0,
                ),
                child: ExpansionTile(
                	key: PageStorageKey('child key ' + index),
            		title: Text(data[index]),
                    children: [
                    	Container(
                        	color: Colors.red,
                        	height: 100,
                            width: 100,
                        ),
                    ],
                ),
            ),
        );
    }
    
    // ...

และนี่ก็เป็นขั้นตอนง่าย ๆ ที่จะช่วยทำให้แอพเราน่าใช้งานมากยิ่งขึ้นนั่นเอง

## Summary

- เพิ่ม `PageStorageKey` ให้กับ Attribute key ของ Widget ตระกูล `ListView`
- หากใช้งาน `ExpansionTile` และต้องการให้จำว่า `ExpansionTile` นั้น ๆ ปิดหรือเปิดอยู่ ให้เพิ่ม `PageStorageKey` ให้กับ Attribute key ของ `ExpansionTile` เช่นกัน

หากใครต้องการตัวอย่างแบบโค้ดเต็ม ๆ สามารดูได้ที่ [https://github.com/Pittawat2542/flutter_listview_save_scroll_position](https://github.com/Pittawat2542/flutter_listview_save_scroll_position)

---

## *📚 Hope you enjoy reading! 📚*

---
