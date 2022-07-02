---
title: "Flutter: เพิ่ม Pull to Refresh ให้กับ ListView"
slug: flutter-pull-to-refresh-list-view
date: '2020-07-15T07:46:26.000Z'
tags: Flutter
coverImage: /assets/blog/flutter-pull-to-refresh-list-view/cover.jpeg
author:
  name: Pittawat Taveekitworachai
  picture: /assets/blog/authors/pittawat.jpg
ogImage:
  url: /assets/blog/flutter-pull-to-refresh-list-view/cover.jpeg
---

หนึ่งในรูปแบบการใช้งานที่เรามักจะเห็นได้บ่อยสำหรับการโหลดข้อมูลใหม่ ๆ จากฝั่งผู้ใช้งาน โดยเฉพาะบน Android หรือแอปพลิเคชันที่ทำตาม Material Guideline ก็คือการ Swipe to Refresh นั่นเอง โดยทั่วไปเรามักจะมี List ซึ่งเราสามารถดึงลงมาได้มากกว่าปกติจากบนสุดแล้วปล่อย โดยระหว่างนั้นก็จะมี Indicator มาหมุนโชว์ให้ดูว่ากำลังดาวน์โหลดข้อมูลใหม่ ๆ เมื่อเสร็จแล้วก็จะหายไปและมีข้อมูลใหม่มาโชว์ที่ List นั่นเอง

Flutter ซึ่งสนับสนุน Material Design แบบ 1st class ก็แน่นอนว่าได้เตรียม Widget มาให้เราใช้งานเช่นกัน โดย Widget ตัวนั้น ก็ชื่อ `RefreshIndicator` นั่นเอง

---

## RefreshIndicator

`RefreshIndicator` เป็น Widget ที่เราสามารถนำไป Wrap Widget ใด ๆ ก็ตามที่สามารถ Scroll ได้ (`Scrollable`) และจะเพิ่มพฤติกรรมที่เมื่อเกิดการ Over Scroll (Scroll เกิน Content ที่มี) จะทำการ Trigger `onRefresh` และโชว์ Animation สวย ๆ ขึ้นมาเพื่อบอกให้ผู้ใช้งานรู้ว่าได้มีการ Trigger แล้ว โดย `onRefresh` นั้นคาดหวังฟังก์ชันที่ไม่รับข้อมูลนำเข้าแต่ข้อมูลส่งออกต้องเป็น `Future<void>` หรือก็คือไม่คาดหวังข้อมูลส่งออกแต่ฟังก์ชันนั้นต้องมีพฤติกรรมของ `Future` เนื่องจากโดยทั่วไปเมื่อเกิดการ Refresh ขึ้นเรามักเรียกใช้งานฟังก์ชันที่ต้องมีการดึงข้อมูลจาก Network หรือไฟล์ที่ใช้เวลานานนั่นเอง สำหรับวิธีที่ง่ายที่สุดก็คือการระบุให้ฟังก์ชันนั้นเป็น `async` ฟังก์ชัน โดยการเพิม่ Keyword `async` เข้าไปนั่นเอง

ตัวอย่างโค้ด

    // ...
    @override
    Widget build(BuildContext context) {
    	Future<void> onPullToRefresh() async {
    		await Future.delayed(Duration(milliseconds: 500));
    		setState(() {
    			if (colors[0] == colorForSwap1[0]) {
    				colors = colorForSwap2;
    			} else {
    				colors = colorForSwap1;
    			}
    		});
    	}
        
    	return Scaffold(
                // ...
                RefreshIndicator(
                    onRefresh: onPullToRefresh,
                    child: ListView.builder(
                        padding: const EdgeInsets.all(8),
                        itemCount: 3,
                        itemBuilder: (context, index) {
                            return Container(
                                height: 50,
                                color: colors[index],
                                child: Center(child: Text('$index')),
                            );
                        },
                    ),
                )
                // ...
    	);
    }
    // ...

จากโค้ดจะเห็นได้ว่าใน `onPullToRefresh` นั้นถูกใช้เพื่อเป็นฟังก์ชันสำหรับ `onRefresh` ใน `RefreshIndicator` โดยมี `Future.delayed(...)` เพื่อจำลองเวลาที่ใช้ในการดึงข้อมูลจาก Network ก่อนจะมีการเปลี่ยนแปลงข้อมูลใน List เป็นข้อมูลชุดใหม่นั่นเอง

---

## Sidenote

สำหรับบางคนที่นำ `RefreshIndicator` ไปใช้แล้วไม่มีอะไรเกิดขึ้นทั้ง ๆ ที่ส่ง Argument ที่จำเป็นไปหมดแล้ว อาจเป็นไปได้ว่า `Scrollable` Widget ที่เป็น Child ของ `RefreshIndicator` นั้นไม่ได้รองรับการ Over Scroll เช่น กรณีที่ข้อมูลของเราอาจไม่เยอะจนเกิน Viewport ซึ่งเราสามารถแก้ไขได้โดยการ เพิ่ม Properties `physics: **const** AlwaysScrollableScrollPhysics(),` เข้าไปใน Child Widget ตัวนั้น (`Scrollable`) เพื่อการันตีการ Scroll ได้เสมอ

    // ...
    RefreshIndicator(
    	onRefresh: someFunction,
    	child: ListView(
    		physics: const AlwaysScrollableScrollPhysics(),
    		children: // ...
    	)
    ),
    // ...

---

สำหรับคนที่ต้องการตัวอย่างโค้ดแบบเต็ม สามารถตามไปดูได้ที่ [GitHub](https://github.com/Pittawat2542/flutter_pull_refresh_example)

---

## ********************************************************************************************************************************📚 Hope you enjoy reading! 📚********************************************************************************************************************************

---
