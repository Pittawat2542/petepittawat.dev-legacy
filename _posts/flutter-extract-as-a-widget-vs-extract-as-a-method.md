---
title: "Flutter: Extract as a Widget VS Extract as a Method ใช้แบบไหนดีนะ?"
slug: flutter-extract-as-a-widget-vs-extract-as-a-method
date: '2020-08-15T12:57:37.000Z'
tags: Flutter
---

เป็นเรื่องปกติในการเขียนโปรแกรมที่เรามักจะพยายามรักษาให้โค้ดของเรานั้นเป็นระเบียบอยู่เสมอ ซึ่งเราก็มักจะใช้หลากหลายวิธีเข้ามาช่วย ไม่ว่าจะเป็นการสร้าง เมธอดหรือฟังก์ชัน (Method/Function) เพื่อแยกส่วนของโค้ดที่เรามักใช้เป็นประจำและสมเหตุสมผลที่จะแยกออกมา หรือจะเป็นการแยกไฟล์เพื่อแบ่งโค้ดส่วนที่ไม่เกี่ยวข้องออกไป และทำให้การค้นหาและจัดการโค้ดสามารถทำได้สะดวกสบายมากยิ่งขึ้น

ใน Flutter เอง เราก็มักจะพบ 2 วิธีหลัก ๆ ที่เรามักใช้กันในการสร้างความเป็นระเบียบของวิดเจ็ตทรี (Widget tree) ของเรานั่นคือ การแยกส่วนของโค้ดออกเป็นวิดเจ็ต (Extract as a Widget) และการแยกส่วนของโค้ดออกเป็นเมธอด (Extract as a Method) แน่นอนว่าทั้งสองแบบนั้นต่างช่วยให้เราสามารถนำโค้ดไปใช้ซ้ำได้ (Reusable code) แต่ควรจะใช้แบบไหนเมื่อใด และมีอะไรที่ต้องคำนึงถึงบ้าง บทความนี้จะพาไปตอบคำถามนั้น

