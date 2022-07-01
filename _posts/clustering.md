---
title: K-Means Clustering VS Hierarchical Clustering สองอย่างนี้ต่างกันยังไง
slug: clustering
date: '2020-10-31T09:28:06.000Z'
tags: AI, Data Science
---

สำหรับ Unsupervised Learning แล้ว เราคงหนีไม่พ้นการทำ Clustering เพื่อหากลุ่มตามธรรมชาติของข้อมูล ซึ่งทำให้เราสามารถเข้าใจและได้ Insight ใหม่ ๆ จากข้อมูลเหล่านั้น ตัวอย่างในการทำ Clustering ที่เรามักพบเห็นได้บ่อยก็จะเป็น K-Means Clustering และ Hierarchical Clustering ซึ่งทั้งสองตัวนั้นทำงานอยู่บนพื้นฐานของ Proximity Value 

แต่ว่าจริง ๆ แล้วทั้งสองแบบนั้นทำงานแตกต่างกันอย่างไร วันนี้เราจะดูกันถึงการทำงาน เพื่อให้เราเข้าใจ Blackbox ของการทำ Clustering ทั้งสองแบบ ซึ่งออกมาเป็นโค้ดเพียงไม่กี่บรรทัดเท่านั้น 

---

## K-Means Clustering
![](https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=2000&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ)Photo by [Vanessa Bucceri](https://unsplash.com/@vbcreative?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit) / [Unsplash](https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit)
สำหรับ K-Means Clustering นั้นเป็นรูปแบบการ Clustering ที่เกี่ยวข้องกับ Centroid หรือจุดศูนย์กลางของกลุ่ม ซึ่งเป็นตัวแทนของกลุ่มนั้น ๆ โดย K-Means Clustering จะพยายามหาจุดศูนย์กลางทั้งหมด K จุด ซึ่งแต่ละจุดพยายามให้ได้ค่าผิดพลาด (Error) น้อยที่สุด เราสามารถวัดประสิทธิภาพของการแบ่งกลุ่มได้จาก Variance ซึ่งประกอบไปด้วยสองประเภทนั่นคือ Intra-cluster variance และ Inter-cluster variance

สำหรับ Intra-cluster variance นั้นเป็นค่าที่ใช้วัดว่าจากจุด Centroid ถึงข้อมูลจุดอื่น ๆ ในกลุ่มของ Centroid นั้น ๆ ห่างกันมากแค่ไหน โดยทั่วไปเรามักจะใช้ Sum Squared Error (SSE) ในการวัดกัน ค่านี้นั้นเราต้องการให้น้อย ๆ เพราะนั่นหมายความว่าจุด Centroid ที่เราหามาได้นั้นมีประสิทธิภาพที่ดี และทำให้ข้อมูลกระจุกรวมกัน (Dense)

สำหรับ Inter-cluster variance เป็นค่าที่บอกระยะห่างระหว่างแต่ละกลุ่มของข้อมูล โดยอาจใช้ระยะห่างระหว่างแต่ละ Centroid ในการคำนวณก็ได้ โดยเราต้องการให้ค่านี้มาก ๆ เพราะนั่นหมายความว่า แต่ละกลุ่มข้อมูลนั้นมีโอกาส Overlap กันน้อยลง
![](__GHOST_URL__/content/images/2020/10/image-1.png)Image from https://en.wikipedia.org/wiki/K-means_clustering#/media/File:K-means_convergence.gif
สำหรับการทำงานของ K-Means นั้นเราจำเป็นต้องระบุค่า K หรือจำนวนกลุ่มของข้อมูลที่เราคาดการณ์ว่าจะมี โดยค่านี้อาจจะมาจากการนำไปใช้งานต่อ เช่น ฝ่ายการตลาดอาจต้องการข้อมูลจำนวน 3 กลุ่มเพื่อแบ่งระดับ Tier ของลูกค้า หลังจากเราระบุค่า K แล้ว Algorithm จะเริ่มต้นโดยการ

1. สุ่ม Centroid มาทั้งหมด K จุด
2. แต่ละ Data point จะทำการ คำนวณหา Proximity ถึงจุด Centroid ทุกจุด
3. หลังจาก Data point รู้ระยะห่างแล้ว Data Point จะทำการ Assign ตัวเองเป็นสมาชิกของกลุ่มของ Centroid ที่ใกล้ที่สุด (Distance น้อยที่สุด)
4. หลังจากเสร็จสิ้นทุก Data Points จะทำการ Re-calculate Centroid ใหม่ โดยการหาค่ากึ่งกลาง เช่น ค่าเฉลี่ย ของสมาชิกทุกคนตัวในกลุ่มนั้น ๆ
5. หลังจากได้ Centroid ใหม่ทั้งหมด จะทำขั้นตอนที่ 1-4 ไปเรื่อย ๆ โดย Algorithm จะ Track รอบก่อนหน้าไว้ เพื่อพิจารณาว่าจะสิ้นสุดเมื่อใด
6. Algorithm จะสิ้นสุดเมื่อรอบปัจจุบันและรอบก่อนหน้าไม่มีการเปลี่ยนแปลงแล้ว

อย่างไรก็ตามวิธีนี้จะเห็นได้ว่าเราต้องทำการระบุ K ลงไปก่อน หากเราไม่รู้ K หรือต้องการเปลี่ยน K ก็จะต้องทำการคำนวณใหม่ทั้งหมด รวมไปถึง K-Means จะผลกระทบจากรูปทรงของ Cluster อีกด้วย เนื่องจาก Cluster ของ K-Meas นั้นมีลักษณะเป็นทรงกลม ทำให้หากข้อมูลมาในลักษณะอื่น ๆ ที่ยากต่อการแบ่งตามทรงกลมก็จะทำให้ได้ผลลัพธ์ที่ไม่ดีนัก อย่างไรก็ตามเราอาจหลีกเลี่ยงโดยการเพิ่มขนาดของ K เพื่อแบ่งเป็นกลุ่มย่อย ๆ ให้เหมาะกับรูปทรงอื่น ๆ แทน

---

## Hierarchical Clustering
![](https://images.unsplash.com/photo-1445294211564-3ca59d999abd?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=2000&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ)Photo by [Adarsh Kummur](https://unsplash.com/@akummur?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit) / [Unsplash](https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit)
Hierarchical Clustering เป็นการแบ่งกลุ่มข้อมูลในลักษณะของแผนผังต้นไม้ โดยเราเรียกผลลัพธ์ที่ได้จากการแบ่งแบบนี้ว่า Dendrogram โดย Dendrogram นั้นจะบอกเราว่าข้อมูลที่มีลักษณะคล้ายกันมากกว่าจะถูกจับกลุ่มอยู่ด้วยกันก่อน
![Dendrogram](__GHOST_URL__/content/images/2020/10/image.png)Image from https://en.wikipedia.org/wiki/Dendrogram#/media/File:Global-Diversity-of-Sponges-(Porifera)-pone.0035105.s008.tif
จะเห็นได้ว่าการแบ่งกลุ่มแบบนี้นั้นจะมีลักษณะที่ค่อนข้าง Flexible มากกว่า เพราะหลังจากแบ่งกลุ่มเสร็จสิ้น เราสามารถตัดสินใจเลือกจำนวน K หรือจำนวนของกลุ่มได้ทีหลัง

Hierarchical Clustering นั้น เราสามารถแบ่งออกได้เป็นสองแบบหลัก ๆ นั่นคือ Agglomerative และ Divisive ซึ่งในที่นี้ขอกล่าวถึง Agglomerative เท่านั้น

การทำงานของ Hierarchical Clustering นั้นจะเริ่มต้นโดยการสร้าง Proximity Matrix ซึ่งเป็น Matrix ที่ Proximity ระหว่างข้อมูลแต่ละจุด ไปหาทุกจุด หลังจากที่เราได้ Matrix มาแล้ว Algorithm จะทำการหา Pair ที่มีค่าที่บ่งบอกว่าสองจุดนั้นใกล้เคียงกันมากที่สุด และทำการ Merge เข้าด้วยกัน หลังจากนั้นจะทำการอัปเดต Proximity Matrix ใหม่ ซึ่งมีบางสมาชิกที่ถูก Merge แล้ว

ตรงนี้อาจเกิดข้อสงสัยว่าเราจะสามารถคำนวณหา Proximity ระหว่าง Subcluster หรือกลุ่มระหว่างทางที่ถูก Merge เข้าด้วยกันได้อย่างไรบ้าง ตรงนี้เรามีด้วยกันหลากหลายวิธีในการวัดค่า เช่น

1. Single-link (MIN) - สำหรับวิธีนี้นั้นเราจะทำการเลือก Proximity ที่มีค่าน้อยที่สุด โดยพิจารณาจาก Pair ของสมาชิกแต่ละตัวใน Subcluster 1 และ Subcluster 2 เช่น หากเรามี 2 subclusters เป็น (A, B) และ (C, D, E) เราจะทำการหา Proximity ของ A-C, A-D, A-E, B-C, B-D, B-E และพิจารณาค่าที่น้อยที่สุด
2. Complete-link (MAX) - สำหรับวิธีนี้นั้นเราจะทำการเลือก Proximity ที่มีค่ามากที่สุด โดยพิจารณาจาก Pair ของสมาชิกแต่ละตัวใน Subcluster 1 และ Subcluster 2
3. Average-link (Average) - สำหรับวิธีนี้นั้นเราจะหา Proximity ระหว่างทุกสมาชิกระหว่าง Subclusters แล้วทำการหาค่าเฉลี่ย
4. Centroid - สำหรับวิธีนี้นั้นเราจะ Centroid เพื่อเป็นตัวแทนของแต่ละ Subcluster และวัด Proximity ระหว่าง Centroid

นอกจากนี้ยังมีวิธีอื่น ๆ ที่มีความซับซ้อนขึ้นไปอีกเช่นกัน ข้อควรระวังที่อาจทำให้เข้าใจผิดคือทั้ง 4 วิธีที่กล่าวไว้ข้างต้นนั้นเป็นวิธีในการเลือกค่า Proximity ระหว่าง Subclusters เท่านั้น ซึ่งหลังจากที่ Proximity Matrix ถูกอัปเดตเสร็จเรียบร้อยแล้วนั้น Algorithm จะยังคงเลือกค่าที่ให้ผลลัพธ์ว่าระหว่าง Subcluster เหล่านั้นใกล้เคียงกันมากที่สุดเช่นเดิม
![](__GHOST_URL__/content/images/2020/10/image-2.png)Image from https://en.wikipedia.org/wiki/Hierarchical_clustering#/media/File:Hierarchical_clustering_simple_diagram.svg
โดยสรุปสำหรับ Hierarchical Clustering

1. ทำการสร้าง Proximity Matrix ซึ่งเป็นค่า Proximity ของทุกสมาชิก
2. Merge สองสมาชิก (Subcluster) ที่มีความใกล้เคียงกันมากที่สุด
3. อัปเดต Proximity Matrix ใหม่ที่มีสองสมาชิกนั้นแล้ว
4. ทำ 1-3 ซ้ำจนกว่าเราจะรวมทุกสมาชิกเข้าด้วยกันเป็น Cluster เดียว (เหลือสมาชิกเดียวบน Proximity Matrix) หรือเหลือจำนวนสมาชิกตามที่เราตั้งค่าไว้

โดยผลลัพธ์สุดท้ายนั้นเราจะได้สิ่งที่เรียกว่า Dendrogram ออกมา และสามารถนำไปใช้ต่อได้

---

โดยรวม เราสามารถเห็นได้ว่า K-Means นั้นมีลักษณะเป็น Top-down Approach กล่าวคือ เรากำหนดจำนวน Cluster ที่แน่นอนไว้แล้วค่อยมาหาสมาชิกเข้า Cluster แตกต่างจาก Hierarchical ที่มีลักษณะเป็น Bottom-up มากกว่า โดยค่อย ๆ Merge กลุ่มที่มีความคล้ายกันเข้าเรื่อย ๆ เพื่อสร้างกลุ่มที่ใหญ่มากขึ้น
![Looking Up](https://images.unsplash.com/photo-1523287562758-66c7fc58967f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=2000&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjExNzczfQ)Photo by [Razvan Chisu](https://unsplash.com/@nullplus?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit) / [Unsplash](https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit)
ในการทำ Clustering นั้น เรามักจะตั้งชื่อให้แต่ละ Cluster ผลลัพธ์ที่เราได้ออกมาเพื่อให้นำไปใช้งานต่อได้ง่าย นอกจากนี้เราอาจคำนวณค่าต่าง ๆ เพื่อให้เราสามารถทำความเข้าใจ Cluster ได้ดียิ่งขึ้นอีกด้วย นอกจาก 2 clustering algorithms ที่กล่าวไว้ข้างต้นนั้น ยังมี Algorithm อื่น ๆ อีกมากมายที่น่าสนใจ เช่น Fuzzy Clustering, Affinity Propagation, Gaussian Mixture Model โดยแต่ละแบบก็มีความเหมาะสมแตกต่างกันไป แน่นอนว่าในโลกของการพัฒนา AI, Data Science Solution นั้น เราไม่มี Silver Bullet หากแต่เป็นลักษณะของการเลือกใช้สิ่งที่เหมาะสมที่สุดสำหรับปัญหา และชุดข้อมูลนั้น ๆ มากกว่า

---

## ***📚 Hope you enjoy reading! 📚***

---
