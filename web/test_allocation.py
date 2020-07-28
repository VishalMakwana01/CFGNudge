from flask import Flask, render_template, request, jsonify, flash, redirect, url_for
from firebase_admin import credentials, firestore, initialize_app
app = Flask(__name__)

cred = credentials.Certificate('service.json')
default_app = initialize_app(cred)
db = firestore.client()
students_ref=db.collection('students')
#test Route
@app.route('/')
def home():
    return jsonify({'status' : 'home'})



@app.route('/allocate_student_slots')
def allocate():
    slots={'q1':[0:0], 'q2':[0:0], 'q3':[0:0], 'q4':[0:0], 'q5':[0:0], 'q6':[0:0], 'q7':[0:0], 'q8':[0:0]}
    most_recent_additions=[[] for i in  range(8)] #[] [] [] [] [] [] [] []
    students_data = students_ref.get()
    for row in students_data:
        student_dict=row.to_dict()
        curr_pref = student_dict['preference']

        if curr_pref == '1':
            if slots['q1'][0]<=15:
                slots['q1'][0] += 1
                most_recent_additions[0].append(student_dict)
                student_dict['student_assigned_slot'] = curr_pref
            else:
                slots['q1'][0] = 1
                slots['q1'][1] +=1
                most_recent_additions[0] = []


        if curr_pref == '2':
            if slots['q2'][0]<=15:
                slots['q2'][0] += 1
                most_recent_additions[1].append(student_dict)
                student_dict['student_assigned_slot'] = curr_pref
            else:
                slots['q2'][0] = 1
                slots['q2'][1] +=1
                most_recent_additions[1] = []

        if curr_pref == '3':
            if slots['q3'][0]<=15:
                slots['q3'][0] += 1
                most_recent_additions[2].append(student_dict)
                student_dict['student_assigned_slot'] = curr_pref
            else:
                most_recent_additions[2] = []
                slots['q3'][0] = 1
                slots['q3'][1] +=1


        if curr_pref == '4':
            if slots['q4'][0]<=15:
                slots['q4'][0] += 1
                most_recent_additions[3].append(student_dict)
                student_dict['student_assigned_slot'] = curr_pref
            else:
                most_recent_additions[3] = []
                slots['q4'][0] = 1
                slots['q4'][1] +=1



        if curr_pref == '5':
            if slots['q5'][0]<=15:
                most_recent_additions[4].append(student_dict)
                slots['q5'][0] += 1
                student_dict['student_assigned_slot'] = curr_pref
            else:
                most_recent_additions[4] = []
                slots['q5'][0] = 1
                slots['q5'][1] +=1


        if curr_pref == '6':
            if slots['q6'][0]<=15:
                slots['q6'][0] += 1

                most_recent_additions[5].append(student_dict)
                student_dict['student_assigned_slot'] = curr_pref
            else:
                most_recent_additions[5]=[]
                slots['q6'][0] = 1
                slots['q6'][1] +=1



        if curr_pref == '7':
            if slots['q7'][0]<=15:
                slots['q7'][0] += 1
                most_recent_additions[6].append(student_dict)
                student_dict['student_assigned_slot'] = curr_pref
            else:

                most_recent_additions[6]=[]
                slots['q7'][0] = 1
                slots['q7'][1] +=1



        if curr_pref == '8':
            if slots['q8'][0]<=15:
                slots['q8'][0] += 1
                most_recent_additions[7].append(student_dict)
                student_dict['student_assigned_slot'] = curr_pref
            else:
                most_recent_additions[7]=[]
                slots['q8'][0] = 1
                slots['q8'][1] +=1

    #to resolve merge issues (if batch size is less than 8 then merge instead of discarding the batch)
    for i in range(8):
        curr_key = "q"+str(i+1)
        if slots[curr_key][0] < 8:
            for j in range(8):
                if i!=j:
                    new_key = "q"+str(j+1)
                    if slots[new_key][0] >= 8-slots[curr_key][0] and slots[new_key][0]+slots[curr_key][0] <=15:
                        slots[new_key][0]+=slots[curr_key][0]
                        slots[curr_key][0] = 0
                        slots[curr_key][1]-=1
                        while(most_recent_additions[i]):
                            tmp = most_recent_additions[i].pop()
                            tmp['student_assigned_slot'] = new_key










if __name__ == "__main__":
    app.run(debug=True)
