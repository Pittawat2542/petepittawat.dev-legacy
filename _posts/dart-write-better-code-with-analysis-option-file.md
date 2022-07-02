---
title: "Dart: เขียนโค้ดให้ดีขึ้นด้วยไฟล์ Analysis Options"
slug: dart-write-better-code-with-analysis-option-file
date: '2020-12-26T07:07:30.000Z'
tags: Dart
coverImage: /assets/blog/dart-write-better-code-with-analysis-option-file/cover.jpeg
author:
  name: Pittawat Taveekitworachai
  picture: /assets/blog/authors/pittawat.jpg
ogImage:
  url: /assets/blog/dart-write-better-code-with-analysis-option-file/cover.jpeg
---

การพัฒนาซอฟแวร์นั้นไม่เพียงแต่เป็นศาสตร์ที่ต้องใช้องค์ความรู้เท่านั้น หากแต่เป็นศิลป์ในการร้อยเรียงถ้อยคำเพื่อสั่งงานเครื่องจักรกลให้ทำงานตามที่เราต้องการด้วย แน่นอนว่าการพัฒนาซอฟต์แวร์ด้วยตัวคนเดียวนั้น เราจะเขียนโค้ดอย่างไร สไตล์ไหนก็ไม่มีใครว่า หากแต่เมื่อต้องทำงานเป็นทีมแล้ว สไตล์ในการเขียนโค้ดของคุณอาจทำให้คนอื่นในทีมตกตะลึงก็เป็นได้

การเขียนโค้ดให้ดีนั้นไม่เพียงแต่ต้องอาศัยประสบการณ์ในการพัฒนาซอฟต์แวร์จนถึงจุดที่จะรู้เท่านั้นว่าแบบไหนดีการบำรุงรักษา (Maintenance) หรือแบบไหนดีต่อการสื่อสารกับเพื่อนร่วมทีม หากแต่ต้องอาศัยการศึกษาเพิ่มเติมโดยเฉพาะสิ่งที่เรียกว่า Best Practice ซึ่งเป็นแนวทางในการพัฒนาซอฟต์แวร์ที่ได้รับการยอมรับในชุมชนของนักพัฒนาในภาษาหรือเครื่องมือชิ้นนั้น ๆ เองว่าดี

แน่นอนว่าการเป็นมนุษย์นั้นทำให้เราขี้เกียจ และถึงแม้ว่าเราจะอ่านมาแล้วว่ามี 108 วิธีในการพัฒนาซอฟต์แวร์ที่ดี เราก็มักจะไม่สามารถจำมันได้ทั้งหมด จึงได้เกิดเครื่องมือขึ้นมาเพื่อช่วยเรา เช่น Linter ที่พบได้ในภาษาต่าง ๆ ซึ่งไม่เพียงแต่ช่วยระบุ (Spot) จุดที่อาจเกิดปัญหาก่อนการ Compile ได้ ยังสามารถเพิ่มกฎ (Rule) ต่าง ๆ เข้าไปเพื่อทำให้มีความสามารถในการระบุจุดที่ไม่เป็นไปตามกฎที่ตั้งไว้ได้อีกด้วย เช่น เราอาจมีการระบุกฎว่าการตั้งชื่อตัวแปรต้องเป็นแบบ camelCase เท่านั้นห้ามเป็นแบบ snake_case ซึ่งหากเราเผลอตั้งชื่อตัวแปรในแบบ snake_case ไป เจ้า Linter ก็จะปรากฎเป็นเส้นหยักเตือนเราขึ้นมา โดยในบางกรณีเราก็สามารถที่จะตั้งค่าเพิ่มเติมเพื่อระบุความเข้มข้นของกฎนั้น ๆ เพิ่มเติมได้อีกด้วย เช่น เป็นเพียงแค่การเตือน (Warning) หรือเป็นข้อผิดพลาด (Error) ซึ่งถ้าหากเป็นเพียงแค่การเตือนเราจะอาจจะยังสามารถ Compile โค้ดของเราได้ แต่หากเป็นข้อผิดพลาด เราจะไม่สามารถ Compile ได้

