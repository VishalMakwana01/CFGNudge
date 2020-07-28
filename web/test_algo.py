from flask import Flask, render_template, request, jsonify, flash, redirect, url_for
import requests
from firebase_admin import credentials, firestore, initialize_app
from werkzeug.security import generate_password_hash, check_password_hash
import random

app = Flask(__name__)
cred = credentials.Certificate('service.json')
default_app = initialize_app(cred)
db = firestore.client()


teachers_ref = db.collection('teachers')
students_ref=db.collection('students')
jobs_ref = db.collection('jobs')


#test Route
@app.route('/')
def home():
    return jsonify({'status' : 'home'})

@app.route('/addJobs')
def add_jobs():
    for i in range(5):
        jobs_ref.document().set({
            "title": "Title" + str(i),
            "Company": "Company" +str(i),
            "skills":["SQl","DS","English","Algorithms"]
            })

    return jsonify({'status': 'teacher signup successful'}), 200

@app.route('/addTeacher')
def add_teacher():
    for i in range(5,6):

            teachers_ref.document().set({
            "name": "Name" + str(i),
            "password": generate_password_hash("P"+str(i), method='sha256'),
            "email": "E" +str(i)+"@gmail.com",
            "phoneNo":str(i),
            "dob": "1/01/01",
            "teacher_assigned_slot":[]
            })

    return jsonify({'status': 'teacher signup successful'}), 200

@app.route('/addStudent')
def add_student():
    for i in range(1, 76):

        try:
            students_ref.document().set({
                "name": "N" + str(i),
                "password":generate_password_hash("SP"+str(i), method='sha256'),
                "email":"SE" +str(i)+"@gmail.com",
                "phoneNo":'9191919191',
                "dob":'01/01/01',
                "student_attendance": random.randint(60, 100),
                "starting_score": random.randint(50, 100),
                "student_assigned_slot":None,
                "preference":random.randint(1,8)
            })
        except:
            return jsonify({'status': 'student Unsignup successful'}), 418
    return jsonify({'status': 'student signup successful'}), 200

def addMarks(marks,batch,student_dict):
    if marks>=50 and marks<60:
        batch["50"].append(student_dict['name'])
    elif marks>=60 and marks<70:
        batch["60"].append(student_dict['name'])
    elif marks>=70 and marks<80:
        batch["70"].append(student_dict['name'])
    elif marks>=80 and marks<90:
        batch["80"].append(student_dict['name'])
    else:
        batch["90"].append(student_dict['name'])


def valid(key,slot):
    if slot[key][0]<15:
        return True

@app.route('/update')
def update():
    students_data = students_ref.get()
    for row in students_data:
        id1 = row.id
        student_dict=row.to_dict()
        students_ref.document(id1).update({'phoneNo':"12345678"})
        



@app.route('/allocateBatch')
def allocatebatch():
    batch = {
        "50":[],
        "60":[],
        "70":[],
        "80":[],
        "90":[]
    }

    slot_preference={
        "N"+str(i):0 for i in range(1,76)
    }

    slot ={
        "1":[0,0],
        "2":[0,0],
        "3":[0,0],
        "4":[0,0],
        "5":[0,0],
        "6":[0,0],
        "7":[0,0],
        "8":[0,0]
    }

    teachers ={
        "Name"+str(i):[] for i in range(1,6)
    }

    count = 0


    students_data = students_ref.get()
    for row in students_data:
        id1 = row.id
        student_dict=row.to_dict()
        marks = student_dict['starting_score']
        addMarks(marks,batch,student_dict)
        slot_preference[student_dict['name']]=student_dict['preference']
    

    for key,value in batch.items():
        student = value
        for j in student:
            for key in slot.keys():
                if key==str(slot_preference[j]):
                    if valid(key,slot):
                        slot[key][0] = slot[key][0]+1
                        break
                    else:
                        slot[key][0] = 1
                        slot[key][1] = slot[key][1]+1
                        break
    
    for key in slot.keys():
        if slot[key][0]<8:
            for j in slot.keys():
                if key == j:
                    continue
                if slot[key][0]+slot[j][0]<=15 and slot[key][0]+slot[j][0]>=8:
                    slot[key][0]=slot[key][0]+slot[j][0]
                    slot[j][0]=0
    
    for key in slot.keys():
        if slot[key][1]!=0 and slot[key][0]==0:
            total = slot[key][1]
        elif slot[key][1]!=0 and slot[key][0]!=0:
            total = slot[key][1]+1
        elif slot[key][1]==0 and slot[key][0]!=0:
            total = 1
        else:
            total = 0
        

        for i in range(total):
            if count!=5:
                for j in teachers:
                    if len(teachers[j])==0:
                        teachers[j].append(key)
                        count = count + 1
                        break
            else:
                for j in teachers:
                    cur_slot = teachers[j][-1]
                    if len(teachers[j])>=4:
                        continue
                    if abs(int(cur_slot)-int(key))>1:
                        teachers[j].append(key)
                        break
                
                
        
    return jsonify({"teacher":teachers,
                        "student":slot_preference})

def sub(slot):
    for j in teachers:
        if len(teachers[j])==0:
                teachers[j].append(slot)
                return
    for j in teachers:
        cur_slot = teachers[j][-1]
        if len(teachers[j])>=3:
            continue
        if abs(int(cur_slot)-int(slot))>1:
            teachers[j].append(slot)
            break

if __name__ == "__main__":
    app.run(debug=True,port=5002)
