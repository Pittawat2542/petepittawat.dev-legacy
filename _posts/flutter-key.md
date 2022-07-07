---
title: "Flutter: Key สำคัญยังไงกันนะ"
slug: flutter-key
date: '2020-05-30T13:36:41.000Z'
tags: Flutter
coverImage: /assets/blog/flutter-key/cover.jpeg
excerpt: Key เป็นหนึ่งใน optional attribute ที่เราจะเห็นได้กับแทบทุก Widget ใน Flutter ซึ่งโดยทั่วไป เราก็มักจะไม่ได้ใส่ค่า Key เข้าไปโดยปกติ แล้วเวลาไหนบ้างละที่เราควรใช้ Key?
author:
  name: Pittawat Taveekitworachai
  picture: /assets/blog/authors/pittawat.jpg
ogImage:
  url: /assets/blog/flutter-key/cover.jpeg
---

Key เป็นหนึ่งใน optional attribute ที่เราจะเห็นได้กับแทบทุก Widget ใน Flutter ซึ่งโดยทั่วไป เราก็มักจะไม่ได้ใส่ค่า Key เข้าไปโดยปกติ แล้วเวลาไหนบ้างละที่เราควรใช้ Key?

โดยทั่วไปเมื่อเราสร้าง Widget ขึ้นมา เราจะไม่ใช้ Key เพราะไม่มีความจำเป็นที่จะต้องเปลืองพื้นที่สำหรับ Key นั้น ๆ โดยเปล่าประโยชน์ แต่เมื่อใดก็ตามที่เราต้องทำงานกับ List ในบางแบบ (Widget ที่มี builder หรือ รับ children) ซึ่งต้องมีการยุ่งเกี่ยวกับการเพิ่ม/ลด ย้ายที่ของ Element ภายใน List เมื่อนั้นเองที่เราจำเป็นต้องใช้ Key ในบทความนี้เราจะมาดูเบื้องหลังและเหตุผลที่ต้องใช้ Key กัน

---

## Flutter รู้ได้ไงนะ ว่าต้องอัพเดทหน้าจอเวลามี Widget เปลี่ยนไป?

จริง ๆ แล้ว Flutter ได้ maintain tree ไว้เป็นจำนวนหนึ่งเพื่อใช้ในการควบคุม และ monitor สิ่งต่าง ๆ หนึ่งในนั้นที่เกี่ยวข้องกับสิ่งที่เราจะพูดถึงกันวันนี้ ก็คือ  Element tree นั่นเอง

โดยทั่วไปเมื่อเราพัฒนาแอพพลิเคชัน เรามักจะทำงานกับ Widget จำนวนมาก โดยทั่วไปเรามักพบว่า Widget จะมีความสัมพันธ์กันในลักษณะของ Parent-child/Ancestor-Descendant ซึ่งแสดงออกมาในรูปของ Tree นั่นเอง ซึ่งเราจะเรียก Tree ของ Widget ที่เราพัฒนานี้ว่า Widget Tree อย่างไรก็ตามเมื่อถึงเวลาที่ Flutter เองจะต้องแสดงผล และคอยควบคุมและดูความเป็นไปของหน้าจอของเรา Flutter จะสร้าง Tree อีกอันหนึ่งขึ้นมาซึ่งมีลักษณะคล้าย ๆ Widget tree เรียกว่า Elememt tree โดยแต่ละ Element บน Element tree ก็จะถูกเชื่อมโยงกับ Widget แต่ละ Widget ที่เกี่ยวเนื่องกันนั่นเอง

    class AppContainer extends StatelessWidget {
      final String text;
      final Color color;
    
      const AppContainer({
        @required this.text,
        @required this.color,
        Key key,
      }) : super(key: key);
    
      @override
      Widget build(BuildContext context) {
        return Container(
          width: 100,
          height: 100,
          decoration: BoxDecoration(
            border: Border.all(
              color: color,
              width: 4.0,
            ),
          ),
          child: Center(child: Text(text)),
        );
      }
    }
    

    AppContainer (Stateless widget)
        class _MyHomePageState extends State<MyHomePage> {
          var appContainers = [AppContainer(key: UniqueKey()), AppContainer(key: UniqueKey())];
    
          @override
          Widget build(BuildContext context) {
            return Scaffold(
              appBar: AppBar(
                title: Text('Flutter Demo Home Page'),
              ),
              body: Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    AppContainer(color: Colors.red, text: 'Box 1'),
                    AppContainer(color: Colors.blue, text: 'Box 2'),
                  ]
                ),
              ),
              floatingActionButton: FloatingActionButton(
                child: Icon(Icons.swap_vert),
                onPressed: () {
                  setState(() {
                    appContainers.insert(0, appContainers.removeLast());
                  });
                },
              ),
            );
          }
        }