## Dart Static Analysis

แน่นอนว่า Dart เองโดยพื้นฐานแล้วก็มาพร้อมกับ Dart Analysis Server ที่จะช่วยวิเคราะห์ปัญหาที่อาจจะทำให้ Compile ไม่ผ่านมาก่อนแล้ว แต่เราก็สามารถตั้งค่าเพิ่มเติมเพื่อระบุแล้วช่วยปรับปรุงโค้ดของเราให้เป็นไปตามแนวทางที่ดีได้เช่นกัน

ซึ่งหากเราต้องการที่จะทำการตั้งค่าให้ Linter ของเราสามารถช่วยเหลือเราได้มากขึ้น ก็สามารถทำได้โดยการตั้งค่า Analysis Options

## Analysis Options

สำหรับการตั้งค่า Analysis Options นั้นสามารถทำได้โดยการเริ่มต้นด้วยการสร้างไฟล์ชื่อ `analysis_options.yaml` ไว้ใน Root Folder ของโปรเจค

สำหรับเนื้อหาในไฟล์นั้นจะเป็น Config ต่าง ๆ ที่เราต้องการตั้งค่า ข้อควรระวังคือไฟล์นี้นั้นเป็นประเภท YAML ดังนั้น Whitespace และ Indentation มีความสำคัญ ข้อแนะนำของ Dart คือให้ใช้การเคาะ Spacebar 2 ครั้งแทนการใช้ Tab

นอกจากเราสามารถตั้งค่า Analysis Options ที่ระดับ Project ได้แล้ว เรายังสามารถสามารถตั้งค่าในระดับ Package ได้อีกด้วย ซึ่งเหมาะสำหรับ Project ที่มีหลาย Package โดยสร้างไฟล์ `analysis_options.yaml` แยกสำหรับแต่ละ Package และวางไว้ในโฟลเดอร์ของ Package (ที่เดียวกับ `pubspec.yaml` ของ Package นั้น ๆ)

## Pedantic & Effective Dart

