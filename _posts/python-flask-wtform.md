---
title: "Flask: จัดการกับ Form ให้ง่ายขึ้นด้วย Flask WTForm"
slug: python-flask-wtform
date: '2021-01-23T13:35:16.000Z'
tags: Python
coverImage: /assets/blog/python-flask-wtform/cover.jpeg
author:
  name: Pittawat Taveekitworachai
  picture: /assets/blog/authors/pittawat.jpg
ogImage:
  url: /assets/blog/python-flask-wtform/cover.jpeg
---

หากใครที่ได้เริ่มต้นใช้ [Flask](https://flask.palletsprojects.com/en/1.1.x/) ร่วมกับ [Jinja](https://jinja.palletsprojects.com) ซึ่งเป็น Template Engine และต้องจัดการกับ Form คงคุ้นเคยกับ `request.form.get("name")` อะไรประมาณนี้กันเป็นอย่างดี เพื่อเข้าถึงข้อมูลที่ส่งมาจาก Front-end แน่นอว่า เมื่อได้รับข้อมูลมาแล้วเราจะต้องมีการ Validate หรือยืนยันว่าข้อมูลเป็นไปตามรูปแบบที่กำหนดไว้หรือไม่อีกครั้ง ก่อนนำข้อมูลไปจัดการต่อ หากเขียนเป็นขั้นตอนคร่าว ๆ เราจะได้ว่า

1. สร้าง Form ในฝั่ง Front-end เช่น

    <!-- ... -->
    <form action="{{ url_for('parks') }}" method="POST">
    	<label for="name">Your name</label>
    	<input name="name" type="text">
    </form>
    <!-- ... -->

parks.html
2. สร้าง Endpoint ใน Flask

    # ...
    @app.route("/parks", methods=["GET", "POST"])
    def parks():
    	if request.method == "POST":
        	name = request.form.get("name")
        	# Process data
    # ...

main.py
แต่จะเห็นได้ว่าในการสร้าง Endpoint นั้นเรามักจะต้องทำ Pattern ซ้ำ ๆ คือการ Validate ข้อมูลก่อนนำไปใช้ต่อ และอีกสิ่งหนึ่งที่มักนำไปสู่ Error ก็คือการใช้ String ที่เป็นชื่อในการดึงข้อมูลออกมา จะดีกว่ามั้ยถ้าเราสามารถทำสิ่งต่าง ๆ เหล่านี้ให้ดีขึ้นได้ (แอบบอกไว้ตรงนี้เลยว่า ท้ายบทความเรามีโบนัสเล็ก ๆ สำหรับคนที่ใช้ Bootstrap คู่กับ Flask อีกด้วย

---

## Flask WTForm

ปฏิเสธไม่ได้ว่า Form เป็นหนึ่งในเรื่องปวดหัว และ Pain มาก ๆในการเขียนโปรแกรม ไม่ว่าจะเป็นการทำอะไรซ้ำไปซ้ำมา เพื่อดึงข้อมูล ความเยอะของ Form ไหนจะต้องจัดการเรื่องของ Validation อีก นั่นทำให้เราเห็นได้ว่าในหลาย ๆ Programming Language/Frameworks/Libraries มักจะนำเสนอ Solution ต่าง ๆ ไม่ว่าจะโดย Owner เองหรือว่า Community ออกมา

ใน Flask เองก็เช่นกัน เรามี [Flask WTForm](https://flask-wtf.readthedocs.io/en/stable/) ที่จะช่วยให้การจัดการกับ Form ทำได้ง่ายยิ่งขึ้น ด้วยการสร้าง Class ขึ้นมารวมข้อมูลที่เกี่ยวข้องไว้ด้วยกัน รวมถึงการที่มาพร้อมกับ Built-in Validators ที่ทำให้เราเรียกใช้ได้ง่ายอีกด้วย

ขั้นตอนแรกก็คือการ Install เข้าไปใน Project ของเราก่อนด้วย

    $ pip install Flask-WTF

จากนั้นจึง Import เข้ามาในโปรเจค

    from flask_wtf import FlaskForm # 1.
    from wtforms import StringField # 2.
    from wtforms.validators import DataRequired # 3.

main.py
1. โดยบรรทัดแรกเราทำการ Import `FlaskForm` ซึ่งจะต้องเป็น Base Class สำหรับ Extend เพื่อให้ Class ของ Form ที่เรากำลังจะสร้างขึ้นได้ความสามารถต่าง ๆ มา
2. บรรทัดที่ 2 เป็นการ Import ประเภทของ Input Field เข้ามา ซึ่งมีด้วยกันหลากหลายประเภท ดูเพิ่มเติมได้ที่ [Fields](https://wtforms.readthedocs.io/en/2.3.x/fields/)
3. บรรทัดที่ 3 เป็นการ Import Validators ที่ Built-in มากับ WTForm สามารถดูเพิ่มเติมได้ที่ [Validators](https://wtforms.readthedocs.io/en/2.3.x/validators/#built-in-validators)

หลังจากที่ Import เรียบร้อยแล้วเราต้องทำการตั้ง `secrey_key` ให้กับ Flask Application ของเรา เนื่องจาก Flask WTF นั้นมี Built-in สำหรับจัดการ CSRF Token มาให้ด้วย เพื่อให้เราสามารถสร้าง Form ที่ปลอดภัยได้มากยิ่งขึ้น

    app = Flask(__name__)
    app.secret_key = "your-secret-key-should-not-be-here"

ขั้นต่อไป ทุก ๆ ครั้งที่เราต้องการสร้าง Form ขึ้นมา เราจะทำการสร้าง Class สำหรับ Form นั้น ๆ

    class SimpleForm(FlaskForm): # 1.
    	name = StringField(label="Your name", validators=[DataRequired()] # 2.
     

main.py
1. สำหรับ Class ที่ต้องการจะประกาศว่าเป็น Class สำหรับการจัดการข้อมูลที่เกี่ยวกับ Form นั้น ๆ จะต้องมีการ Extends `FlaskForm` เสมอ
2. ในที่นี้ คือการสร้าง Input Field เก็บไว้ในตัวแปร `name` ซึ่งจะถูกใช้สำหรับเข้าถึงข้อมูลต่อไป โดย `name` เป็นประเภท `StringField` ซึ่งเป็น Field สำหรับข้อความ มีการระบุ Label ว่า `"Your name"` ซึ่งจะถูกนำไปใช้ใน `<label></label>` และมีการเพิ่ม Validators โดยที่ตำแหน่งที่ 0 เป็น `DataRequired()` หมายถึงว่า Field นี้จะต้องมีข้อมูลกลับมาด้วยเสมอ

หลังจากที่เราสร้าง Class สำหรับ Form ของเราเรียบร้อยแล้ว ขั้นถัดไปคือการส่ง Form นี้ไปให้ Front-end แสดงผล และจัดการกับข้อมูลที่ได้รับกลับมา โดยเราอาจเขียน Endpoint ของเราได้แบบนี้ ข้อสังเกตเล็กน้อยคือ Endpoint ที่เราสร้างขึ้นมานั้นจำเป็นต้องรองรับ Methods POST สำหรับการส่งค่า Form กลับมา

    @app.route("/parks", methods=["GET", "POST"])
    def parks():
    	simple_form = SimpleForm()
        
        # ...
        
        return render_template("parks.html", form=simple_form)

main.py
และในฝั่งของ Jinja สามารถ Access เข้า Form เพื่อนำมาแสดงผลได้ดังนี้ โดยตั้ง `novalidate` ไว้เพื่อให้เห็นการทำงานของ Flask WTForm ได้ชัดเจนยิ่งขึ้น

    <!-- ... -->
    <form action="{{ url_for('parks') }}" method="POST" novalidate>
    	{{ form.csrf_token }}
    	{{ form.name.label }} {{ form.name(size=20) }}
        <input type="submit">
    </form>
    <!-- ... -->

parks.html
โดยจะได้หน้าตาของ Form เป็นแบบนี้
![](__GHOST_URL__/content/images/2021/01/image-3.png)
ขั้นถัดไปเราจะนำข้อมูลออกมาใช้ โดยใน Function `parks()` เราสามารถจัดการกับ Form ได้ผ่าน `simple_form` ที่เราสร้างขึ้นมา

    @app.route("/parks", methods=["GET", "POST"])
    def parks():
        simple_form = SimpleForm()
        
        # -- ADD --
    
        if simple_form.validate_on_submit():
            name = simple_form.name.data
            print(name)
            # Do something with name
            return redirect(url_for('home'))
        else:
            print("Name is required")
            # OR send some error message to front-end
            
        # -- -- --
    
        return render_template("parks.html", form=simple_form)

จะทำให้เราได้ผลลัพธ์ดังนี้
![](__GHOST_URL__/content/images/2021/01/image-4.png)![](__GHOST_URL__/content/images/2021/01/image-6.png)
และถ้าหากส่งค่าว่างมาจะได้ผลลัพธ์ว่า
![](__GHOST_URL__/content/images/2021/01/image-7.png)
สามารถดูตัวอย่างโค้ดแบบเต็ม ๆ ได้ที่ [GitHub](https://github.com/Pittawat2542/python-flask-wtform)

---

## Bonus! สำหรับผู้ที่ใช้ Flask Bootstrap

สำหรับใครที่ใช้ Bootstrap ในโปรเจคคู่ไปกับ Flask ก็คงมีโอกาสได้ใช้งาน [Flask-Bootstrap](https://pythonhosted.org/Flask-Bootstrap/) ซึ่งต้องบอกว่าเจ้า Package ตัวนี้เกิดมาคู่กับ Flask WTForm จริง ๆ แน่นอว่าถึงเราจะมี Class ที่ Inherit มาจาก FlaskForm มาช่วยเราแล้ว แต่ชีวิตเองก็ไม่ได้ง่ายดายไปซะทั้งหมด เพราะว่า Front-end เรายังคงต้องสร้าง Input ขึ้นมาเองแบบซ้ำ ๆ หรือเราอาจจะเลี่ยงไปใช้ Loop ก็ทำให้โค้ดเราซับซ้อนขึ้นโดยไม่จำเป็น

โดยในไฟล์ Jinja Template `parks.html` ของเราสามารถที่จะสั่ง Import เพิ่มเติม

    {% import 'bootstrap/wtf.html' as wtf %}

parks.html
และเราสามารถแทนที่โค้ดในส่วนนี้

    <form action="{{ url_for('parks') }}" method="POST" novalidate>
    	{{ form.csrf_token }}
    	{{ form.name.label }} {{ form.name(size=20) }}
        <input type="submit">
    </form>

ด้วย

    {{ wtf.quick_form(form) }}

ซึ่งข้อแนะนำเพิ่มเติมคือพอเป็นแบบนี้แล้วปุ่ม Submit ของเราจะหายไป เราสามารถแก้ไขได้ด้วยการใช้ `SubmitField` เริ่มจากการ Import เข้ามาเพิ่มเติม

    from wtforms import StringField, SubmitField

และเพิ่มให้กับ Class `SimpleForm` ของเรา

    class SimpleForm(FlaskForm):
    	name = StringField(label="Your name", validators=[DataRequired()]
        submit = SubmitField(label="Submit")

ก็จะทำให้เราได้ปุ่ม Submit ของเรากลับมา
![](__GHOST_URL__/content/images/2021/01/image-8.png)
สามารถดูโค้ดแบบเต็ม ๆ ได้ที่ [GitHub](https://github.com/Pittawat2542/python-flask-wtform/tree/bootstrap)

---

## **********📚 Hope you enjoy reading! 📚**********

---