---
![](https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=2000&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ)Photo by [Alina Grubnyak](https://unsplash.com/@alinnnaaaa?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit) / [Unsplash](https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit)
## สเตทเกี่ยวข้อง (Related States)

ปัจจัยแรกที่ต้องคำนึงถึง คือ เรื่องของสเตทว่าส่วนของวิดเจ็ตทรีนั้น ๆ มีสเตทเข้ามาเกี่ยวข้องด้วยหรือไม่ หากมีแล้วสเตทนั้น ๆ เกี่ยวข้องและจำเพาะเจาะจงสูงกับวิดเจ็ตส่วนั้น ๆ หรือไม่ หากใช่ การแยกส่วนออกไปเป็นวิดเจ็ตของตัวเองนั้น ถือเป็นทางเลือกที่น่าสนใจ เนื่องจากเรานั้นอาจสามารถนำวิดเจ็ตนั้นไปใช้ซ้ำได้อีกในกรณีอื่น ๆ ตัวอย่างในกรณีนี้มักเป็นวิดเจ็ตที่เกี่ยวข้องการส่วนติดต่อผู้ใช้งาน (User Interface Widget) ที่มีความทั่วไป เช่น การ์ด (Card) ในแบบที่จำเพาะกับแอปของเรา

แต่หากว่าสเตทที่เกี่ยวข้องนั้นมีความเชื่อมโยงกับสเตทอื่น ๆ ภายในวิดเจ็ตหลัก (Parent Widget) สูง เราก็อาจพิจารณาแยกส่วนออกมาเป็นเมธอดแทน โดยหากต้องการความสามารถที่เมธอดจะสามารถปรับบางส่วนของวิดเจ็ตที่เป็นผลลัพธ์ (Output) เราก็อาจอาศัยการส่งผ่านแอตทริบิลท์ (Attribute) เข้ามาในเมธอด เพื่อเปลี่ยนรูปร่างหน้าของวิดเจ็ต หรือลบ/เพิ่มวิดเจ็ตบางตัวไปในผลลัพธ์

ประเด็นที่น่าสนใจหลังจากที่เราแยกโค้ดส่วนนั้น ๆ ออกมาเป็นวิดเจ็ตหรือเมธอดแล้ว ก็คือเรื่องของการที่เราจะยังวางวิดเจ็ตหรือเมธอดนั้น ๆ ไว้ในไฟล์เดิมหรือไว้ในไฟล์แยกดี ในส่วนนี้อาจจะพิจารณาได้ไม่ยากนัก ด้วยการคำนึงถึงเรื่องของ Dependency ที่วิดเจ็ตหรือเมธอดนั้น ๆ มีต่อกัน รวมไปถึงความน่าจะเป็นที่ส่วนนั้น ๆ อาจสามารถนำไปใช้ซ้ำได้ในส่วนอื่น ๆ อีกด้วย

โดยหากมีความเกี่ยงข้องกันน้อย (Light-dependent) และมีความเป็นไปได้ในการนำโค้ดไปใช้ซ้ำในส่วนอื่น ๆ เราก็ควรที่แยกออกมาเป็นอีกไฟล์หนึ่ง เพื่อให้ส่วนอื่น ๆ สามารถเรียกใช้ได้ง่ายยิ่งขึ้น แต่ถ้าไม่ก็สามารถคงไว้ในไฟล์เดียวกันได้

อีกหนึ่งปัจจัยที่อาจนำมาคำนวณ คือ เรื่องของความยาวของไฟล์ในขณะนั้นว่ายาวไปแล้วหรือไม่ที่จะส่งผลให้การเนวิเกต (Navigate) ในโค้ดนั้นมีความลำบากมากเกินไป แต่อย่างไรก็ตามปัจจัยนี้นั้นก็ขึ้นกับข้อตกลงภายในทีมนั้น ๆ ด้วยเช่นกัน

---
![NREL Thermochemical Process/ Control Engineer and Research Technician work during a 48 hour Hot Test in Thermochemical User Facility Pilot Plant in the Field Test Laboratory Building (FTLB).](https://images.unsplash.com/photo-1574689049868-e94ed5301745?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=2000&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ)Photo by [Science in HD](https://unsplash.com/@scienceinhd?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit) / [Unsplash](https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit)
## ความสามารถในการบำรุงรักษา (Maintainability)

สำหรับประเด็นนี้นั้น จะเป็นเรื่องของการสื่อสารของโค้ดว่าโค้ดในปัจจุบันของเราที่ยังไม่มีการปรับปรุง (Refactor) นั้นมีความยากง่ายในการอ่านและเนวิเกต (Readability and Ease to Navigate) เป็นอย่างไรบ้าง 

หนึ่งในวิธีที่มักพบเห็นได้บ่อย คือ การแยกส่วนของโค้ดภายในวิดเจ็ตเดียวกันออกมาเป็นหลาย ๆ เมธอด และตั้งชื่อเมธอดนั้น ๆ ให้สื่อความหมาย เช่น เราอาจแยกส่วนของวิดเจ็ตการ์ด (Card widget) ที่มีความซับซ้อนสูงออกเป็นหลาย ๆ เมธอด เช่น `_buildCardHeader` และ `_buildCardBody` โดยเราอาจสามารถแยกออกมาเป็นเมธอดเพิ่มเติมได้อีก เช่น เราอาจแยกวิดเจ็ตบางส่วนใน `_buildCardHeader` ออกเป็น `_buildCardTitle` และ `_buildCardSubtitle`

ซึ่งจะแยกออกไปมากแค่ไหนนั้นก็ควรคำนึงถึงความคุ้มค่าที่การออกไปเป็นเมธอดนั้นทำให้โค้ดอ่านง่ายขึ้น แต่ยังคงไว้ซึ่งความง่ายในการเนวิเกตภายในโค้ดด้วยเช่นกัน

---
![More shots like this on my instagram pages 
- https://instagram.com/motivational.coder
- https://instagram.com/grohsfabian](https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=2000&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ)Photo by [AltumCode](https://unsplash.com/@altumcode?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit) / [Unsplash](https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit)
## โครงสร้างของโค้ดและวิธีการจัดการสเตท (Code Structure and State Management)

อีกหนึ่งสิ่งที่ต้องคำนึงถึง คือ เรื่องของโครงสร้าง หรือสถาปัตยกรรม (Architecture) ของโค้ดว่าโดยหลักการพื้นฐานและข้อตกลงภายในทีมแล้วนั้นตกลงกันไว้อย่างไร ซึ่งเรื่องนี้นั้นจะมีผลกระทบมาจากวิธีในการจัดการสเตทภายในแอปพลิเคชันด้วย เนื่องจากบางวิธีที่ใช้ในการจัดการสเตทนั้นอาจจะกึ่งบังคับการจัดการโครงสร้างของโค้ดไปด้วยภายในตัว ก็ถือเป็นอีกหนึ่งปัจจัยที่ต้องนำมาพิจารณาเช่นกัน

บางโครงสร้าง บางสถาปัตยกรรม อาจจะเหมาะกับการแยกออกเป็นวิดเจ็ดมากกว่าเมธอด บางวิธีอาจจะไม่

---
![Team work, work colleagues, working together](https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=2000&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ)Photo by [Annie Spratt](https://unsplash.com/@anniespratt?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit) / [Unsplash](https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit)
## แนวทางปฏิบัติของทีม (Team Guideline)

สำหรับปัจจัยสุดท้ายนั้น ถือเป็นข้อที่สำคัญที่สุด นั่นคือทีมของเรานั้นตกลงกันอย่างไรบ้างในการจัดการโค้ด เช่น ทีม A อาจจะอยากแยกออกเป็นเมธอด ซึ่งเราก็ไม่ควรที่จะขัดหลักปฏิบัตินั้น เพื่อให้โค้ดไปในทิศทางเดียวกัน แน่นอนว่าเรื่องนี้เกี่ยวข้องกับโค้ดที่มีอยู่แล้ว (Legacy Code) ด้วยเช่นกัน หลักพื้นฐานที่สุด คือ ใช้วิธีเดียวกับโค้ดที่มีอยู่แล้ว เพื่อไม่ให้โค้ดเบส (Codebase) ของเรานั้นเต็มไปด้วยหลากหลายรูปแบบ (Coding Style) ซึ่งจะส่งผลให้บำรุงรักษา (Maintain) ได้ยากมากขึ้นในภายหลัง

---

## ********************************************************************************************************************************📚 Hope you enjoy reading! 📚********************************************************************************************************************************

---