เมื่อนำ AppContainer มาใช้
จากโค้ดข้างบน ซึ่งเรามี Column widget ซึ่งประกอบไปด้วย Container สองชิ้น ซึ่งแต่ละชิ้นจะมีกรอบ และมี `Text` Widget อยู่ภายใน จะมี Widget tree และ Element tree ดังนี้

![](/assets/blog/flutter-key/key-explain-1.jpeg)

จะเห็นได้ว่า Flutter นั้นจำเพียงแค่ว่า แต่ละ Element เป็น Type ใดเท่านั้น ไม่ได้เก็บทุกสิ่งทุกอย่าง นอกจากนี้ถ้าหาก Widget ของเราเป็น Stateful widget แล้วละก็ จะมีสิ่งที่เพิ่มมา นั่นก็คือ State ซึ่งจะผูกอยู่กับ Element นั่นเอง

    class AppContainer extends StatefulWidget {
      AppContainer({Key key}) : super(key: key);
    
      @override
      _AppContainerState createState() => _AppContainerState();
    }
    
    class _AppContainerState extends State<AppContainer> {
      static const colors = [Colors.red, Colors.green, Colors.blue, Colors.yellow];
    
      var _text = (Random().nextInt(3) + 1).toString();
      var _color = colors[Random().nextInt(colors.length)];
    
      @override
      Widget build(BuildContext context) {
        return Container(
          key: widget.key,
          width: 100,
          height: 100,
          decoration: BoxDecoration(
            border: Border.all(
              color: _color,
              width: 4.0,
            ),
          ),
          child: Center(child: Text(_text)),
        );
      }
    }
    

    AppContainer (Stateful widget)
        class _MyHomePageState extends State<MyHomePage> {
          var appContainers = [AppContainer(), AppContainer()];
        
          @override
          Widget build(BuildContext context) {
            return Scaffold(
              appBar: AppBar(
                title: Text('Flutter Demo Home Page'),
              ),
              body: Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: appContainers,
                ),
              ),
              floatingActionButton: FloatingActionButton(
                child: Icon(Icons.swap_vert),
                onPressed: () {
                  setState(() {
                    appContainers.insert(0, appContainers.removeLast());
                  });
                },
              ),
            );
          }
        }

เมื่อนำ AppContainer มาใช้

![](/assets/blog/flutter-key/key-explain-2.jpeg)

แล้วความสนุกสนานก็เจอเกิดขึ้นตรงนี้เมื่อเราไปทำอะไรสักอย่างที่ก่อให้เกิดการเปลี่ยนลำดับของ Widget เช่น สลับ `AppContainer`ที่มี Box 1 กับ Box 2 ซึ่งอย่างที่เคยกล่าวไปว่า Flutter นั้นจำเพียงแค่ว่า Type ใดเท่านั้นใน Element tree ทำให้เมื่อ Widget tree เกิดการเปลี่ยนแปลง Flutter จะทำการตัดสายสัมพันธ์ออก และพิจารณาใหม่ Flutter จะพบว่าที่ Widget tree ยังคงเป็น Type เดิมอยู่ (`AppContainer`) ดังนั้นจึงทำการเชื่อม Widget กับ Element เดิมทันที และนั่นทำให้ State ซึ่งผูกอยู่กับ Element ไม่ได้ตามไปด้วย! ดังนั้นผลลัพธ์ที่ได้ คือ เราจะเห็นเหมือนไม่มีการเปลี่ยนแปลงอะไรเลย ซึ่งเหตุการณ์นี้โดยทั่วไปจะเกิดเฉพาะ Stateful widget เท่านั้น ดังที่ได้กล่าวไปข้างต้น เนื่องจาก Stateless widget จะเปลี่ยนแปลงค่าได้ต้องมีการส่งมาจาก Parent อยู่แล้วนั่นเอง

---

## Key to the rescue!

