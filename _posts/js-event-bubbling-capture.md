---
title: "JS: Event Bubbling and Capture"
slug: js-event-bubbling-capture
date: '2021-03-13T15:11:06.000Z'
tags: JavaScript, Web
coverImage: /assets/blog/js-event-bubbling-capture/cover.jpeg
author:
  name: Pittawat Taveekitworachai
  picture: /assets/blog/authors/pittawat.jpg
ogImage:
  url: /assets/blog/js-event-bubbling-capture/cover.jpeg
---

Event ถือได้ว่าเป็นหนึ่งในหลักสำคัญสำหรับการเขียนโปรแกรมด้วยภาษา JavaScript สำหรับการทำงานกับ Browser เพราะ Event ทำให้เราสามารถสร้าง Event handler (callback) สำหรับทำงานเมื่อมี Event ที่เราสนใจเกิดขึ้นนั่นเอง

อย่างไรก็ตามยังมีอีกหนึ่งหลักการที่อาจไม่ได้พบได้โดยทั่วไป แต่หากเจอก็อาจสร้างความสนุกสนานการในการจัดการและพยายามทำความเข้าใจในสิ่งที่เกิดขึ้นก็ได้ นั่นก็คือ Event Bubbling and Capture นั่นเอง ซึ่งเป็นเป็น 2 mechanisms ที่ทำงานร่วมกันสำหรับเหตุการณ์ที่เรามีการ Listen ที่ Event **ชนิดเดียวกัน**ที่ **Element เดียวกัน** ดังเช่นเหตุการณ์ต่อไปนี้

สำหรับโค้ดของ HTML นั้นก็จะเป็นดังต่อไปนี้ โดยมีเพียงปุ่มเดียวใน `div` ที่มี id เป็น `outer-box`

    <div id="outer-box">
      <button>Click me!</button>
    </div>

พร้อม CSS ที่เปลี่ยนสี Background เพื่อให้มองได้เห็นชัดเจนยิ่งขึ้น

    #outer-box {
      background: #aec6cf;
      padding: 2rem;
    }
    
    button {
      background: white;
      border: none;
      border-radius: 1rem;
      font-size: 1rem;
      padding: 0.5rem 0.7rem;
    }
    
    button:hover {
      background: black;
      color: white;
    }

ส่วนสิ่งที่น่าสนใจจริง ๆ ก็คือ JavaScript นั่นเอง

    const button = document.querySelector("button");
    const outerBox = document.getElementById("outer-box");
    
    outerBox.addEventListener("click", event => {
      alert("OuterBox clicked!");
    });
    
    button.addEventListener("click", event => {
      alert("Button clicked!");
    });

โดยสำหรับโค้ด JavaScript นั้นเราได้ทำการ register event handler ไว้สองตัว โดยตัวแรกผูกไว้กับ `outerBox` ที่เมื่อคลิกแล้วจะ `alert` ออกมาว่า OuterBox clicked! และปุ่มภายใน `div` ที่เมื่อคลิกแล้วจะ `alert` ว่า Button clicked!

โดย Expected behavior ก็คือเมื่อเราคลิกที่ Area ใน `div` ยกเว้นตรงส่วนปุ่มจะ `alert` เป็น OuterBox clicked! และเมื่อคลิกที่ปุ่มจะ `alert` เป็น Button clicked! แต่สิ่งที่เกิดขึ้นคือเมื่อคลิกที่ปุ่มแล้ว เราจะได้ `alert` ออกมาทั้งสองอัน ทั้ง Button clicked! และ OuterBox clicked! นี่มันเกิดอะไรขึ้น!? ทำไม OuterBox clicked! ถึงออกมาด้วย แล้วเราจะแก้ยังไงดี?

คำตอบของเรื่องนี้ต้องกลับไปทำความเข้าใจการทำงานของ Event Bubbling และ Event Capturing นั่นเอง

---

## Event flow ยังไงนะ?

เมื่อมี Event เกิดขึ้น สิ่งที่ Browser จะทำก็จะแบ่งออกย่อย ๆ เป็นสองเฟสนั่นคือ Bubbling phase และ Capturing phase เนื่องด้วย Browser สมัยใหม่ ๆ นั่นจะมีแนวคิดว่า Element ตัวเดียวกัน อาจมีคนมา register เพื่อคอยฟัง Event ชนิดเดียวกันหลายคนก็เป็นได้ ดังเช่นในตัวอย่างข้างบนนั่นเอง

