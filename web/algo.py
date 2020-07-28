batches = {
    "10": ['a','b','c','d'],
    "20": ['e','f','g','h']
}

slot_preference = {
    'a':1,
    'b':1,
    'c':2,
    'd':4,
    'e':5,
    'f':1,
    'g':3,
    'h':6
}

# 0th: no of students in the current batch, 1st: Total Number of batches
slot = {
   "1":[0,2],
    "2":[0,1],
    "3":[0,1],
    "4":[8,0],
    "5":[7,1],
    "6":[6,1],
    "7":[8,0],
    "8":[6,0]
}

teachers ={
    'a':[],
    'b':[],
    'c':[],
    'd':[],
    'e':[]
}


def assign():
    global count
    for key in slot.keys():
        if slot[key][1]!=0 and slot[key][0]==0:
            total = slot[key][1]
        elif slot[key][1]!=0 and slot[key][0]!=0:
            total = slot[key][1]+1
        elif slot[key][1]==0 and slot[key][0]!=0:
            total = 1
        print(key,total)
        

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
                    if len(teachers[j])>=3:
                        continue
                    if abs(int(cur_slot)-int(key))>1:
                        teachers[j].append(key)
                        break

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

                
count = 0
assign()
print(teachers)

def valid(key):
    if slot[key][0]<2:
        return True


def check():
    for key,value in batches.items():
        student = value
        for j in student:
            for key in slot.keys():
                if key==str(slot_preference[j]):
                    if valid(key):
                        slot[key][0] = slot[key][0]+1
                        break
                    else:
                        slot[key][0] = 1
                        slot[key][1] = slot[key][1]+1
                        break
    

        

#check()


"""
def isValid(i):
    if len(slot[i]) <= 1:
        return True


def check_preference():
    for key,value in batches.items():
        student = value
        for j in student:
            for i in slot_preference[j]:
                if isValid(i):
                    slot[i].append(j)
                    break
    print(slot)

trainer = {
    'xyz':{'count':0, 'time':0, 'slot':[]},
    'abc':{'count':0, 'time':0, 'slot':[]},
    'cde':{'count':0, 'time':0, 'slot':[]}
    }

def assign_trainer():
    for i in slot:
        for j in trainer:
            if len([slot[i]]) == 0:
                continue
            if trainer[j]['count'] == 0:
                trainer[j]['count']+=1
                trainer[j]['slot'].append(i)
                trainer[j]['time']=1
                break
            else:
                cur_slot = trainer[j]['slot'][-1]
                if (i-cur_slot) == 1 or (i-trainer[j]['time'][0])>8:
                    continue
                else:
                    trainer[j]['slot'].append(i)
                    break


def assign_substitute(slot_available, teacher_leave):
    for j in trainer:
        if j == teacher_leave:
            continue
        if trainer[j]['count']==0:
            trainer[j]['count']+=1
            trainer[j]['slot'].append(i)
            trainer[j]['time']=1
            break
        else:
            cur_slot = trainer[j]['slot'][-1]
            if (slot_available-cur_slot) == 1 or (slot_available-trainer[j]['time'][0])>8:
                continue
            else:
                trainer[j]['slot'].append(i)
                break


    


check_preference()
assign_trainer()
print(trainer)
"""