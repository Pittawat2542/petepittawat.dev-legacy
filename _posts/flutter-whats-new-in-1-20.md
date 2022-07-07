---
title: "Flutter: อัพเดทจัดเต็มกับ Flutter 1.20, Dart 2.9.0 และ Dart DevTools 0.9.0"
slug: flutter-whats-new-in-1-20
date: '2020-08-06T13:52:09.000Z'
tags: Dart, Flutter, News
coverImage: /assets/blog/flutter-whats-new-in-1-20/cover.jpeg
excerpt: เมื่อวานนี้เอง (5/8/2020) ที่ทาง Flutter ได้ทำการปล่อยอัพเดทใหญ่ออกมาในชื่อ Flutter 1.20 ซึ่งถือว่าเป็นอัพเดทที่ใหญ่ที่สุดที่ Flutter เคยปล่อยออกมา โดยในเวอร์ชันนี้ยังมาพร้อมกับ Dart 2.9.0 และ Dart DevTools เวอร์ชันใหม่ 0.9.0 ที่มากันแบบเต็ม ๆ รวมไปถึงการอัพเดท Plugin สำหรับ IDE ต่าง ๆ อีกด้วย รายละเอียดจะเป็นอย่างไรบ้างนั้น ไปติดตามกันเลย
author:
  name: Pittawat Taveekitworachai
  picture: /assets/blog/authors/pittawat.jpg
ogImage:
  url: /assets/blog/flutter-whats-new-in-1-20/cover.jpeg
---

เมื่อวานนี้เอง (5/8/2020) ที่ทาง Flutter ได้ทำการปล่อยอัพเดทใหญ่ออกมาในชื่อ Flutter 1.20 ซึ่งถือว่าเป็นอัพเดทที่ใหญ่ที่สุดที่ Flutter เคยปล่อยออกมา โดยในเวอร์ชันนี้ยังมาพร้อมกับ Dart 2.9.0 และ Dart DevTools เวอร์ชันใหม่ 0.9.0 ที่มากันแบบเต็ม ๆ รวมไปถึงการอัพเดท Plugin สำหรับ IDE ต่าง ๆ อีกด้วย รายละเอียดจะเป็นอย่างไรบ้างนั้น ไปติดตามกันเลย

---

ในทุก ๆ การอัพเดทของ Flutter จะเน้นเสมอใน 4 หัวข้อ

- Fast - เพิ่มประสิทธิภาพต่าง ๆ ตั้งแต่ระดับล่างสุดของ Rendering Engine ไปจนถึงการพยายามลดขนาดของ App Bundle
- Beautiful - เพิ่ม Widget ใหม่ที่ตอบสนองกับทุกเคสที่เป็นไปได้ และปรับปรุงหน้าตาของ Widget โดยเฉพาะตระกูล Material ให้มีความทันสมัย และเป็นไปตาม Guideline อยู่เสมอ
- Productive - Plugin ต่าง ๆ ที่ Flutter พัฒนาให้กับ IDE เจ้าดัง ๆ ทั้งหลายเพื่อเพิ่มประสิทธิภาพในการทำงานของ Flutter Developer ก็ได้รับการพัฒนาขึ้นไปอีกขั้น รวมไปถึงตัวของ Dart DevTools เครื่องมือคู่ใจของหลาย ๆ คนที่มาพร้อมกับ Flutter อีกด้วย
- Open - Flutter ถูกขับเคลื่อนด้วย Community เสมอ ในเวอร์ชันนี้ก็เช่นกัน ที่มีการ Merge Pull Requests กว่า 3,029 PRs และปิด Issues ไปได้มากถึง 5,485 Issues

สำหรับของใหม่ ๆ ที่มีการปรับปรุงใน Flutter 1.20 จะมีอะไรบ้างนั้นไปติดตามกันเลยดีกว่า

---

## Fast - Performance Improvements

หากใครที่เคยใช้งาน Flutter ในการพัฒนาแอปพลิเคชัน คงรู้กันดีถึงพลังของ Flutter ที่สามารถ Render ได้มากถึง 60 FPS หรือ 144 FPS หากหน้าจอนั้นรองรับ โดยที่ยังคงความสวยงาม และ Animation ต่าง ๆ เอาไว้ได้ โดยพื้นฐาน หรือหากมีปัญหาเกิดขึ้นก็มีเครื่องมือต่าง ๆ มาช่วยให้เราสามารถ Optimize ได้ง่าย

![](https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=2000&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ)

**Icon Font Tree Shaking**

