---
title: "Flutter: bloc และ flutter_bloc v5 มาแล้ว!"
slug: flutter-bloc-flutter-bloc-v5
date: '2020-07-07T12:09:33.000Z'
tags: Flutter, News
coverImage: /assets/blog/flutter-bloc-flutter-bloc-v5/cover.jpeg
author:
  name: Pittawat Taveekitworachai
  picture: /assets/blog/authors/pittawat.jpg
ogImage:
  url: /assets/blog/flutter-bloc-flutter-bloc-v5/cover.jpeg
---

หลาย ๆ คนที่เลือก BLoC เป็นแนวทางในการ Manage State ภายใน Application คงหนีไม่พ้นที่จะต้องใช้ Packages `bloc` และ `flutter_bloc` ซึ่งช่วยให้เรามี Boilerplate code ลดลง โดยตอนนี้ bloc ก็ได้มีการอัพเดทครั้งใหญ่ (Major version update) เป็นเวอร์ชัน 5 เป็นที่เรียบร้อย ในบทความนี้จะพาทุกคนไปดูกันว่ามีการเปลี่ยนแปลงอะไรบ้าง

---

## Hello cubit!

โดยการเปลี่ยนแปลงที่สำคัญที่สุด ก็คือตอนนี้ `bloc` และ `flutter_bloc` base อยู่บน `cubit` ซึ่งเป็น State management package ตัวใหม่ที่ทางผู้พัฒนาเดิม หรือคุณ 
Felix Angelov ได้พัฒนาขึ้นมา โดย `cubit` เป็น Lighweight state management ที่ไม่ได้ใช้ `Event` แล้วใช้งานผ่าน Method แทน หรือเราอาจกล่าวได้ว่า `cubit` นี้เปรียบเสมือน Core ของ State Management ซึ่งส่วนตัวเดาว่าทางคุณ Felix แยกออกมาเพื่อให้พัฒนาได้ง่ายยิ่งขึ้น รวมไปถึงกรณีของคนไม่กล้าลองใช้ `bloc` เพราะต้องทำความเข้าใจในเรื่องของ `Event` นั่นเอง

---

## Goodbye initialState

นอกจากนี้ใน `bloc` เวอร์ชันที่ 5 ยังได้มีการเปลี่ยนแปลงรูปแบบใหม่โดยลบ `initialState` ซึ่งมาพร้อมกับทุก Class ที่ Inherit `Bloc` ออกไป แล้วเปลี่ยนให้เรากำหนด Initial State ผ่าน Superclass Constructor แทน

    class SomeBloc extends Bloc<SomeEvent, SomeState> {
      SomeBloc() : super(InitialState());
    
      @override
      Stream<int> mapEventToState(SomeEvent event) async* {
    
      }
    }

ซึ่งในกรณีนี้ก็ทำให้ Getter ที่ชื่อ initialState ที่มาพร้อมกับ Class หายไปด้วยนั่นเอง

---

## No more BlocSupervisor

`BlocSupervisor` Widget ขวัญใจของหลาย ๆ คน ที่มักใช้ในการเพิ่ม `BlocDelegate` โดยเฉพาะคนที่พึ่งเริ่มต้นเรียนรู้ BLoC ใหม่ ๆ เพื่อ Log state และ event ออกมาทั้งหมดก็ได้หายไปแล้ว นอกจากนี้ `BlocDelegate` ยังถูกเปลี่ยนชื่อเป็น `BlocObserver` อีกด้วย เพื่อความชัดเจนที่มากยิ่งขึ้น โดยคนที่ต้องการใช้ `BlocObserver` ก็สามารถเรียกใช้ได้อย่างตรงไปตรงมามากยิ่งขึ้น

    class SomeBlocObserver extends BlocObserver {
      @override
      void onTransition(Bloc bloc, Transition transition) {
        print(transition);
        super.onTransition(bloc, transition);
      }
    }
    
    void main() {
    	// ...
        Bloc.observer = SomeBlocObserver();
        // ...
    }

---

## flutter_bloc

สำหรับ `flutter_bloc` นั้น ก็มีการเปลี่ยนชื่อของ Properties บางส่วนให้มีความชัดเจนมากยิ่งขึ้น ได้แก่

`condition` ใน `BlocBuilder` เปลี่ยนเป็น `buildWhen`

`condition` ใน `BlocListener` เปลี่ยนเป็น `listenWhen`

---

ส่วนการเปลี่ยนแปลงอื่น ๆ นั้นก็มีการแก้บัคทั่วไป รวมไปถึงการเปลี่ยนโลโก้ใหม่ให้สวยงามมากยิ่งขึ้น สำหรับใครที่อยากอ่านการเปลี่ยนแปลงฉบับเต็มก็สามารถตามไปได้ที่ [[b](https://github.com/felangel/bloc/blob/master/packages/bloc/CHANGELOG.md)loc](https://github.com/felangel/bloc/blob/master/packages/bloc/CHANGELOG.md) และ [flutter_bloc](https://github.com/felangel/bloc/blob/master/packages/flutter_bloc/CHANGELOG.md)

---

## ********************************📚 Hope you enjoy reading! 📚********************************

---
