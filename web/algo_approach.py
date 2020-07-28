

def allocate_students():
	l=[q1:{0:0}, q2:{0:0}, q3:{0:0}, q4:{0:0}, q5:{0:0}, q6:{0:0}, q7:{0:0}, q8:{0:0}]
	#key : defines number of students in one batch
	#value defines no of batches

	preference = current_user.get_json.get('preference')
	#"q1", "q2","q3"......"q8"

	if pref == "q1":
		if q1.key<=15:
			currrent_user.alloted_slot = "q1"
			q1.key+=1
		else:
			q1.key = 1
			q1.value+=1
	if pref == "q1":
		if q1.key<=15:
			currrent_user.alloted_slot = "q1"
			q1.key+=1
		else:
			q1.key = 1
			q1.value+=1
	.	.............
    
	for i in l:
		if i.keys<8:
			current_keys = i.keys
			#current_keys=5
			for j in l:
				if j.keys!=current_keys and 8-current_keys>=j.keys and j.keys+current_keys<=15:
					i.keys=i.keys+j
					i.value+=1
					j = 0
					#change the value of the key and the batch accordingly