ใน Bubbling phase นั้น Browser จะทำการเช็ค element ตัวที่เป็นคน fire event ว่าการ Register event ชนิดนี้ไว้สำหรับ bubbling phase หรือไม่หากมีก็จะทำการรัน แล้ว move on ไป element ถัดไปที่เป็น ancestor โดยตรงและเช็คแบบเดียวกันไปเรื่อย ๆ จนกว่าจะถึง element root ancestor (`<html>`) *=> innermost to outermost*

ส่วนใน Capturing phase นั้น Browser จะทำการเช็คดูว่า element root ancestor (โดยทั่วไปจะเป็น `<html>` นั้นมีการ register event ชนิดนี้สำหรับ capturing phase อยู่หรือไม่ (ในที่นี้คือ `click`) หากมีก็จะทำการรันหากมี แล้ว move on ไปยัง element ถัดไปที่เป็น Ancestor ของ element ที่ถูกคลิกแล้วเช็คและทำแบบเดียวกันจนถึงตัวที่ถูกคลิก *=> outermost to innermost*

ซึ่งสำหรับ Browser ในยุคปัจจุบันแล้วโดย default แล้ว event จะถูก register สำหรับ bubbling phase ทั้งหมด (หากว่ามีสำหรับทั้งสองประเภทแล้ว จะเริ่มจากรัน capturing phase ก่อนตามด้วย bubbling phase)

โดยเราสามารถสั่งให้ event listener นั้น ๆ ทำงานแบบ capturing ได้ด้วยการเพิ่ม parameter ตัวที่ 3 (ถัดจาก eventType, event handler function) เป็น `true` ได้เลย

และนี่ก็คือเหตุผลว่าทำไมโค้ดตัวอย่างข้างต้นจึงมีผลลัพธ์แบบที่เราเห็นนั่นเอง เพราะว่าเมื่อเราคลิกที่ปุ่มแล้ว event handler ที่ผูกไว้กับปุ่มจะ fire ก่อนแล้วขยับไปยัง next ancestor ก็คือ `div` นั้นเองซึ่งก็ดันไปมี event handler สำหรับ `click` event เช่นเดียวกันทำให้ถูกรันด้วยนั่นเอง

---

## แล้วแก้ปัญหานี้ยังไงดี?

เราสามารถแก้ปัญหานี้ได้ด้วยการใช้คำสั่ง `event.stopPropagation()` เพื่อหยุด เพื่อไม่ให้พฤติกรรมในการส่งต่อ event (propagate) ขึ้นไปนั่นเอง

    const button = document.querySelector("button");
    const outerBox = document.getElementById("outer-box");
    
    outerBox.addEventListener("click", event => {
      alert("OuterBox clicked!");
    });
    
    button.addEventListener("click", event => {
      event.stopPropagation();
      alert("Button clicked!");
    });

ซึ่งจะเห็นได้ว่าพฤติกรรมแปลก ๆ ก็ได้หายไปแล้ว และทำงานตามที่เราตั้งใจไว้แล้วนั่นเอง

---

## Extra: Event delegation

สำหรับคอนเซปเรื่อง Bubbling ทำให้เรารู้ว่า Browser จะทำการเช็คและรัน event handler หลายตัว ทำให้เราสามารถทำบางอย่างที่น่าสนใจได้ด้วยไอเดียของ Event delegation ซึ่งเป็นไอเดียที่เรามี child element ที่มีพฤติกรรมเดียวกันเมื่อเกิด event ขึ้น แทนที่เราจะผูก event hanlder ไว้กับ child element ทุกตัว ซึ่ง waste memory เราก็อาจเลือกที่จะผูกกับ parent element แทน ซึ่งเมื่อ child element มี event เกิดขึ้นก็จะขยับไปเรียกที่ parent element นั่นเอง โดยไม่ต้องเป็นกังวลไปว่าแล้วเราจะ access element ที่เป็นคน fire event ได้ยัง เพราะ browser ยังคงใส่ element ที่เกิด event ขึ้นไว้ใน `event.target` ให้เราเช่นเดิม เช่น ในตัวอย่างนี้ที่เราสามารถ toggle สีน้ำเงินได้อย่างถูกต้อง แต่ผูก event handler เพียงครั้งเดียว

---

สำหรับผู้ที่สนใจสามารถศึกษาเพิ่มเติมได้ที่ [Event bubbling and capture | MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture) และ [Event Delegation](https://davidwalsh.name/event-delegate)

---

## ************************************************************************📚 Hope you enjoy reading! 📚************************************************************************

---