และการเพิ่ม Key นี่เองที่จะช่วยเราในกรณีนี้ได้ เพราะบน Element tree นั้น เมื่อใดก็ตามที่ Widget นั้น ๆ มีการตั้งค่า Key ไว้ Flutter จะนำเอา Key นั้น ๆ แปะ ไปกับ Element ด้วย ทำให้เมื่อมีการสลับตำแหน่ง แม้ว่าจะเป็น Element เดิม แต่ Key ไม่ตรงกันอีกแล้ว ทำให้ Flutter สามารถสลับตำแหน่งของ Element ได้อย่างถูกต้องนั่นเอง อย่างไรก็ตามมีข้อควรระวังเล็กน้อย นั่นก็คือ Key นั้นควรจะใส่ไว้กับ Widget ที่อยู่ข้างบนสุดที่ถือ State ที่เราต้องการระวังไม่ให้เกิดเหตุการณ์นี้อยู่ เนื่องจาก Flutter นั้นไม่ได้ทำการ Compare แบบ deep ดังนั้นการใส่ Key ไว้ใน Widget ล่าง ๆ อาจทำให้ค่าออกมาผิดพลาดได้นั่นเอง และอย่างที่เคยกล่าวไปแล้ว โดยทั่วไปเราจะจำเป็นต้องใช้ Key ก็ต่อเมื่อต้องเจอเหตุการณ์แบบที่ยกตัวอย่างมาเท่านั้น กรณีอื่นเช่น ถึงแม้ว่าจะเป็น List แต่ของใน List ไม่ใช่ของประเภทเดียวกัน แบบนี้ก็ถือว่าวางใจให้ Flutter ทำงานได้ โดยไม่ต้องมี Key เข้ามาเกี่ยวข้องนั่นเอง

    class _MyHomePageState extends State<MyHomePage> {
      var appContainers = [AppContainer(key: UniqueKey()), AppContainer(key: UniqueKey())];
    
      @override
      Widget build(BuildContext context) {
        return Scaffold(
          appBar: AppBar(
            title: Text('Flutter Demo Home Page'),
          ),
          body: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: appContainers,
            ),
          ),
          floatingActionButton: FloatingActionButton(
            child: Icon(Icons.swap_vert),
            onPressed: () {
              setState(() {
                appContainers.insert(0, appContainers.removeLast());
              });
            },
          ),
        );
      }
    }

เพิ่ม Key แล้วทุกปัญหาก็หายไป!!

![](/assets/blog/flutter-key/key-explain-3.jpeg)

อย่างไรก็ตาม Flutter ก็มี Key หลากหลายประเภทมาให้เลือกสรรกันไปใช้งาน โดยวิธีการใช้งานก็ข้อสรุปไว้ตามนี้

- **`ValueKey`** เป็น Key ที่เรียบง่ายที่สุด เหมาะสำหรับใช้เวลาที่เรามั่นใจว่าค่าที่ส่งมาให้ของใน List นั้น ๆ Unique
- **`ObjectKey`** หาก Value ของเรามาเป็น Object ที่อาจจะมี attribute ซ้ำกัน ในกรณีนี้เราสามารถสร้าง Key โดยการยัด Object ทั้งก้อนลงไปได้เลย
- **`UniqueKey`** ถ้าหากเราไม่มั่นใจว่าเราจะได้ Value ที่มีความ Unique ตลอดไปมั้ย เราสามารถใช้เจ้า UniqueKey ซึ่งจะการันตีความ Unique ให้เราได้ ข้อควรระวัง คือ หาก เราสร้าง `UniqueKey` ใน build method ทุก ๆ ครั้งที่ build ค่าของ `UniqueKey` ของ Widget ตัวเดิมจะเปลี่ยนไป! ดังนั้นหากต้องการค่าเดิมเสมอสำหรับ Widget ตัวเดิม เราควรสร้าง `UniqueKey` นอก build method นั่นเอง
- **`PageStorageKey`** เป็น Key ที่มีความพิเศษ เพราะ Key ตัวนี้มักจะถูกใช้กับ List เพื่อจดจำค่าตำแหน่งการ Scroll ของผู้ใช้ สามารถอ่านเพิ่มเติมเกี่ยวกับเรื่องนี้ได้ที่ [Flutter: จดจำตำแหน่งการ Scroll ใน ListView ด้วย PageStorageKey](__GHOST_URL__/flutter-save-scroll-position-listview/)
- **`GlobalKeys`** เป็นอีกหนึ่ง Key ที่ค่อนข้างพิเศษ เพราะ Key ตัวนี้จะทำให้ State นั้นผูกกับ Widget ของเรา ไม่ว่าเราจะย้าย Widget นั้นไปอยู่ตรงไหนในแอป! ซึ่งเราอาจนำมาประยุกต์ใช้ในกรณีที่เราต้องการ Global variable ได้เช่นกัน

---

## Summary

โดยทั่วไปเราไม่ต้องการ Key แต่เราจะต้องใช้เมื่อชนิดไม่เพียงพอต่อการบอก Flutter ให้สามารถเปลี่ยนแปลงค่าได้อย่างถูกต้องนั่นเอง

สำหรับใครที่สนใจสามารถดูโค้ดเต็ม ๆ ได้ที่ [https://github.com/Pittawat2542/flutter_key_example](https://github.com/Pittawat2542/flutter_key_example)

---

## *📚 Hope you enjoy reading! 📚*

---
