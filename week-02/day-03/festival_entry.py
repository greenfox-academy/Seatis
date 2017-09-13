queue = [
	{ 'name': 'Amanda', 'alcohol': 10, 'guns': 1 },
	{ 'name': 'Tibi', 'alcohol': 0, 'guns': 0 },
	{ 'name': 'Dolores', 'alcohol': 0, 'guns': 1 },
	{ 'name': 'Wade', 'alcohol': 1, 'guns': 1 },
	{ 'name': 'Anna', 'alcohol': 10, 'guns': 0 },
	{ 'name': 'Rob', 'alcohol': 2, 'guns': 0 },
	{ 'name': 'Joerg', 'alcohol': 20, 'guns': 0 }
]

# Queue of festivalgoers at entry
# no. of alcohol units 
# no. of guns

# Create a security_check function that returns a list of festivalgoers who can enter the festival

# If guns are found, remove them and put them on the watchlist (only the names)
# If alcohol is found confiscate it (set it to zero and add it to security_alchol_loot) and let them enter the festival

def security_check(check_list):
    man_ok = []
    watch_list = []
    security_alcohol_loot = 0
    for lines in check_list:
        if lines['guns'] == 0:
            if lines['alcohol'] > 0:
                security_alcohol_loot += lines['alcohol']
                lines['alcohol'] = 0
            man_ok += [lines]   
        else:
            watch_list += [lines['name']]
        security_alcohol_loot += lines['alcohol']
    print ("They cannot enter the festival:")
    print (watch_list,"\n")
    print("They can enter the festival:")
   
    for lines in man_ok:
        print (lines['name'])
    # return check_list
    print("Security_alcohol_loot: " + str(security_alcohol_loot))
    print("\n",man_ok)
   
security_check(queue)