หากใครที่มีความต้องการในใจของตัวเองแล้วก็สามารถ Config ได้เองโดยสามารถ Follow [Guide](https://dart.dev/guides/language/analysis-options) แต่เราข้อแนะนำ 2 Development Packages ที่จะมาช่วยกำหนด Rules ต่าง ๆ ที่หลาย ๆ คนให้การยอมรับนั่นก็คือ Pedantic และ Effective Dart นั่นเอง

โดยสำหรับ Pendatic นั้นจะเป็น Collection ของ Rules ที่เป็น Default และใช้กันใน Google ส่วน Effective Dart เป็น Collection ของ Rules ที่ Implement ตาม Guide ของ [Effective Dart](https://dart.dev/guides/language/effective-dart) โดยข้อแนะนำคือให้เลือกใช้อันใดอันหนึ่ง โดย Pendantic จะ Strict มากกว่า Effective Dart อย่างไรก็ตามการเลือกใช้งานว่าจะใช้ตามแนวทางไหน หรือตั้งค่าขึ้นมาเองนั้นก็ขึ้นอยู่กับบริบทและดุลยพินิจของทีม

สำหรับการใช้งาน Pedantic หรือ Effective Dart นั้นก็ง่ายดายด้วยการเริ่มจากลง Package ก่อน โดยไปที่ไฟล์ `pubspec.yaml` และเพิ่มบรรทัดต่อไปนี้

Pedantic

    dev_dependencies:
      pedantic: ^1.0.0

หรือ

Effective Dart

    dev_dependencies:
      pedantic: ^1.9.0

**หมายเหตุ ตรวจสอบเวอร์ชันล่าสุดของทั้งสอง Packages ได้ที่ [pedantic](https://pub.dev/packages/pedantic) และ [effective_dart](https://pub.dev/packages/effective_dart)

หลังจากเพิ่ม Package ในไฟล์เรียบร้อยแล้วก็รันคำสั่ง Get (Dart: `pub get` หรือ Flutter: `flutter pub get` หรือกดปุ่มใน IDE) ตามปกติเพื่อดาวน์โหลด Package มา

ถัดไปจึงเพิ่มบรรทัดต่อไปนี้ในไฟล์ `analysis_options.yaml`

Pedantic

    include: package:pedantic/analysis_options.yaml

หรือ

Effective Dart

    include: package:effective_dart/analysis_options.yaml

เท่านี้ก็เป็นอันเรียบร้อย แล้วก็กด Reload ตัว Analysis Server เพื่อให้ตรวจสอบไฟล์ของเราใหม่ได้เลย

ข้อควรระวังเล็กน้อยหรืออาจะเรียกเป็นข้อดีก็ได้ คือ สำหรับการใช้งาน Pedantic หรือ Effective Dart นั้นอาจมีการอัพเดทใหม่ ๆ อยู่เรื่อย ๆ ซึ่งอาจทำให้โค้ดเราเจอคำเตือนเพิ่มขึ้นนั่นเอง xD

## การตั้งค่าเพิ่มเติม

สำหรับผู้ที่ต้องการ Disable บาง Rule ก็สามารถทำได้โดย ถัดจากบรรทัดที่เรา `include` เข้ามาในไฟล์ `analysis_options.yaml` เพิ่มบรรทัดต่อไปนี้

    linter:
      rules:
        <rule_name>: [true|false]

โดยแทนที่ `<rule_name>` ด้วยชื่อกฎที่ต้องการ Disable (ค่าเป็น `false`/Enable ค่าเป็น `true`) สามารถหาชื่อกฎที่ต้องการพร้อมคำอธิบายได้ที่ [Linter](https://dart-lang.github.io/linter/lints/)

หากต้องการ Exclude ไฟล์สามารถทำได้โดยการเพิ่มบรรทัดต่อไปนี้ในไฟล์ `analysis_options.yaml` หลังบรรทัด `include`

    analyzer:
      exclude:
        - file_a.dart
        - lib/folder_a/*.g.dart
        - test/_data/**

นอกจากนี้เรายังสามารถกำหนดระดับความร้ายแรงของแต่ละ Rule ได้โดยการตั้งค่าต่อไปนี้ในไฟล์ `analysis_options.yaml`

    analyzer:
      errors:
        invalid_assignment: warning
        missing_return: error
        dead_code: info
        todo: ignore

โดยแต่ละ Severity level จะมีความหมายดังต่อไปนี้

`ignore` ไม่สนใจ Error นั้น ๆ

**`info`** ปรากฎเป็น Info Message แต่ไม่มีผลต่อการ Compile

**`warning`** ปรากฎเป็น Warning (Aggressive กว่า Info) แต่ไม่มีผลต่อการ Compile

**`error`**ทำให้การ Compile Failed

หากต้องการ Ignore แค่บาง Rule สำหรับบางไฟล์/บางส่วนของโค้ด

- สำหรับไฟล์ เพิ่ม Comment ต่อไปนี้ในไฟล์ที่ต้องการ (ไฟล์นามสกุล `.dart`)

    // ignore_for_file: <rule_name>

- สำหรับบรรทัด เพิ่ม Comment ต่อไปนี้ก่อนหน้าบรรทัดที่ต้องการ หรือบรรทัดเดียวกัน (ไฟล์นามสกุล `.dart`)

    // ignore: <rule_name>

---

หากต้องการศึกษาเพิ่มเติมเกี่ยวกับ Dart Static Analysis สามารถดูเพิ่มเติมได้ที่ [Official Guide](https://dart.dev/guides/language/analysis-options)

---

## *********📚 Hope you enjoy reading! 📚*********

---