โดยในเวอร์ชันนี้ Flutter ก็ได้พยายามปรับปรุงประสิทธิภาพเพิ่มขึ้นไปอีก ด้วยการนำ Icon Font Tree Shaking มาใช้เพื่อลดขนาดของแอปพลิเคชันลงด้วยการทำ Tree Shaking กับ Icon Font เพื่อลบไอคอนที่ไม่ได้ใช้งานในแอปพลิเคชันออกไป ส่งผลให้ App Bundle มีขนาดลดลง โดย Flutter ได้ทดสอบคร่าว ๆ ว่าลดไปได้ถึง 100kb สำหรับแอพตัวอย่างของ Flutter ที่ชื่อว่า [Gallery](https://gallery.flutter.dev/#/)

โดยฟีเจอร์นี้นั้นจะถูกเปิดการใช้งานโดยปกติ นั่นหมายความว่าหากเรา Build Flutter App ด้วย Flutter 1.20 เราสามารถคาดหวังขนาดของ Application ที่ลดลงได้โดยไม่ต้องทำอะไรเลยนั่นเอง โดยตอนนี้ฟีเจอร์นี้ยังมีข้อจำกัดอยู่ที่ยังรองรับแค่ฟอนต์แบบ TrueType (.ttf) เท่านั้น โดยฟอนต์แบบอื่น ๆ จะได้รับการรองรับในอนาคต

![](https://images.unsplash.com/photo-1530021595331-3fd4e9ae2115?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=2000&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ)

**Warm-up phase**

ถึงแม้ว่าประสิทธิภาพของ Flutter จะดีเพียงใด แต่หลายครั้งโดยเฉพาะเวลาที่เราใช้งาน Animation เรามักพบกับสิ่งที่เรียกว่า Jank หรืออาการที่เฟรม ๆ หนึ่งใช้เวลาในการ Render นานเกินไปทำให้เมื่อ Render ทำให้ Skip Frame นั้นไป

โดยในเวอร์ชันนี้ Flutter ก็ได้เสนอวิธีในการแก้ปัญหากรณีที่เกิด Jank สำหรับ Animation ที่รันครั้งแรก ด้วยการให้ Skia ซึ่งเป็น Rendering Engine เข้ามาช่วยผ่าน Skia Shading Language ในการสร้าง Pre-compliation เป็นส่วนหนึ่งของการ Build Application ซึ่งจาการทดสอบก็สามารถช่วยเพิ่มประสิทธิภาพได้มากถึง 2 เท่าด้วยกัน

สำหรับวิธีนี้นั้นค่อนข้างจะ Advance และมี Use-case ที่ค่อนข้างจำเพาะเจาะจง นั่นคืออาการ Jank เฉพาะเมื่อ Animation รันครั้งแรก และ Smooth ตามปกติในครั้งถัด ๆ ไป อาการนี้มักเกิดจาก Shader Compilation นั่นเอง ซึ่งคำว่า Warm-up ในที่นี้หมายถึงการ Pre-compile ซึ่งสามารถเข้ามาช่วยเรื่องการ Compile ไม่ทันได้นั่นเอ

โดยผู้ที่สนใจสามารถศึกษารายละเอียดเพิ่มเติมได้ที่ [Reduce shader compilation jank on mobile](https://flutter.dev/docs/perf/rendering/shader)

![focus on the target](https://images.unsplash.com/photo-1581574919402-5b7d733224d6?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=2000&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ)

**Refined Mouse Hit Testing System**

สำหรับการปรับปรุงในแง่ของประสิทธิภาพอันสุดท้ายในเวอร์ชันนี้ ค่อนข้างจะเกี่ยวข้องกับ Flutter for Desktop, Flutter for Web นั่นก็คือการปรับปรุงการวิเคราะห์ Hit Testing (ทดสอบว่า Mouse กดโดนอะไรบนหน้าจอ)

โดยผลจาการทดสอบพบว่าสามารถเพิ่มประสิทธิภาพสำหรับเว็บในชุดการทดสอบได้มากถึง 15 เท่า ซึ่งนอกจากประสิทธิภาพที่ดียิ่งขึ้นแล้ว ยังมีความแม่นยำ (Accuracy) เพิ่มขึ้นอีกด้วย

สำหรับของแถมที่ได้มากับประสิทธิภาพและความแม่นยำที่เพิ่มมากยิ่งขึ้นก็คือก็สนับสนุน Mouse Cursor นั่นเอง โดยในตอนนี้ Widget ต่าง ๆ จะสนับสนุน Cursor แบบต่าง ๆ แล้ว เช่น เมื่อนำ Mouse ไป Hover ที่ Form Field ก็จะเป็นตัว I หรือเมื่อนำ Mouse ไป Hover ที่ปุ่มก็จะเป็นรูปนิ้วชี้ ซึ่งเราสามารถกำหนดให้เป็นรูปแบบต่าง ๆ ที่มีได้เช่นกัน

![](https://images.unsplash.com/photo-1579019163248-e7761241d85a?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=2000&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ)

**Dart 2.9**

ในเวอร์ชันนี้ยังมาพร้อมกับ Dart 2.9 ซึ่งช่วยให้ประสิทธิภาพดียิ่งขึ้นอีกด้วย โดยจะกล่าวในรายละเอียดต่อไปในบทความ

---

## Beautiful - Autofill, New Widgets, Updated Widgets

สำหรับความสวยงามก็คงหนีไม่พ้นเรื่องของ Widget ต่าง ๆ ซึ่งในเวอร์ชันนี้ไม่เพียงแต่ Widget ต่าง ๆ มีรูปร่างหน้าตาที่สวยงาม ทันสมัย และมีพฤติกรรมที่เหมาะสมมากยิ่งขึ้น โดยเฉพาะ Widget ตระกูล Material ที่มีการปรับปรุงให้ Widget เป็นไปตาม Guideline อยู่เสมอ

![](https://images.unsplash.com/photo-1563207153-f403bf289096?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=2000&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ)

**Autofill**

ปฏิเสธไม่ได้ว่าในปัจจุบันเราพึ่งพา Autofill กันอย่างมากมายมหาศาล แต่ Flutter ก็ยังไม่เคย Support สักที จนกระทั่งเวอร์ชันนี้ที่ Autofill ได้มาถึงแล้วทั้ง iOS และ Android โดย Text Autofill ที่ใช้กับ Form Field จะสามารถทำได้ตามที่ตั้งใจไว้ ซึ่งจะช่วยให้ผู้ใช้ไม่ต้องกรอกข้อมูลซ้ำ ๆ เองบ่อย ๆ

![Chess](https://images.unsplash.com/photo-1528819622765-d6bcf132f793?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=2000&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ)

**InteractiveViewer**

หลายครั้งที่เราต้องการ Interactive Area ใน Application ที่รองรับการ Pan, Zoom, Drag & Drop ตอนนี้เรามี Widget ที่ทำอย่างนั้นได้แล้วด้วย `InteractiveViewer`  โดยเฉพาะการ Drag & Drop ที่ตอนนี้เราสามารถได้ข้อมูลถึงตำแหน่งของ Widget ที่ถูก Drop ลงไปได้อีกด้วย ซึ่งปกติเราจะต้องเช้าถึงข้อมูลนี้จาก `Draggable` แต่ตอนนี้เราสามารถเข้าถึงจาก `DragTarget` ได้แล้วผ่าน `onAcceptDetails` สำหรับผู้ที่สนใจรายละเอียดเพิ่มเติมสามารถอ่านได้ [InteractiveViewer](https://api.flutter.dev/flutter/widgets/InteractiveViewer-class.html)
![](__GHOST_URL__/content/images/2020/08/image-1.png)Image From: https://flutter.dev/docs/reference/widgets
**Updated Material Widgets: `Slider`, `RangeSlider`, `TimePicker`, `DatePicker`**

โดย Widgets ต่าง ๆ ที่อัพเดทเหล่านี้จะมีหน้าตา/พฤติกรรมที่สอดคล้องกับ Material Guideline เวอร์ชันล่าสุดมากยิ่งขึ้น รวมถึงมีการปรับปรุงต่าง ๆ เพื่อทำให้ใช้งานได้ครอบคลุมมากยิ่งขึ้นอีกด้วย

[Slider](https://api.flutter.dev/flutter/material/Slider-class.html), [RangeSlider](https://api.flutter.dev/flutter/material/RangeSlider-class.html) , [TimePicker](https://api.flutter.dev/flutter/material/showTimePicker.html), [DatePicker](https://api.flutter.dev/flutter/material/showDatePicker.html)

![Android Phone](https://images.unsplash.com/photo-1512149673953-1e251807ec7c?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=2000&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ)

**Responsive `AboutDialog`**

นอกจากนี้ยังมีการปรับปรุง `AboutDialog` ซึ่งเรามักใช้สำหรับโชว์ License ต่าง ๆ โดยเฉพาะ License ของ Package/Plugin ซึ่งตอนนี้จะมีหน้าตาที่ตาม Material Guideline มากยิ่งขึ้น รวมทั้งยังทำงานได้บนทุกอุปกรณ์ในรูปแบบที่สวยงาม และใช้งานง่ายได้อีกด้วย

[AboutDialog](https://api.flutter.dev/flutter/material/AboutDialog-class.html)

---

## Productive - Improved DevTools, Safer Platform Channel, Updated IDE Plugins

สำหรับในหมวด Productive ก็จะโฟกัสหลัก ๆ กันไปที่ DevTools และ Plugin สำหรับ IDE ต่าง ๆ แต่เราจะมาเริ่มกันด้วยความเปลี่ยนแปลงสำหรับ Package/Plugin Creator

![JavaScript in progress](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=2000&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ)

**ฟอร์แมตของ `pubspec.yaml`  แบบใหม่ ตอนนี้จำเป็นต่อการ Publish Package/Plugin ขึ้น pub.dev**

หลังจากที่ Flutter ประกาศปรับฟอร์แมตของ `pubspec.yaml` มาได้สักพักใหญ่ (มาก)​ แล้วตอนนี้ก็ไม่รองรับฟอร์แมตแบบเดิมอีกต่อไป ในมุมมองส่วนตัวมองว่าสำหรับคนที่พึ่งเริ่มเขียน Package/Plugin ใหม่นั้นไม่ได้รับผลกระทบมากนัก เนื่องจากตัว `flutter create` ได้ใช้ฟอร์แมตแบบใหม่มาสักพักใหญ่แล้ว

ในเรื่องนี้จะกระทบกับผู้ที่เขียนใช้งาน Flutter ตอนออกใหม่ ๆ และได้ทำ Package/Plugin ทิ้งไว้ โดยไม่ได้ปรับฟอร์แมต จะส่งผลให้ไม่สามารถ Publish Package/Plugin เวอร์ชันใหม่ได้หากไม่ปรับฟอร์แมตของ `pubspec.yaml` เสียก่อน

สำหรับผู้ใช้ Package/Plugin ก็ไม่ต้องเป็นกังวลไปเพราะ pub.dev จะยังคงสนับสนุน Package/Plugin ที่ใช้ฟอร์แมตเก่าและยังคงค้าอยู่บนเว็บต่อไปโดยไม่ได้อัพเดทฟอร์แมตต่อไปช่วงนี้
![“How wonderful it is to be able to write someone a letter! To feel like conveying your thoughts to a person, to sit at your desk and pick up a pen, to put your thoughts into words like this is truly marvelous.” 

― Haruki Murakami, Norwegian Wood](https://images.unsplash.com/photo-1495522284885-41b9fc716455?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=2000&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ)

**Typesafe Platform Channels**

ยังคงอยู่กับเรื่องของ Package/Plugin เนื่องด้วยในปัจจุบันเราเห็น Plugin (Package ที่มีการใช้งาน Native Feature) เพิ่มขึ้นเป็นจำนวนมาก Flutter จะได้ทำการปล่อยโปรเจค Pigeon ออกมา โดย Pigeon เป็น Tools ที่ใช้สำหรับการอ่าน Syntax ของ Dart และ Generate Messaging Code ที่ใช้สำหรับติดต่อกับ Native ได้โดยที่เราไม่ต้องทำอะไรและการันตีความปลอดถัยให้อีกด้วย

อย่างไรก็ตาม Pigeon ยังคงอยู่ในช่วง Pre-release เท่านั้น ดังนั้นอาจจะมี Breaking changes ได้ แต่ในแง่ของความ Stable แล้ว ต้องบอกว่าใช้ได้เลยทีเดียว เพราะทีมของ Flutter เองก็ได้ทดลองใช้ใน Plugin เช่น `video_player` แล้ว

![](https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=2000&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ)

**DevTools - Welcome Network Tracking**

สิ่งที่เพิ่มเข้ามาใน DevTools ที่น่าสนใจก็คือเรื่องของ Network Tracking ที่จะช่วยให้เราสามารถเรียกใช้งาน Web Socket Profiling ทำให้ตอนนี้ DevTools สามารถโชว์รายละเอียดของ Request/Response ไม่ว่าจะเป็น HTTP หรือ WebSocket ได้แล้ว นอกจากนี้ยังสามารถ Monitor gRPC Traffic ได้อีกด้วย สำหรับรายละเอียดแบบเต็ม ๆ ของ DevTools จะกล่าวถึงอีกครั้งในบทความนี้

![Some Variables](https://images.unsplash.com/photo-1518085250887-2f903c200fee?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=2000&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ)

**Visual Studio Code - Embedded Dart DevTools + Smarter than before**

สำหรับคนที่ใช้ Visual Studio Code ในการพัฒนา Flutter ก็อาจจะยิ้มออกได้แล้วเสียที เนื่องจากตอนนี้ Flutter ได้ทำการพัฒนาในส่วนของการ Embedded Dart DevTools เข้าไปใน VS Code โดยตรง แต่อย่างไรก็ตามในส่วนนี้นั้นยังคงเป็น Preview อยู่ โดยผู้ที่สนใจสามารถ Enable ได้ โดยการเพิ่มบรรทัดนี้เข้าไปยัง `settings.json` ของ VS Code

    dart.previewEmbeddedDevTools

หากใช้งานแล้วเจอบัคอย่างไรก็อย่าลืม File Issues กันด้วย เพื่อให้ Extension ดียิ่ง ๆ ขึ้นไปอีก

นอกเหนือไปจากการ Embedded DevTools เข้ามาใน VS Code โดยตรงแล้ว Flutter ยังได้เพิ่มความสามารถใหม่ที่หลายคนรอคอยมานาน เพราะ IDE อื่น ๆ ก็ทำได้ด้วยตัวของมันเองอยู่แล้ว นั่นก็คือการอัพเดท Path ของ Imported Files โดยอัตโนมัตินั่นเอง ถือว่าเป็นอีกหนึ่งฟีเจอร์ที่มีประโยชน์ และช่วยเซฟเวลาได้เป็นอย่าดี หมดสิ้นแล้วกับคืนวันที่ย้ายไฟล์เข้าโฟลเดอร์แล้วต้องไล่อัพเดท Path แต่อัพเดทไม่ครบแล้วต้องมาไล่อีกที

![](https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=2000&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ)

**Tooling Metadata**

สำหรับสิ่งนี้หลาย ๆ คนอาจจะไม่ได้ใช้ประโยชน์โดยตรง เพราะตอนนี้ Flutter ได้เพิ่ม Tooling Metadata ต่าง ๆ สำหรับคนที่ต้องการสร้าง Tools ขึ้นมาใช้งานร่วมกับ Flutter โดยประกอบไปด้วย

- Catalog ของ Flutter Widgets ทั้งหมด (ปัจจุบัน Flutter มี Widget ทั้งสิ้น 395 Widgets!)
- Flutter Color Names คู่กับ Color Values สำหรับการแสดงพรีวิวสีต่าง ๆ
- Icon Metadata สำหรับการแสดงพรีวิวไอคอน

---

## Flutter 1.20 - Breaking Changes

หนึ่งในความตั้งใจของ Flutter คือการพยายามรักษา Breaking Changes ให้ต่ำไว้ เพื่อให้นักพัฒนามีงานน้อยที่สุดเมื่อต้องการอัพเดทเวอร์ชันของ Flutter และได้รับผลดีต่าง ๆ ที่มาพร้อมกับการอัพเดทเวอร์ชันใหม่ โดยในเวอร์ชันนี้มี Breaking Changes ด้วยกันทั้งหมด 6 อย่าง ได้แก่

- เพิ่ม `tabSemanticsLabel` ให้กับ `CupertinoLocalizations`
- เพิ่ม `clipBehavior` ให้กับ Widget ที่ใช้งาน `clipRect`
- แก้ไข Navigator Update Crash โดยจะมีผลกระทบกับผู้ที่ใช้ Navigator API และ Implement `TransitionDelegate`
- เพื่ม Tab semantics ให้กับ Cupertino เพื่อให้สอดคล้องกับ Material
- ลบ Deprecated `child` สำหรับการจัดการ Sliver ที่มีการทับซ้อนกับ `NestedScrollView`
- เพิ่ม iOS Mid-drag Activity Indicator ใช้ในการตรวจสอบ Event ผู้ใช้ต้องการ Pull จากข้างบนลงมาแต่ไม่สุด

---

## New in Dart 2.9.0

สำหรับการเปลี่ยนแปลงใน Dart เวอร์ชัน 2.9.0 ก็ได้มีการอัพเดทที่กระทบกับทั้ง Core Libraries และ Tools ดังต่อไปนี้

`**dart:async**`

- เพิ่ม `Stream.multi` Constructor สำหรับสร้าง Stream ที่สามารถ Listen ได้มากกว่าหนึ่งครั้ง และแต่ละ Listener ถูกควบคุมโดยแยกจากกัน

**`dart:convert`**

- BREAKING CHANGE: เมื่อมีการ Encode String เป็น UTF-8 และมีบางส่วนที่ไม่พบสัญลักษณ์เท่าเข้าคู่กัน จะถูก Encoded เป็น `U+FFFD` (Replacement Character) และเมื่อมีการ Decode และพบจะถูกแจ้งว่าเป็น Malformed Input และเมื่อมีการ Decode เป็น UTF-8 ด้วย `allowMalformed: true` จำนวนของ Replacement Character สำหรับช่วงที่เป็น Malformed Input มีการเปลี่ยนแปลงเพื่อให้เป็นไปตามมาตรฐานของ [WHATWG Encoding Standard](https://encoding.spec.whatwg.org/#utf-8-decoder)

**`dart:io`**

- Method Signature ของ `exit` มีการเปลี่ยน Return type จาก `void` เป็น `Never` เนื่องเพื่อให้เหมาะสมกับพฤติกรรมที่สื่อว่าจะไม่มีการรันโค้ดหลังจากนั้น
- Class `OSError` ตอนนี้ได้มีการ Implement `Exception` แล้ว ทำให้สามารถ Catch ได้
- เพิ่ม `InternetAddress.tryParse`
- [Abstract Unix Domain Socket](http://man7.org/linux/man-pages/man7/unix.7.html) ตอนนี้ได้รับการสนับสนุนบน Linux/Android แล้ว โดยการใช้ `InternetAddress` ที่มีการส่งค่า `address` ที่เริ่มต้นด้วย '@' แล้วมีประเภทเป็น `InternetAddressType.Unix` จะสร้าง abstract Unix Domain Socket.

`**dart:html**`

- BREAKING CHANGE: `CssClassSet.add()` เปลี่ยนจากการ Return `null` เมื่อ `CssClassSet` ถูกเชื่อมโยงกับหลาย Element เป็น `false` แทน เพื่อให้สอดคล้องกับการเปลี่ยนแปลงในเรื่องของ Null-safe ใน `Set` Interface โดยมีการเปลี่ยนแปลงเช่นเดียวกันกับ `CssClassSet.toggle`
- `EventStreamSubscription.cancel` เปลี่ยนจากการ Return `null` เป็น `Future` แบบว่าง ๆ แทน เนื่องจาก​ `StreamSubscription.cancel` เปลี่ยนไปเป็น Non-nullable และเนื่องด้วยการ Optimization ของ `null` ซึ่งแต่เดิมจะมีการจบการทำงานแบบ Synchronus มาเป็น `Future` ซึ่งมีการจบการทำแบบ Asynchronus ทำให้ส่งผลกระทบกับโค้ดอื่น ๆ ที่ต้องการผลลัพธ์ข้างเคียง (Side-effect) ของ Synchronus โดยโค้ดที่ได้รับผลกระทบจะมีเพียงโค้ดที่ใช้งานแบบ Sound Null-safety เท่านั้น
- Methods ใน `Console` ได้รับการอัพเดท เพื่อให้เข้ากันกับมาตรฐานใหม่ของ Console เช่น `dir` และ `table` ที่รับ Optional Arguments เพิ่มเติม

**`dart:mirrors`**

- BREAKING CHANGE: Web Compilers (dart2js และ DDC) จะให้ผลลัพธ์ Compile-time Error เมื่อ `dart:mirrors` ถูก Import เข้ามา โดยโปรเจคส่วนใหญ่จะไม่ได้รับผลกระทบ เนื่องจาก Dart 2.0.0 เป็นต้นไปนั้น `dart:mirrors` ไม่ได้รับการสนับสนุนแล้ว และจะปรากฎ Runtime Error เมื่อมีการพยายามเรียกใช้งาน API จาก Library นี้

### Tools

#### dartfmt (ตัว Format Code ของ Dart)

- เพิ่ม `--fix-single-cascade-statements`
- แก้ไขการวิเคราะห์ `var` ใน `--fix-function-typedefs`
- คงค่าของที่ว่างไว้ในการ Comment แบบ Documentation
- แยก Element ของ Control Flow ส่วนนอกที่ซ้อนกัน (Nested)
- เพิ่มบรรทัดว่างเสมอหลัง `script` Tags
- ไม่แยก `if` ที่ไม่จำเป็น สำหรับ `if` ที่อยู่ใกล้กับ Comment
- เพิ่ม Indent blocks ใน initializers ของ การประกาศตัวแปรแบบหลายตัว
- ปรับปรุง Null-aware Subscript Syntax จาก `?.[]` เป็น `?[]`

#### Linter (Code Highlighter ของ Dart)

อัพเดท Linter เป็นเวอร์ชัน `0.1.117`

- ใหม่: `do_not_use_environment`
- ใหม่: `exhaustive_cases`
- ใหม่: `no_default_cases` (ทดลอง)
- ใหม่: `sized_box_for_whitespace`
- ใหม่: `use_is_even_rather_than_modulo`
- ปรับปรุง `directives_ordering` ให้ลบ Third Party Package Special-casing
- ปรับปรุง `prefer_is_empty` สำหรับ Special-case Assert Initializers const Contexts
- ปรับปรุง `prefer_mixin` ให้อนุญาต "legacy" SDK Abstract Class Mixins
- ปรับปรุง `sized_box_for_whitespace` โดยแก้ไขกรณี False-positive
- ปรับปรุง `type_annotate_public_apis` ให้อนุญาต Inferred Types ใน final Field
- ปรับปรุง `unnecessary_lambdas` ให้เช็ค Tear-off Assignability
- ปรับปรุง `unsafe_html` ให้ใช้ `SecurityLintCode` (ทำให้ไม่สามารถมองข้ามได้) และเพิ่ม `Window.open`, `Element.html` และ `DocumentFragment.html` ในการเช็ค unsafe API นอกจากนี้ยังเพิ่มการเช็ค Attributes และ Methods ของ Extensions

### Dart VM

- BREAKING CHANGE: เมื่อปริ้นต์ String ด้วย `print` แล้ว Default Implementation (ไม่ถูก Override) จะปริ้นต์ Replacement Character เมื่อเจอส่วนที่ไม่สามารถแปลงเป็นสัญลักษณ์ได้

### Pub

- `pub run` และ `pub global run` รับ Flag `--enable-experiment` สำหรับการเปิด Experiment ใน Dart VM (และ Dart)
- เตือนเมื่อมีการ Publish Package เวอร์ชันแรกที่ใช้งาน Null safe
- `pub outdated` เพิ่ม​ Flag `--mode=null-safety` ที่จะบอกว่า Dependencies ไหนที่สามรถอัพเกรดเป็นเวอร์ชันที่รองรับ Null Safety ได้แล้ว นอกจากนี้ยังจะมีการเปลี่ยนแปลงโดยจะรายงานถึงเวอร์ชันที่เป็นแบบ Pre-release ของ Dependecy นั้น ๆ หากเวอร์ชันล่าสุดเป็น Pre-release แล้ว และไม่มีเวอร์ชันแบบ Stable ที่ใหม่กว่านั้น นอกจากนี้ยังยกเลิกการบังคับให้ต้องมีไฟล์ `pubspec.lock` อยู่เสมอ โดยเมื่อไม่เจอ Column จะแสดงผล Current จะเป็นว่าง ๆ แทน
- `pub upgrade` แสดงจำนวนของ Outdated Package แบบสรุปหลังจากรัน โดยจะแสดง Package ใหม่เฉพาะเมื่อไม่ใช่ Pre-release หรือเวอร์ชันล่าสุดเป็น Pre-release
- การ Publish Flutter plugins ด้วย Format เก่าจะไม่รองรับแล้ว แต่การใช้งานจะยังคงใช้งานได้
- `pub run` แก้ไขการ Precompile โดยใช้ `PUB_CACHE` Relative Path
- คงไว้ซึ่งเส้นสิ้นสุดบน Windows ใน `pubspec.lock` ถ้าหากมีอยู่แล้ว
- ปรับปรุงการตรวจจับสีใน Terminal โดยใช้สีใน Terminal บน Windows
- แก้ไขชื่อโฟลเดอร์ git ในแคล โดยอนุญาต ssh-style Git Dependency
- แก้ไขโดยการหลีกเลี่ยงการ Precompile ของ Dependency ของ Global Package

---

##  New in Dart DevTools 0.9.0

เครื่องมือสำหรับการวัดประสิทธิภาพ และตัวช่วยแก้ไขโค้ดคู่ใจนักพัฒนา Dart/Flutter ในเวอร์ชันนี้ก็ได้รับการอัพเดทเช่นกัน โดยมีรายละเอียดดังต่อไปนี้

- General - เพิ่มความสามารถในการ Search ของ Timeline Flame Chart
- General - เพิ่มความสามารถในการทำ Socket Profiling ในหน้า Network
- Memory - สนับสนุน Snapshots หลาย ๆ อัน รวมไปถึงการสร้าง Snapshot แบบอัตโนมัติ
- Memory - เพิ่มส่วนของ Event เพื่อใช้ในการติดตามจำนวนของการ Allocate สำหรับแต่ละ Class โดยไม่ต้องสร้าง Full Snapshot
- Memory - เปลี่ยน Heatmap เป็น Treemap
- Debugger - CMD+P จะสลับไปหน้า Library
- Debugger - เพิ่มการสนับสนุนการเพิ่ม Keymap
- Debugger - เพิ่ม Tooltips ให้กับ Item ใน List หน้า Debugger Libraries

---

## Final Thoughts

ถือว่าในอัพเดทนี้ Flutter ได้จัดหนักจัดเต็มทั้งการแก้ไขปัญหา ปรับปรุงประสิทธิภาพ รวมไปถึงการเพิ่มฟีเจอร์ใหม่ ๆ ที่เราไม่ได้เห็นกันบ่อยนัก สำหรับผู้ที่ต้องการอัพเดท Flutter เป็นเวอร์ชันใหม่ก็สามารถเปิด Termial และพิมพ์ Command กันได้เลย

    flutter upgrade

---

## Spoiler Alert! - Future of Flutter

**Sound Null Safety**

สำหรับ Sound Null Safety เรามักจะได้เห็นกันบ่อยแล้วถึงการสปอยรัว ๆ จาก Flutter ถึงการมาของมัน ซึ่งจะเข้ามาช่วยให้เราเขียนโค้ดได้ปลอดภัย และปลอดบัคกันมากยิ่งขึ้น โดยผู้ที่สนใจในรายละเอียดเพิ่มเติมสามารถอ่านได้ที่ [Dart: Sound Null Safety กำลังมาใน Dart 2.9!](__GHOST_URL__/dart-sound-null-safety/)

**Navigator 2.0**

นอกจากนี้หากแอบไปส่อง Milestone ของ Flutter เราจะยังเห็นได้อีกว่าใน August Milestone จะมี Navigator 2.0 อยู่ด้วยซึ่งจะเป็นการเพิ่มเติมให้เราสามารถควบคุม Navigation Stack ได้ง่ายได้มากยิ่งขึ้น รวมไปถึงการเปลี่ยนแปลงรูปแบบการเขียนโค้ดที่ใช้งาน Navigator จากแบบ Imperative ให้เป็นแบบ Declarative ซึ่งจะมีความสอดคล้องกับรูปแบบของการใช้งาน Widget ต่าง ๆ ใน Dart มากยิ่งขึ้น ผ่าน Widget ตัวใหม่ `Router` ซึ่งหากมีรายละเอียดเพิ่มเติมเมื่อไร จะนำมาแจ้งไว้ให้ได้ทราบในโอกาสถัดไป

แต่การเปลี่ยนแปลงนี้จะยังไม่ถึงกับ Deprecate Navigator แบบเก่าไปซะทีเดียว เรียกว่ามีช้อยส์มาให้เลือกใช้งานได้เพิ่มดีกว่า ดังนั้นจึงมั่นใจได้ว่าการเปลี่ยนแปลงนี้ไม่ใช่ Breaking Changes แน่นอน และยังคง Backward Compatible กับโค้ดชุดเก่าของเรา

---

ถือได้ว่าอนาคตของ Flutter ตอนนี้กำลังสดใสมาก ๆ สำหรับใครที่ยังไม่เคยลองเขียน Flutter ก็ต้องบอกว่าแม้ว่าในอนาคตจะมีฟีเจอร์ใหม่ ๆ เพิ่มเข้ามาที่อาจเปลี่ยนแปลงรูปแบบการเขียนโค้ดไป แต่เชื่อเหลือเกินว่า ณ ขณะนี้คือเวลาที่ดีที่สุดแล้วในการเริ่มทดลองใช้งาน Flutter โดยสำหรับผู้ที่สนใจก็สามารถลองไปอ่าน [Flutter Documentation](https://flutter.dev/docs) หรือหากใครอยากเรียนรู้ผ่านการเขียนโค้ดก็สามารถลองไปเล่น [Flutter Codelabs](https://flutter.dev/docs/codelabs) กันได้ ซึ่งมีให้ตั้งแต่ Beginners ยันผู้ที่ต้องการใช้งานขั้นสูงกันเลยทีเดียว

---

## *📚 Hope you enjoy reading! 📚*

---
